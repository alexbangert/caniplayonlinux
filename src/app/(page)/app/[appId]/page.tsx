import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async function AppPage({
  params,
}: {
  params: { appId: number };
}) {
  const { app } = await getData(params.appId);

  console.debug(app);

  if (!app) {
    notFound();
  }

  return (
    <div>
      <h1>{app.title}</h1>
      <h2>Reports:</h2>
      <ul>
        {app.reports.map((report) => (
          <li key={report.timestamp.toString()}>
            Timestamp:{" "}
            {new Date(Number(report.timestamp) * 1000).toLocaleString()}
            <br />
            Starts Play: {report.starts_play ? "Yes" : "No"}
            <br />
            Score: {report.score}
            <br />
            GPU: {report.gpu || "Not specified"}
          </li>
        ))}
      </ul>
    </div>
  );
}

const getData = async (appId: number) => {
  const [app] = await Promise.all([
    prisma.app.findUnique({
      where: { id: parseInt(appId + "") }, // Why this workaround?
      include: {
        reports: {
          orderBy: {
            timestamp: "desc",
          },
        },
      },
    }),
  ]);

  return {
    app,
  };
};

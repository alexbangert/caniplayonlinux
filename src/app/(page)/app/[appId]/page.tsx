import GameDetails from "@/components/molecules/GameDetails";
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

  return <GameDetails appId={params.appId} />;
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

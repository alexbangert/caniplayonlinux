import prisma from "@/lib/db";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";

export async function GameCard({ appId }: { appId: number }) {
  const { app, averageScore } = await getData(appId);

  const getRatingColor = (rating: number) => {
    if (rating >= 0.7) return "bg-green-500";
    if (rating >= 0.4) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <Card className="w-full max-w-3xl h-64 overflow-hidden">
      <div className="flex h-full">
        <div className="w-1/3 relative">
          <Image
            src={`https://steamcdn-a.akamaihd.net/steam/apps/${appId}/header.jpg`}
            alt={`Steam App ${app?.title}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardContent className="w-2/3 p-6 flex flex-col">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-2xl font-bold mb-2">{app?.title}</h2>
              <Badge variant="secondary" className="text-lg py-1 px-2">
                GK
              </Badge>
            </div>
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full ${getRatingColor(averageScore)} flex items-center justify-center`}
              >
                <span className="text-white text-lg font-bold">
                  {Math.round(averageScore) * 10}
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}

const getData = async (appId: number) => {
  const [averageResult, app] = await Promise.all([
    prisma.report.aggregate({
      where: {
        appId: appId,
        starts_play: { not: null },
      },
      _avg: { score: true },
      _count: { score: true },
    }),
    prisma.app.findUnique({
      where: { id: appId },
      select: { title: true },
    }),
  ]);

  return {
    app,
    averageScore: averageResult._avg?.score ?? 0,
    totalReports: averageResult._count?.score ?? 0,
  };
};

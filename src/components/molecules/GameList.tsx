import Link from "next/link";
import { GameCard } from "./GameCard";
import { Suspense } from "react";

export default async function GameList({}) {
  const games = [
    { id: 1280930, hours: 3 },
    { id: 1091500, hours: 11 },
    { id: 2429640, hours: 6 },
    { id: 289070, hours: 66 },
    { id: 1085660, hours: 22 },
    { id: 1128920, hours: 4.2 },
  ].sort((a, b) => b.hours - a.hours);

  return (
    <>
      {games.map((g) => (
        <Suspense fallback={<p>Loading...</p>} key={g.id}>
          <GameCard appId={g.id} />
        </Suspense>
      ))}
    </>
  );
}

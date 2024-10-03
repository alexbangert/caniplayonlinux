import { GameCard } from "./GameCard";

export default async function GameList({}) {
  const games = [
    { id: 1280930, hours: 3 },
    { id: 1091500, hours: 11 },
    { id: 2429640, hours: 6 },
    { id: 289070, hours: 66 },
    { id: 1085660, hours: 22 },
  ].sort((a, b) => b.hours - a.hours);

  return (
    <>
      {games.map((g) => (
        <GameCard appId={g.id} key={g.id} />
      ))}
    </>
  );
}

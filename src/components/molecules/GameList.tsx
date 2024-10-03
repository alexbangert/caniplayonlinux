import { GameCard } from "./GameCard";

export default async function GameList({}) {
  const games = [289070];

  return (
    <>
      {games.map((g) => (
        <GameCard appId={g} key={g} />
      ))}
    </>
  );
}

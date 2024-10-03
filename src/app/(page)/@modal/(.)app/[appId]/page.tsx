import GameDetails from "@/components/molecules/GameDetails";
import GameDetailsModal from "@/components/molecules/GameDetailsModal";

export default function GameDetailsModalPage({
  params,
}: {
  params: { appId: number };
}) {
  return (
    <>
      <GameDetailsModal>
        <GameDetails appId={params.appId} />
      </GameDetailsModal>
    </>
  );
}

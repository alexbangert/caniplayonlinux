import GameList from "@/components/molecules/GameList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <div className="container mx-auto font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start mx-auto w-full ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 w-full">
          <Suspense fallback={<p>Loading...</p>}>
            <GameList />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

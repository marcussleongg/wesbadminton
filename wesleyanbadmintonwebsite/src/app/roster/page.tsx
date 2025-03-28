import Gallery from "../players";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 w-full max-w-full">
        <div className="self-start">
          <Link href="/" className="text-gray-100 hover:text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-2xl">←</span>
            </div>
          </Link>
        </div>
        <Gallery />
      </main>
    </div>
  );
}
import Gallery from "../players";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 pb-20 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <main className="flex flex-col gap-[32px] row-start-2 w-full max-w-full">
        <Link
          href="/"
          className="sticky top-4 left-4 text-gray-100 hover:text-gray-400 inline-block z-10 text-2xl"
        >
          ←
        </Link>
        <Gallery />
      </main>
    </div>
  );
}
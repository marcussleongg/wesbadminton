import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-4 sm:p-8 gap-8 sm:gap-16 font-[family-name:var(--font-geist-sans)] overflow-hidden">
      <header>
      <h1 className="text-3xl sm:text-5xl font-bold mb-6 mt-30 text-center leading-tight">
        <span className="text-red-400 font-extrabold text-4xl sm:text-2xl">Wesleyan University</span> 
        <span className="block text-lg sm:text-xl text-gray-200 font-medium mt-2 sm:mt-4">Competitive Club Badminton</span>
      </h1>
      </header>
      <main className="flex flex-col items-center justify-center row-start-2 w-full h-full">
        {/* Team photo inside main */}
        <div className="flex justify-center mb-8">
          <Image
            src="/images/teamphoto.jpeg"
            alt="Team photo"
            width={600} // Fixed width for the image
            height={400} // Fixed height (adjust based on your aspect ratio preference)
            className="object-cover object-center" // Optional: Styling for the image
          />
        </div>

        {/* Link to the roster */}
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="/roster"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            View standings
            <Image
              className="dark:invert rotate-180"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/wes_badminton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}

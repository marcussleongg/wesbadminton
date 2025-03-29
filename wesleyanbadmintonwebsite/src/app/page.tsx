import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full mt-10">
        <h1 className="text-center">
          <span className="text-red-400 font-extrabold text-3xl sm:text-4xl">Wesleyan University</span> 
          <span className="block text-base sm:text-lg text-gray-200 font-medium mt-2">Competitive Club Badminton</span>
        </h1>
      </header>
      
      {/* Empty div to push the main content to the center */}
      <div className="flex-grow"></div>
      
      <main className="flex flex-col items-center justify-center w-full">
        {/* Team photo with responsive sizing, now truly centered */}
        <div className="relative w-full max-w-[90vw] sm:max-w-[800px] h-[60vh] sm:h-[60vh]">
          <Image
            src="/images/teamphoto.jpeg"
            alt="Team photo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Link to the roster - increased margin-top */}
        <div className="mt-8 sm:mt-10">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4"
            href="/roster"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            View roster standings
            <Image
              className="dark:invert rotate-180"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
          </a>
        </div>
      </main>
      
      {/* Empty div to push the footer down */}
      <div className="flex-grow"></div>
      
      <footer className="w-full flex justify-center pb-15">
        <a
          className="flex items-center gap-1 text-sm hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/wes_badminton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={14}
            height={14}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}
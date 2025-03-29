import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between h-screen max-h-screen overflow-hidden p-2 sm:p-4 font-[family-name:var(--font-geist-sans)]">
      <header className="w-full mt-4 sm:mt-6">
        <h1 className="text-center">
          <span className="text-red-400 font-extrabold text-2xl sm:text-4xl">Wesleyan University</span> 
          <span className="block text-sm sm:text-lg text-gray-200 font-medium mt-1 sm:mt-2">Competitive Club Badminton</span>
        </h1>
      </header>
      
      {/* Main content should not grow or shrink */}
      <main className="flex flex-col items-center justify-center w-full h-full flex-shrink-0 overflow-hidden">
          <Image
            src="/images/teamphoto.jpeg"
            alt="Team photo"
            width={650}
            height={400}
            className="max-w-full max-h-full object-contain"
            priority
          />

        {/* Reduced margin-top on mobile */}
        <div className="mt-4 sm:mt-8">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4"
            href="/roster"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={14}
              height={14}
            />
            View roster standings
            <Image
              className="dark:invert rotate-180"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={14}
              height={14}
            />
          </a>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full flex justify-center pb-2 sm:pb-4">
        <a
          className="flex items-center gap-1 text-xs sm:text-sm hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/wes_badminton?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={12}
            height={12}
          />
          Instagram
        </a>
      </footer>
    </div>
  );
}

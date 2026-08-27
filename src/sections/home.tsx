import { ArrowDown } from 'lucide-react';
import bg from '../assets/bg.webp';

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <img
        src={bg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover brightness-30"
      />

      <div
        className="
          relative z-10
          flex min-h-screen
          w-full
          items-center justify-center
          px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12
          text-white
          [text-shadow:1px_0_0_gray,-1px_0_0_gray,0_1px_0_gray,0_-1px_0_gray,0.7px_0.7px_0_gray,-0.7px_-0.7px_0_gray,0.7px_-0.7px_0_gray,-0.7px_0.7px_0_gray]
        "
      >
        <div className="flex w-auto flex-col items-center lg:flex-row">
          <h1
            className="
              font-display
              text-8xl
              leading-none
              xl:text-9xl
              2xl:text-[10rem]
            "
          >
            Bryan
            <br />
            Antier
          </h1>

          <div
            className="
              flex flex-col
              gap-5
              p-3
              font-mono
              font-medium
              sm:gap-6
              sm:p-4
              md:gap-7
              md:p-5
              lg:gap-8
              lg:p-6
              xl:p-8
            "
          >
            <div className="flex flex-col">
              <span className="text-lg xl:text-xl">
                //SOFTWARE ENGINEER
              </span>

              <span className="ml-8 text-lg xl:text-xl">
                FULL STACK DEVELOPER
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg xl:text-xl">
                //CONTACT ME
              </span>

              <span className="ml-8 text-lg xl:text-xl">
                bryanantier7@gmail.com
              </span>

            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() =>
          document.getElementById("about")?.scrollIntoView({
            behavior: "smooth",
          })
        }
        className="
    group
    absolute bottom-5 right-5 z-10
    flex h-16 w-16
    items-center justify-center
    overflow-hidden
    border-5 border-white
    bg-transparent
  "
      >
        <span
          className="
      absolute
      left-1/2 top-1/2
      h-0 w-0
      -translate-x-1/2 -translate-y-1/2
      rounded-full
      bg-white
      transition-all duration-500 ease-out
      group-hover:h-[200%] group-hover:w-[200%]
    "
        />

        {/* Icon */}
        <ArrowDown
          className="
      relative z-5
      size-10
      text-white
      transition-colors duration-300
      group-hover:text-black
    "
        />
      </button>
    </main>
  );
}
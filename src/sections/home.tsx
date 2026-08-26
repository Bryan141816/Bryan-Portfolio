export default function Home() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
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
            font-semibold
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
              //CONTACT ME @
            </span>

            <span className="ml-8 text-lg xl:text-xl">
              bryanantier7@gmail.com
            </span>

            <span className="ml-8 text-lg xl:text-xl">
              (+63) 929 322 4888
            </span>
          </div>
        </div>

      </div>
    </div>
  )
}
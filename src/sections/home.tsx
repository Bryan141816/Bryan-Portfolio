export default function Home() {
  return (
    <div className="flex w-full min-h-screen justify-center items-center gap-4">
      <div className="flex w-auto h-fit flex-row items-center">
        <h1 className="font-display text-9xl">
          Bryan<br />
          Antier
        </h1>
        <div className="flex flex-col font-mono p-5 font-semibold gap-8 h-full ">
          <div className="flex flex-col">
            <span className="text-xl">//SOFTWARE ENGINEER</span>
            <span className="text-xl ml-14">FULL STACK DEVELOPER</span>
          </div>

          <div className="flex flex-col">
            <span className="text-xl">//CONTACT ME @</span>
            <span className="text-xl ml-14">bryanantier7@gmail.com</span>
            <span className="text-xl ml-14">(+63) 929 322 4888</span>
          </div>
        </div>
      </div>
    </div>
  )
}
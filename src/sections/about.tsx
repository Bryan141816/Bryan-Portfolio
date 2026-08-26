export default function About() {
  return (
    <div className="grid w-full min-h-screen grid-cols-3 grid-rows-[auto_auto] content-start p-20 gap-5">
      <div className="col-span-3 flex flex-col gap-2 mb-20">
        <h3 className="font-mono text-2xl font-bold">//ABOUT ME</h3>

        <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
          Hello I'm Bryan Antier - A aspiring software developer with experience building full-stack web application, REST APIs, desktop applications
          and mobile applications. Proficient in React, Next.js ASP.NET Core, Laravel, FastAPI and relational databases, with
          hands-on experience in cloud deployment, CI/CD, and infrastructure using Microsoft Azure, GitHub Actions, and
          Terraform. Familiar with Agile software development practices, including iterative development, collaboration,
          sprint planning, and continuous improvement.
        </p>
      </div>
      <h3 className="font-mono text-2xl font-bold mb-20">
        //Experience
      </h3>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">01.2026 - 7.2026</b><br />
        RAFI MFI
      </p>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">SOFTWARE ENGINEER</b><br />
        INTERN
      </p>
      <h3 className="font-mono text-2xl font-bold ">
        //TECH STACK
      </h3>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">{"<Language/>"}</b><br />
        JavaScript<br />
        TypeScript<br />
        C#<br />
        Python<br />
        Dart<br />
        SQL<br />
        PHP<br />
      </p>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">{"<Frontend/>"}</b><br />
        React<br />
        Vue.js<br />
        Next.js<br />
        HTML<br />
        CSS<br />
        Tailwind CSS<br />
        ShadCN UI
      </p>
      <div></div>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">{"<Backend/>"}</b><br />
        ASP.Net Core<br />
        FastAPI<br />
        Django<br />
        Laravel <br />
        Express.js
      </p>

      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">{"<Database/>"}</b><br />PostgreSQL<br /> MySQL<br /> SQL Server
      </p>
      <div></div>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        <b className="text-black">{"<Orm/>"}</b><br />Entity Framework Core<br /> Prisma<br /> Eloquent
      </p>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400 mb-20">
        <b className="text-black">{"<Mobile/>"}</b><br />Flutter<br />Jetpack Compose
      </p>

      <h3 className="font-mono text-2xl font-bold mb-20">
        //TOOLS
      </h3>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        Git<br /> Docker<br /> Vite<br /> Firebase<br /> Swagger/OpenAPI
      </p>
      <p className="font-mono text-xl text-justify uppercase tracking-tighter text-gray-400">
        Redis<br /> Figma<br /> Linux<br /> VS Code<br /> Neovim
      </p>
    </div>
  )
}
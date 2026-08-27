export default function About() {
  return (
    <main
      className="
        grid
        w-full
        min-h-screen
        grid-cols-2
        md:grid-cols-3
        content-start
        gap-2
        md:gap-5
        p-5
        sm:p-7
        md:p-10
        lg:p-15
        xl:p-20
        [&_h3]:font-mono
        [&_h3]:text-base
        [&_h3]:font-bold
        md:[&_h3]:text-xl
        lg:[&_h3]:text-2xl

        [&_p]:font-mono
        [&_p]:text-sm
     
        [&_p]:uppercase
        [&_p]:tracking-tighter
        [&_p]:text-gray-400
        md:[&_p]:text-sm
        lg:[&_p]:text-xl

        [&_b]:text-black
      "
    >
      {/* ABOUT ME */}
      <div className="col-span-2 flex flex-col gap-2 md:col-span-3 ">
        <h3>//ABOUT ME</h3>

        <p className="text-justify">
          Hello I'm Bryan Antier - A aspiring software developer with
          experience building full-stack web application, REST APIs, desktop
          applications and mobile applications. Proficient in React, Next.js
          ASP.NET Core, Laravel, FastAPI and relational databases, with
          hands-on experience in cloud deployment, CI/CD, and infrastructure
          using Microsoft Azure, GitHub Actions, and Terraform. Familiar with
          Agile software development practices, including iterative
          development, collaboration, sprint planning, and continuous
          improvement.
        </p>
      </div>
      <span className="mb-5 md:mb-20 col-span-2 md:col-span-3"></span>
      <h3 className="col-span-2 md:col-span-1">
        //Experience
      </h3>

      <p>
        <b>01.2026 - 7.2026</b>
        <br />
        RAFI MFI
      </p>

      <p>
        <b>SOFTWARE ENGINEER</b>
        <br />
        INTERN
      </p>

      <span className="mb-5 md:mb-20 col-span-2 md:col-span-3"></span>
      <h3 className="col-span-2 md:col-span-1">
        //TECH STACK
      </h3>

      <p>
        <b>{"<Language/>"}</b>
        <br />
        JavaScript
        <br />
        TypeScript
        <br />
        C#
        <br />
        Python
        <br />
        Dart
        <br />
        SQL
        <br />
        PHP
        <br />
      </p>

      <p>
        <b>{"<Frontend/>"}</b>
        <br />
        React
        <br />
        Vue.js
        <br />
        Next.js
        <br />
        HTML
        <br />
        CSS
        <br />
        Tailwind CSS
        <br />
        ShadCN UI
      </p>

      {/* Empty grid cell on desktop */}
      <div className="hidden md:block"></div>

      <p>
        <b>{"<Backend/>"}</b>
        <br />
        ASP.Net Core
        <br />
        FastAPI
        <br />
        Django
        <br />
        Laravel
        <br />
        Express.js
      </p>

      <p>
        <b>{"<Database/>"}</b>
        <br />
        PostgreSQL
        <br />
        MySQL
        <br />
        SQL Server
      </p>

      {/* Empty grid cell on desktop */}
      <div className="hidden md:block"></div>

      <p >
        <b>{"<Orm/>"}</b>
        <br />
        Entity Framework Core
        <br />
        Prisma
        <br />
        Eloquent
      </p>

      <p >
        <b>{"<Mobile/>"}</b>
        <br />
        Flutter
        <br />
        Jetpack Compose
      </p>
      <span className="mb-5 md:mb-20 col-span-2 md:col-span-3"></span>
      <h3 className="col-span-2 md:col-span-1">
        //TOOLS
      </h3>

      <p>
        Git
        <br />
        Docker
        <br />
        Vite
        <br />
        Firebase
        <br />
        Swagger/OpenAPI
      </p>

      <p>
        Redis
        <br />
        Figma
        <br />
        Linux
        <br />
        VS Code
        <br />
        Neovim
      </p>
    </main>
  );
}
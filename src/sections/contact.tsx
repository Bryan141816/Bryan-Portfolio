export default function Contact() {
  return (
    <div
      className="
        min-h-screen
        flex flex-col
        gap-8
        p-5
        sm:p-7
        md:grid
        md:grid-cols-2
        md:grid-rows-2
        md:gap-10
        md:p-10
        lg:p-15
        xl:p-20
        place-items-center
      "
    >
      {/* TOP LEFT */}
      <span
        className="
          flex items-center justify-center
          font-display font-bold
          text-6xl
          sm:text-7xl
          md:text-7xl
          lg:text-8xl
          xl:text-9xl
          text-center
        "
      >
        CONT@CT
      </span>

      {/* MOBILE TITLE */}
      <span
        className="
          font-display font-bold
          text-6xl
          sm:text-7xl
          block md:hidden
        "
      >
        M3
      </span>

      <div
        className="
          flex flex-col
          p-2
          gap-5
          text-lg
          sm:text-xl
          font-bold
          font-mono
          uppercase

          [&_label]:text-sm
          [&_label]:font-semibold
          [&_label]:text-gray-500

          sm:[&_label]:text-base

          [&_a]:text-xl
          sm:[&_a]:text-2xl
          md:[&_a]:text-3xl

          [&_a]:relative
          [&_a]:w-fit
          [&_a]:inline-block
          [&_a]:after:content-['']
          [&_a]:after:absolute
          [&_a]:after:left-0
          [&_a]:after:bottom-0
          [&_a]:after:h-[5px]
          [&_a]:after:w-full
          [&_a]:after:bg-current
          [&_a]:after:origin-center
          [&_a]:after:scale-x-0
          [&_a]:after:transition-transform
          [&_a]:after:duration-300
          [&_a]:hover:after:scale-x-100

          [&_div]:flex
          [&_div]:flex-col

          break-words
        "
      >
        <div>
          <label>SEND EMAIL</label>
          <a href="mailto:bryanantier7@gmail.com">
            bryanantier7@gmail.com
          </a>
        </div>

        <div>
          <label>VISIT GITHUB PROFILE</label>
          <a
            href="https://github.com/Bryan141816"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bryan141816
          </a>
        </div>

        <div>
          <label>VISIT LINKEDIN PROFILE</label>
          <a
            href="https://www.linkedin.com/in/bryan-antier-6637a540b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bryan Antier
          </a>
        </div>
      </div>

      {/* BOTTOM LEFT */}
      <p
        className="
    uppercase
    text-justify
    text-sm
    sm:text-base
    md:text-xl
    lg:text-2xl
    px-5
    sm:px-0
    font-semibold
    max-w-xl
    self-center
  "
      >
        <span className="font-normal">
          [Statement]
        </span>

        {"  "}

        I'm always open to new opportunities, interesting projects, job offers,
        and collaborations. Whether you're looking to work together on a project,
        have an opportunity you'd like to discuss, or simply want to connect,
        feel free to reach out through any of the platforms below.
      </p>

      {/* BOTTOM RIGHT */}
      <span
        className="
          font-display font-bold
          hidden md:block
          text-7xl
          lg:text-8xl
          xl:text-9xl
        "
      >
        M3
      </span>
    </div>
  );
}
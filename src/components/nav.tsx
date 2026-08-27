import { useEffect, useState } from "react";
import logo from "/logo.svg";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect devices that support hover
  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover)");

    const updateHoverSupport = () => {
      setCanHover(mediaQuery.matches);
    };

    updateHoverSupport();
    mediaQuery.addEventListener("change", updateHoverSupport);

    return () => {
      mediaQuery.removeEventListener("change", updateHoverSupport);
    };
  }, []);

  // Handle navbar visibility on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scrolling down
        setVisible(false);
        setRevealed(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Show if:
  // 1. Normal scroll visibility is true
  // 2. Desktop hover is active
  // 3. User tapped the top area
  const shouldShowNav = visible || hovered || revealed;

  return (
    <>
      {/* Top reveal area */}
      <div
        className="fixed top-0 left-0 z-40 h-20 w-full"
        onMouseEnter={() => {
          if (canHover) {
            setHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (canHover) {
            setHovered(false);
          }
        }}
        onClick={() => {
          setRevealed(true);
        }}
      />

      {/* Logo */}
      <a
        href="#home"
        className={`
          fixed top-6 left-6 z-50
          transition-all duration-300 ease-in-out
          ${shouldShowNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
          }
        `}
        onMouseEnter={() => {
          if (canHover) {
            setHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (canHover) {
            setHovered(false);
          }
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className={`
            h-10 w-auto
            transition-[filter] duration-300 ease-in-out
            ${activeSection !== "home" ? "brightness-0" : ""}
          `}
        />
      </a>

      {/* Navigation */}
      <nav
        className={`
          fixed top-6 left-0 right-0 z-50 mx-auto w-fit
          transition-all duration-300 ease-in-out
          ${shouldShowNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
          }
        `}
        onMouseEnter={() => {
          if (canHover) {
            setHovered(true);
          }
        }}
        onMouseLeave={() => {
          if (canHover) {
            setHovered(false);
          }
        }}
      >
        <div
          className={`
            flex
            border-5
            p-0
            m-0
            transition-colors duration-300 ease-in-out
            bg-transparent
            ${activeSection === "home"
              ? "border-white"
              : "border-black bg-white"
            }
          `}
        >
          <NavLink
            nav_key="home"
            text="HOME"
            activeSection={activeSection}
          />

          <NavLink
            nav_key="about"
            text="ABOUT"
            activeSection={activeSection}
          />
        </div>
      </nav>
    </>
  );
}

interface NavLinkProp {
  nav_key: string;
  text: string;
  activeSection: string;
}

function NavLink({ nav_key, text, activeSection }: NavLinkProp) {
  const isCurrent = activeSection === nav_key;
  const isHome = activeSection === "home";

  return (
    <a
      href={`#${nav_key}`}
      className={`
        group relative block overflow-hidden
        border-0 px-5 py-2
        ${isHome ? "text-white" : "text-black"}
        ${isCurrent
          ? "underline decoration-4 underline-offset-4"
          : "no-underline"
        }
      `}
    >
      {!isCurrent && (
        <span
          className={`
            absolute left-1/2 top-1/2
            h-0 w-0
            -translate-x-1/2 -translate-y-1/2
            rounded-full
            transition-all duration-500 ease-out
            group-hover:h-[250%] group-hover:w-[250%]
            ${isHome ? "bg-white" : "bg-black"}
          `}
        />
      )}

      <span
        className={`
          relative z-10
          font-medium
          ${!isCurrent
            ? `
                transition-colors duration-300
                ${isHome
              ? "group-hover:text-black"
              : "group-hover:text-white"
            }
              `
            : ""
          }
        `}
      >
        {text}
      </span>
    </a>
  );
}
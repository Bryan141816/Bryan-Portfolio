import { useEffect, useState } from "react";
import {
  Menu,
  X,
} from "lucide-react";
import logo from "/logo.svg";

export default function Nav() {
  const [visible, setVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [canHover, setCanHover] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        setMobileMenuOpen(false);
      } else {
        // Scrolling up
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

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

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const shouldShowNav =
    visible ||
    hovered ||
    revealed ||
    mobileMenuOpen;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* =========================================
          TOP REVEAL AREA
      ========================================= */}
      <div
        className="
          fixed
          top-0
          left-0
          z-40
          h-20
          w-full
        "
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

      {/* =========================================
          LOGO
      ========================================= */}
      <a
        href="#home"
        onClick={closeMobileMenu}
        className={`
          fixed
          top-5
          left-5
          sm:top-6
          sm:left-6
          z-50

          transition-all
          duration-300
          ease-in-out

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
            h-8
            sm:h-10
            w-auto

            transition-[filter]
            duration-300
            ease-in-out

            ${activeSection !== "home"
              ? "brightness-0"
              : ""
            }
          `}
        />
      </a>

      {/* =========================================
          DESKTOP NAVIGATION
      ========================================= */}
      <nav
        className={`
          hidden
          md:block

          fixed
          top-6
          left-0
          right-0
          z-50

          mx-auto
          w-fit

          transition-all
          duration-300
          ease-in-out

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

            transition-colors
            duration-300
            ease-in-out

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

          <NavLink
            nav_key="contact"
            text="CONTACT"
            activeSection={activeSection}
          />
        </div>
      </nav>

      {/* =========================================
          MOBILE MENU BUTTON
      ========================================= */}
      <button
        type="button"
        aria-label={
          mobileMenuOpen
            ? "Close menu"
            : "Open menu"
        }
        aria-expanded={mobileMenuOpen}
        onClick={() => {
          setMobileMenuOpen((prev) => !prev);
          setRevealed(true);
        }}
        className={`
          md:hidden

          fixed
          top-4
          right-4
          sm:top-5
          sm:right-5
          z-[60]

          flex
          items-center
          justify-center

          h-12
          w-12

          border-4

          transition-all
          duration-300
          ease-in-out

          ${activeSection === "home"
            ? "border-white bg-black text-white"
            : "border-black bg-white text-black"
          }

          ${shouldShowNav
            ? "translate-y-0 opacity-100"
            : "-translate-y-24 opacity-0"
          }
        `}
      >
        {mobileMenuOpen ? (
          <X
            size={28}
            strokeWidth={3}
          />
        ) : (
          <Menu
            size={28}
            strokeWidth={3}
          />
        )}
      </button>

      {/* =========================================
          MOBILE MENU
      ========================================= */}
      <div
        className={`
          md:hidden

          fixed
          inset-0
          z-50

          min-h-screen

          px-5
          pt-24
          pb-10

          transition-all
          duration-300
          ease-in-out

          ${mobileMenuOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
          }

          ${activeSection === "home"
            ? "bg-black text-white"
            : "bg-white text-black"
          }
        `}
      >
        <div
          className="
            flex
            flex-col
            font-display
            font-bold
            uppercase
          "
        >
          <MobileNavLink
            href="#home"
            text="HOME"
            activeSection={activeSection}
            section="home"
            onClick={closeMobileMenu}
          />

          <MobileNavLink
            href="#about"
            text="ABOUT"
            activeSection={activeSection}
            section="about"
            onClick={closeMobileMenu}
          />

          <MobileNavLink
            href="#contact"
            text="CONTACT"
            activeSection={activeSection}
            section="contact"
            onClick={closeMobileMenu}
          />
        </div>
      </div>
    </>
  );
}

/* =========================================
   DESKTOP NAV LINK
========================================= */

interface NavLinkProp {
  nav_key: string;
  text: string;
  activeSection: string;
}

function NavLink({
  nav_key,
  text,
  activeSection,
}: NavLinkProp) {
  const isCurrent =
    activeSection === nav_key;

  const isHome =
    activeSection === "home";

  return (
    <a
      href={`#${nav_key}`}
      className={`
        group
        relative
        block
        overflow-hidden

        border-0

        px-5
        py-2

        ${isHome
          ? "text-white"
          : "text-black"
        }

        ${isCurrent
          ? `
              underline
              decoration-4
              underline-offset-4
            `
          : "no-underline"
        }
      `}
    >
      {/* Hover circle */}
      {!isCurrent && (
        <span
          className={`
            absolute
            left-1/2
            top-1/2

            h-0
            w-0

            -translate-x-1/2
            -translate-y-1/2

            rounded-full

            transition-all
            duration-500
            ease-out

            group-hover:h-[250%]
            group-hover:w-[250%]

            ${isHome
              ? "bg-white"
              : "bg-black"
            }
          `}
        />
      )}

      {/* Text */}
      <span
        className={`
          relative
          z-10

          font-medium

          ${!isCurrent
            ? `
                transition-colors
                duration-300

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

/* =========================================
   MOBILE NAV LINK
========================================= */

interface MobileNavLinkProps {
  href: string;
  text: string;
  activeSection: string;
  section: string;
  onClick: () => void;
}

function MobileNavLink({
  href,
  text,
  activeSection,
  section,
  onClick,
}: MobileNavLinkProps) {
  const isCurrent =
    activeSection === section;

  return (
    <a
      href={href}
      onClick={onClick}
      className={`
        flex
        items-center

        border-b-4

        py-5

        text-5xl
        sm:text-6xl

        transition-all
        duration-300

        ${isCurrent
          ? `
              underline
              decoration-4
              underline-offset-8
            `
          : `
              opacity-60
              hover:opacity-100
            `
        }
      `}
    >
      {text}
    </a>
  );
}
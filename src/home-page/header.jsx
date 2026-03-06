import { useEffect, useState } from "react";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-colors duration-300 ${
        hasScrolled
          ? "bg-[#1d2732]/95 shadow-lg shadow-black/20 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full items-center justify-between px-[10%]">
        <a
          href="#home"
          className={`text-3xl font-light tracking-[0.35em] md:text-4xl ${
            hasScrolled ? "text-white" : "text-white/95"
          }`}
        >
          ULUX
        </a>
        <nav
          className={`flex items-center gap-10 text-base font-light transition-colors md:gap-12 md:text-lg lg:gap-16 lg:text-xl ${
            hasScrolled ? "text-white/90" : "text-white"
          }`}
          aria-label="Main"
        >
          <a className="transition-colors hover:text-white" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-white" href="#people">
            People
          </a>
          <div className="group relative">
            <button
              type="button"
              className="transition-colors hover:text-white"
              aria-haspopup="menu"
            >
              Services
            </button>
            <div className="invisible absolute left-0 top-full z-30 mt-2 w-64 border border-gray-300 bg-white/95 opacity-0 shadow-sm transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <a
                className="block border-b border-gray-200 px-4 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900"
                href="#service-1"
              >
                FALCON : The Design
              </a>
              <a
                className="block border-b border-gray-200 px-4 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900"
                href="#service-2"
              >
                PIGEON : The Arrangement
              </a>
              <a
                className="block border-b border-gray-200 px-4 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900"
                href="#service-3"
              >
                SHARK : The Stewardship
              </a>
              <a
                className="block px-4 py-3 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-gray-900"
                href="#service-4"
              >
                LION : The Presence
              </a>
            </div>
          </div>
          <a className="transition-colors hover:text-white" href="#partners">
            Partners
          </a>
          <a className="transition-colors hover:text-white" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

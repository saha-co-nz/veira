const Header = () => {
  return (
    <header className="w-full">
      <div className="mx-auto flex h-20 w-full items-center justify-between px-[10%]">
        <a
          href="#home"
          className="text-3xl font-light tracking-[0.35em] text-gray-900 md:text-4xl"
        >
          ULUX
        </a>
        <nav
          className="flex items-center gap-10 text-base font-light text-gray-800 md:gap-12 md:text-lg lg:gap-16 lg:text-xl"
          aria-label="Main"
        >
          <a className="transition-colors hover:text-gray-900" href="#about">
            About
          </a>
          <a className="transition-colors hover:text-gray-900" href="#people">
            People
          </a>
          <div className="group relative">
            <button
              type="button"
              className="transition-colors hover:text-gray-900"
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
          <a className="transition-colors hover:text-gray-900" href="#partners">
            Partners
          </a>
          <a className="transition-colors hover:text-gray-900" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

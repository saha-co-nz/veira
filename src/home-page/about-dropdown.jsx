const AboutDropdown = ({ showSolidHeader = false }) => {
  const panelClasses = showSolidHeader
    ? "border-y border-gray-200 bg-white/95 shadow-2xl"
    : "border-y border-white/20 bg-transparent";
  const panelEffects = showSolidHeader ? "backdrop-blur-sm" : "shadow-none";

  const headingColor = showSolidHeader ? "text-gray-500" : "text-white/70";
  const titleColor = showSolidHeader ? "text-gray-900" : "text-white";
  const bodyColor = showSolidHeader ? "text-gray-700" : "text-white/85";
  const dividerColor = showSolidHeader
    ? "border-gray-200 lg:border-r"
    : "border-white/20 lg:border-r";
  const linkColor = showSolidHeader
    ? "border-gray-200 text-gray-800 hover:text-gray-950"
    : "border-white/20 text-white/90 hover:text-white";

  return (
    <div className="group relative">
      <button
        id="about-menu-button"
        type="button"
        className="transition-colors hover:text-white"
        aria-haspopup="menu"
      >
        About
      </button>
      <div
        className={`invisible fixed left-0 right-0 top-20 z-40 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 ${panelClasses} ${panelEffects}`}
        role="menu"
        aria-labelledby="about-menu-button"
      >
        <div className="mx-auto grid w-full max-w-360 gap-6 px-6 py-5 sm:px-8 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:px-[10%] lg:py-8">
          <div
            className={`border-b pb-6 lg:border-b-0 lg:pb-0 lg:pr-8 ${dividerColor}`}
          >
            <p
              className={`text-xs uppercase tracking-[0.32em] ${headingColor}`}
            >
              About ULUX
            </p>
            <h3
              className={`mt-3 text-2xl font-medium leading-tight md:text-3xl ${titleColor}`}
            >
              Private service, built on trust and discretion.
            </h3>
            <p
              className={`mt-4 max-w-xl text-sm leading-relaxed md:text-base ${bodyColor}`}
            >
              We design and manage journeys for clients who expect precision,
              privacy, and consistency in every interaction.
            </p>
          </div>

          <div className="flex flex-col">
            <a
              className={`border-b px-1 py-3 text-sm transition-colors ${linkColor}`}
              href="#who-we-are"
              role="menuitem"
            >
              Who we are as a company
            </a>
            <a
              className={`border-b px-1 py-3 text-sm transition-colors ${linkColor}`}
              href="#people"
              role="menuitem"
            >
              People
            </a>
            <a
              className={`border-b px-1 py-3 text-sm transition-colors ${linkColor}`}
              href="#governance"
              role="menuitem"
            >
              Governance
            </a>
            <a
              className={`px-1 py-3 text-sm transition-colors ${showSolidHeader ? "text-gray-800 hover:text-gray-950" : "text-white/90 hover:text-white"}`}
              href="#faq"
              role="menuitem"
            >
              FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDropdown;

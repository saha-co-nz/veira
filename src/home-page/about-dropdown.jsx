const AboutDropdown = () => {
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
        className="invisible fixed left-0 right-0 top-20 z-40 border-y border-gray-200 bg-white/95 opacity-0 shadow-2xl backdrop-blur-sm transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
        role="menu"
        aria-labelledby="about-menu-button"
      >
        <div className="mx-auto grid w-full max-w-360 gap-6 px-6 py-5 sm:px-8 md:px-10 lg:grid-cols-[1.4fr_1fr] lg:gap-8 lg:px-[10%] lg:py-8">
          <div className="border-b border-gray-200 pb-6 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
            <p className="text-xs uppercase tracking-[0.32em] text-gray-500">
              About ULUX
            </p>
            <h3 className="mt-3 text-2xl font-medium leading-tight text-gray-900 md:text-3xl">
              Private service, built on trust and discretion.
            </h3>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-gray-700 md:text-base">
              We design and manage journeys for clients who expect precision,
              privacy, and consistency in every interaction.
            </p>
          </div>

          <div className="flex flex-col">
            <a
              className="border-b border-gray-200 px-1 py-3 text-sm text-gray-800 transition-colors hover:text-gray-950"
              href="#who-we-are"
              role="menuitem"
            >
              Who we are as a company
            </a>
            <a
              className="border-b border-gray-200 px-1 py-3 text-sm text-gray-800 transition-colors hover:text-gray-950"
              href="#people"
              role="menuitem"
            >
              People
            </a>
            <a
              className="border-b border-gray-200 px-1 py-3 text-sm text-gray-800 transition-colors hover:text-gray-950"
              href="#governance"
              role="menuitem"
            >
              Governance
            </a>
            <a
              className="px-1 py-3 text-sm text-gray-800 transition-colors hover:text-gray-950"
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

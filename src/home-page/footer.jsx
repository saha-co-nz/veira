const Footer = () => {
  return (
    <footer className="bg-black px-[10%] pb-10 pt-6 text-gray-300 md:pb-12 md:pt-8">
      <div className="border-t border-gray-700 pt-12 md:pt-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-14">
          <div>
            <p className="text-4xl font-light tracking-[0.25em] text-white">
              ULUX
            </p>
            <p className="mt-4 text-lg leading-relaxed text-gray-400">
              Exceptional architecture and interior design
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Navigation
            </p>
            <nav
              className="mt-4 flex flex-col gap-3 text-xl"
              aria-label="Footer navigation"
            >
              <a className="transition-colors hover:text-white" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-white" href="#people">
                People
              </a>
              <a
                className="transition-colors hover:text-white"
                href="#partners"
              >
                Partners
              </a>
              <a className="transition-colors hover:text-white" href="#contact">
                Contact
              </a>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
                Services
              </p>
              <a
                className="transition-colors hover:text-white"
                href="#service-1"
              >
                Falcon : The Design
              </a>
              <a
                className="transition-colors hover:text-white"
                href="#service-2"
              >
                Pigeon : The Arrangement
              </a>
              <a
                className="transition-colors hover:text-white"
                href="#service-3"
              >
                Shark : The Stewardship
              </a>
              <a
                className="transition-colors hover:text-white"
                href="#service-4"
              >
                Lion : The Presence
              </a>
            </nav>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Contact
            </p>
            <div className="mt-4 flex flex-col gap-3 text-xl">
              <a
                className="transition-colors hover:text-white"
                href="mailto:hello@ulux.co.nz"
              >
                example@ulux.co.nz
              </a>
              <a
                className="transition-colors hover:text-white"
                href="tel:+649XXXXXXX"
              >
                +64 123 456 789
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              Follow
            </p>
            <div className="mt-4 flex flex-col gap-3 text-xl">
              <a className="transition-colors hover:text-white" href="#">
                Instagram
              </a>
              <a className="transition-colors hover:text-white" href="#">
                LinkedIn
              </a>
              <a className="transition-colors hover:text-white" href="#">
                Pinterest
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-gray-700 pt-8 md:mt-14 md:flex md:items-center md:justify-between">
        <p className="text-base text-gray-500">
          © 2026 ULUX. All rights reserved.
        </p>
        <div className="mt-4 flex items-center gap-8 text-base text-gray-500 md:mt-0">
          <a className="transition-colors hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="transition-colors hover:text-white" href="#">
            Terms
          </a>
          <a className="transition-colors hover:text-white" href="#">
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

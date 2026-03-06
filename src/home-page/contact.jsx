const Contact = () => {
  return (
    <section
      id="contact"
      className="border-t border-gray-700 bg-black px-[10%] py-24 md:py-28 lg:py-32"
    >
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <div>
          <p className="text-sm uppercase tracking-[0.45em] text-gray-500 md:text-base">
            Get In Touch
          </p>

          <h2 className="mt-8 max-w-md text-6xl font-semibold leading-[1.05] text-white md:text-7xl">
            Let&apos;s create something exceptional
          </h2>

          <div className="mt-14 space-y-10 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Email
              </p>
              <p className="mt-3 text-4xl">example@ulux.co.nz</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Phone
              </p>
              <p className="mt-3 text-4xl">+64 123 456 789</p>
            </div>

            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
                Location
              </p>
              <p className="mt-3 text-3xl leading-relaxed text-gray-200">
                123 Street Avenue
                <br />
                Auckland 1010
                <br />
                New Zealand
              </p>
            </div>
          </div>
        </div>

        <form className="space-y-9" aria-label="Contact form">
          <div>
            <label
              className="text-sm uppercase tracking-[0.2em] text-gray-500"
              htmlFor="name"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="mt-5 w-full border-b border-gray-800 bg-transparent pb-4 text-3xl text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="text-sm uppercase tracking-[0.2em] text-gray-500"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              className="mt-5 w-full border-b border-gray-800 bg-transparent pb-4 text-3xl text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="text-sm uppercase tracking-[0.2em] text-gray-500"
              htmlFor="phone"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="Your phone number"
              className="mt-5 w-full border-b border-gray-800 bg-transparent pb-4 text-3xl text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              className="text-sm uppercase tracking-[0.2em] text-gray-500"
              htmlFor="details"
            >
              Project Details
            </label>
            <textarea
              id="details"
              rows={4}
              placeholder="Tell us about your project..."
              className="mt-5 w-full resize-none border-b border-gray-800 bg-transparent pb-4 text-3xl text-white placeholder:text-gray-500 focus:border-gray-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="pt-4 text-4xl font-semibold text-white transition-colors hover:text-gray-300"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

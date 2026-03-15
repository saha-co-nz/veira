const Form = () => {
  return (
    <form className="mx-auto w-full max-w-3xl rounded-md bg-white p-6 shadow-md md:p-8">
      <h2 className="mb-6 text-3xl font-light text-[#1d2732]">Enquire</h2>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="md:col-span-2">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#1d2732]"
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#1d2732]"
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            htmlFor="phone"
          >
            Phone
          </label>
          <input
            className="w-full rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#1d2732]"
            id="phone"
            name="phone"
            type="tel"
            placeholder="+64 ..."
          />
        </div>

        <div className="md:col-span-2">
          <label
            className="mb-2 block text-sm font-medium text-gray-700"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="min-h-36 w-full rounded-md border border-gray-300 px-4 py-3 text-base text-gray-900 outline-none transition focus:border-[#1d2732]"
            id="message"
            name="message"
            placeholder="Tell us about your project"
            required
          />
        </div>
      </div>

      <button
        className="mt-6 rounded-md bg-[#1d2732] px-6 py-3 text-base font-medium text-white transition hover:bg-[#2a3848]"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;

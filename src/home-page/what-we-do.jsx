const serviceBullets = [
  {
    id: "service-1",
    name: "Falcon",
    title: "The Design",
    description:
      "First step of ULUX starts with a distinguished blueprint, crafted for your preference.",
  },
  {
    id: "service-2",
    name: "Pigeon",
    title: "The Arrangement",
    description: "Everything aligned, quietly and precisely handled by ULUX.",
  },
  {
    id: "service-3",
    name: "Shark",
    title: "The Stewardship",
    description: "A constant, unobtrusive presence throughout your journey.",
  },
  {
    id: "service-4",
    name: "Lion",
    title: "The Presence",
    description: "Reserved, personal, and rare — shared only when aligned.",
  },
];

const WhatWeDo = () => {
  return (
    <section
      id="about"
      className="border-t border-gray-200 bg-white px-[10%] py-24 md:py-28 lg:py-32"
    >
      <div className="w-full">
        <p className="text-sm uppercase tracking-[0.45em] text-gray-500 md:text-base">
          What We Do
        </p>
        <h2 className="mt-8 max-w-4xl text-6xl font-semibold leading-[1.05] text-gray-900 md:text-7xl lg:text-8xl">
          Private journeys, precisely curated.
        </h2>
        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl">
          Exclusive travel, quietly arranged.
        </p>

        <ul className="mt-16 border-t border-gray-300">
          {serviceBullets.map((service, index) => (
            <li
              key={service.id}
              id={service.id}
              className="grid grid-cols-[80px_1fr] gap-8 border-b border-gray-300 py-12 md:grid-cols-[100px_1fr] md:gap-12 md:py-14"
            >
              <p className="pt-1 text-5xl font-light leading-none text-gray-300 md:text-6xl">
                {(index + 1).toString().padStart(2, "0")}
              </p>
              <div>
                <p className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
                  {service.name}
                  <span className="ml-3 text-2xl font-normal text-gray-600 md:text-3xl">
                    {service.title}
                  </span>
                </p>
                <p className="mt-4 max-w-4xl text-xl leading-relaxed text-gray-700 md:text-2xl">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhatWeDo;

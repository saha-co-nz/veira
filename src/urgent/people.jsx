const people = [
  {
    name: "Satyam Saha CA",
    role: "Director",
    phone: "022 315 5751",
    email: "business@saha.co.nz",
  },
  {
    name: "Daniel Hawes",
    role: "Business Development Partner",
    phone: "022 807 3548",
    email: "business@saha.co.nz",
  },
];

import { motion } from "framer-motion";

const inView = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1], delay },
});

const People = () => {
  return (
    <section
      id="people"
      className="border-t border-gray-200 bg-white px-[10%] py-24 md:py-28 lg:py-32"
    >
      <motion.p
        className="text-sm uppercase tracking-[0.45em] text-gray-500 md:text-base"
        {...inView(0)}
      >
        Our People
      </motion.p>

      <motion.h2
        className="mt-8 text-5xl font-semibold leading-tight text-gray-900 md:text-6xl"
        {...inView(0.1)}
      >
        Who We Are
      </motion.h2>

      <motion.p
        className="mt-6 max-w-5xl text-lg leading-relaxed text-gray-700 md:text-xl"
        {...inView(0.2)}
      >
        Placeholder text for your who we are section goes here. You can replace
        this with your final brand story and team positioning copy.
      </motion.p>

      <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
        {people.map((person, index) => (
          <motion.article
            key={person.name}
            className="border border-gray-200 bg-white px-8 py-10 shadow-xl md:px-10 md:py-12"
            {...inView(index * 0.15)}
          >
            <h3 className="text-4xl font-semibold leading-tight text-gray-900 md:text-5xl">
              {person.name}
            </h3>
            <p className="mt-4 text-xl text-gray-700 md:text-2xl">
              {person.role}
            </p>

            <div className="mt-8 space-y-3 text-lg text-gray-700 md:text-xl">
              <p>
                Phone: <a href={`tel:${person.phone}`}>{person.phone}</a>
              </p>
              <p>
                Email: <a href={`mailto:${person.email}`}>{person.email}</a>
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default People;

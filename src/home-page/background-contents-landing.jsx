import landingBackground from "../assets/us-landing-page-background.jpg";

const BackgroundContentsLanding = ({ children }) => {
  return (
    <section
      className="background-contents-landing relative min-h-screen w-screen max-w-[100vw] bg-cover bg-center bg-no-repeat ml-[calc(50%-50vw)] mr-[calc(50%-50vw)]"
      style={{ backgroundImage: `url(${landingBackground})` }}
    >
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <div className="absolute top-0 left-0 z-20 w-full">{children}</div>

      <div className="absolute z-10 left-[35%] bottom-[35%] -translate-x-1/2 translate-y-1/2 px-6 md:px-0">
        <div className="w-full max-w-5xl text-white">
          <p className="mb-6 text-sm uppercase tracking-[0.45em] text-white/90 md:text-base lg:text-lg">
            Craft Your Journey
          </p>
          <h1 className="text-7xl font-semibold leading-[0.9] md:text-9xl lg:text-[11rem]">
            Crafted
            <br />
            Journeys
          </h1>
          <p className="mt-6 text-xl text-white/90 md:text-3xl lg:text-4xl">
            Every journey begins with intent and unfolds with discretion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BackgroundContentsLanding;

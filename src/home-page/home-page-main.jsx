import Header from "./header";
import BackgroundContentsLanding from "./background-contents-landing";
import WhatWeDo from "./what-we-do";
import People from "./people";
import Contact from "./contact";
import Footer from "./footer";

const HomePageMain = () => {
  return (
    <main className="home-page-main">
      <BackgroundContentsLanding>
        <Header />
      </BackgroundContentsLanding>
      <WhatWeDo />
      <People />
      <Contact />
      <Footer />
    </main>
  );
};

export default HomePageMain;

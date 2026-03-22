import Header from "../home-page/header";
import Footer from "../home-page/footer";
import People from "./people";

const EnquirePageMain = () => {
  return (
    <main className="enquire-page-main">
      <Header isLandingPage={false} />
      <section className="min-h-screen bg-white px-[10%] py-28" id="enquire">
        <People />
      </section>
      <Footer />
    </main>
  );
};

export default EnquirePageMain;

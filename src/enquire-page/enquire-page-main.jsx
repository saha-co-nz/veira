import Header from "../home-page/header";
import Footer from "../home-page/footer";
import Form from "./form";

const EnquirePageMain = () => {
  return (
    <main className="enquire-page-main">
      <Header isLandingPage={false} />
      <section className="min-h-screen bg-gray-100 px-[10%] py-28" id="enquire">
        <Form />
      </section>
      <Footer />
    </main>
  );
};

export default EnquirePageMain;

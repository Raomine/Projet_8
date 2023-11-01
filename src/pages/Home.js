import Header from "../components/Header.js";
import Banner from "../components/Banner.js";
import Cards from "../components/Cards.js";
import Footer from "../components/Footer.js";

export default function Home() {
  return (
    <div className="container">
      <Header />
      <Banner />
      <Cards />
      <Footer />
    </div>
  );
}

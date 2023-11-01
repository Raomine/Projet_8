import Header from "../components/Header.js";
import Main from "../components/MainError.js";
import Footer from "../components/Footer.js";

export default function Error() {
  return (
    <div className="errorContainer">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Mainpage from "./component/mainpage/Mainpage";

const App = () => {
  return (
    <main className="app-container">
      <div className="left-part">
        <section className="side-section">
          <Sidebar />
        </section>
      </div>
      <div className="right-part">
        <section className="header-section">
          <Header />
        </section>
        <section className="mainpage-section">
          <Mainpage />
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </main>
  );
};

export default App;

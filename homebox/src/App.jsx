import "./App.css";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import Sidebar from "./component/sidebar/Sidebar";
import Mainpage from "./component/mainpage/Mainpage";

const App = () => {
  return (
    <main className="app-container">
      <Header />
      <Sidebar />
      <Mainpage />
      <Footer />
    </main>
  );
};

export default App;

import "./header.css";

const Header = () => {
  return <div className="main">
    <div className="logo">
      <h1 className="text">Fit Track</h1>
    </div>
    <div className="navs">
      <nav className="nav">

        <li>Home</li>
        <li>About</li>
        <li>Contact Us</li>
        <li>Login</li>
        <li>Sign Up</li>
      </nav>
    </div>
  </div>;
};

export default Header;

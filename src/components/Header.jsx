import logo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <>
      <div className="container">
        <header className="header d-flex justify-content-between pt-3 mb-5">
          <div className="logo">
            <a className="logo__link d-inline-block" href="">
              <img
                className="logo__img d-block"
                src={logo}
                width="80"
                height="80"
              ></img>
            </a>
          </div>
          <nav className="navbar">
            <ul className="navbar__list d-flex list-unstyled p-0 gap-4">
              <li className="navbar__item">
                <a className="navbar__item-link text-decoration-none text-dark" href="">
                  Home
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__item-link text-decoration-none text-dark" href="">
                  About
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__item-link text-decoration-none text-dark" href="">
                  Services
                </a>
              </li>
              <li className="navbar__item">
                <a className="navbar__item-link text-decoration-none text-dark" href="">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;

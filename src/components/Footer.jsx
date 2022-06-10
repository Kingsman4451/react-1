import logo from "../assets/images/logo.svg";

const Footer = ()=>{
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__inner d-flex justify-content-between align-items-center">
            <a className="logo__link d-inline-block" href="">
                <img
                  className="logo__img d-block"
                  src={logo}
                  width="80"
                  height="80"
                ></img>
              </a>
              <ul className="navbar__list d-flex list-unstyled p-0 gap-4">
                <li className="navbar__item">
                  <a className="navbar__item-link text-decoration-none text-white" href="">
                    Home
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__item-link text-decoration-none text-white" href="">
                    About
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__item-link text-decoration-none text-white" href="">
                    Services
                  </a>
                </li>
                <li className="navbar__item">
                  <a className="navbar__item-link text-decoration-none text-white" href="">
                    Contact
                  </a>
                </li>
              </ul>
                    </div>
          </div>
      </footer>
    </>
  )
}

export default Footer;
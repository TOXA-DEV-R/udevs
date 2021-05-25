import React from "react";
import logoSvg from "../../images/logo.svg";
const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="row navbar">
          <div className="col-auto navbar-logo">
            <a href="/">
              <img src={logoSvg} alt="logo" />
            </a>
          </div>
          {/* <div className="col-auto">
            <button></button>
          </div> */}
          <div className="col-auto">
            <ul className="navbar-items">
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Направления
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Команда
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Услуги
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Инструменты
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Клиенты
                </a>
              </li>
              <li className="navbar-item">
                <a href="/" className="navbar-link">
                  Портфолио
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import React from "react";
import logoSvg from "../../images/logo.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import NavbarLinkData from "./NavbarLinkData";
import angleDown from "../../images/data- img-112.svg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="row navbar align-items-center justify-content-between">
          <div className="col-auto">
            <AnchorLink href="/home" className="navbar-logo" to="/" offset="72">
              <img src={logoSvg} alt="logo" />
            </AnchorLink>
          </div>
          {/* <div className="col-auto">
            <button></button>
          </div> */}
          <div className="col-auto navbar-menu">
            <ul className="navbar-items">
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Направления
                </AnchorLink>
              </li>
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Команда
                </AnchorLink>
              </li>
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Услуги <img src={angleDown} alt="angel down" />
                </AnchorLink>
                <ul className="navbar-items-init">
                  <p>Услуги</p>
                  {NavbarLinkData[0].navItemInitOne.map(
                    (linkInit, indexInit) => {
                      return (
                        <li className="navbar-item-init" key={indexInit}>
                          <AnchorLink href="/" className="navbar-link-init">
                            <div className="img">
                              <img src={linkInit.img} alt={linkInit.text} />
                            </div>
                            <span>{linkInit.text}</span>
                          </AnchorLink>
                        </li>
                      );
                    }
                  )}
                </ul>
              </li>
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Инструменты
                </AnchorLink>
              </li>
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Клиенты
                </AnchorLink>
              </li>
              <li className="navbar-item">
                <AnchorLink href="/" className="navbar-link">
                  Портфолио <img src={angleDown} alt="angle down" />
                </AnchorLink>
                <ul className="navbar-items-init">
                  <p>Портфолио</p>
                  {NavbarLinkData[0].navItemInitTwo.map(
                    (linkInit, indexInit) => {
                      return (
                        <li className="navbar-item-init" key={indexInit}>
                          <AnchorLink href="/" className="navbar-link-init">
                            <img src={linkInit.img} alt={linkInit.text} />
                            <span>{linkInit.text}</span>
                          </AnchorLink>
                        </li>
                      );
                    }
                  )}
                </ul>
              </li>
            </ul>
            <div className="navbar-contact">
              <AnchorLink href="/">Cвязаться</AnchorLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

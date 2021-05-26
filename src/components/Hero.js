import React from "react";
import udevs from "../images/logo.svg";
import Typewriter from "typewriter-effect";
function Hero() {
  return (
    <div className="hero">
      <div className="container">
        <div className="row hero-module">
          <div className="col-lg-6 hero-left">
            <img src={udevs} className="udevs" alt="Udevs" />
            <h1 style={{ marginBottom: "20px" }}>IT-Аутсорсинг Компания</h1>
            <h1 style={{ color: "var(--primary)" }}>
              <Typewriter
                options={{
                  strings: [
                    "Мобильная разработка",
                    "ERP cистемы",
                    "UI / UX Дизайн",
                    "Оптимизация инфраструктуры",
                    "IT Консалтинг",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

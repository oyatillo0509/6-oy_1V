import { useState } from "react";
import "./App.css";
import siteLogo from "./assets/imgs/logo.svg";
import searchIco from "./assets/imgs/searchIcon.svg";
import globeIcon from "./assets/imgs/earthIcon.svg";
import placeIcon from "./assets/imgs/locationIcon.svg";
import deleteIcon from "./assets/imgs/trash.svg";
import userIcon from "./assets/imgs/account.svg";
import playIcon from "./assets/imgs/play.svg";
import bannerImage from "./assets/imgs/heroImg.png";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <header className="topHeader">
        <section className="topHeader__sectionOne">
          <div className="wrapper topHeader__sectionOne__wrapper">
            <img src={siteLogo} className="siteLogo" alt="siteLogo.svg" />
            <div className="searchBox">
              <img src={searchIco} alt="searchIco.svg" className="searchIco" />
              <input
                type="search"
                name="searchInput"
                id="searchInput"
                placeholder="Cari apapun disini..."
              />
            </div>
            <div className="languageSelect">
              <img src={globeIcon} alt="globeIcon.svg" />
              <select name="languageOptions" id="languageOptions">
                <option value="">Bahasa Indonesia</option>
              </select>
            </div>
            <div className="locationSelectBox">
              <img src={placeIcon} alt="placeIcon.svg" className="placeIcon" />
              <div className="locationDropdown">
                <p>Lokasi</p>
                <select
                  name="locationOptions"
                  id="locationOptions"
                  className="locationOptions"
                >
                  <option value="">Indonesia, Yogyakarta</option>
                </select>
              </div>
            </div>
          </div>
        </section>

        <section className="topHeader__sectionTwo">
          <div className="wrapper topHeader__sectionTwo__wrapper">
            <nav className="mainNav">
              <select name="mountainOptions" id="mountainOptions">
                <option value="">Gunung</option>
              </select>
              <select name="beachOptions" id="beachOptions">
                <option value="">Pantai</option>
              </select>
              <select name="culinaryOptions" id="culinaryOptions">
                <option value="">Kuliner</option>
              </select>
              <select name="outboundOptions" id="outboundOptions">
                <option value="">Outbond</option>
              </select>
              <select name="historyOptions" id="historyOptions">
                <option value="">Sejarah</option>
              </select>
              <select name="educationOptions" id="educationOptions">
                <option value="">Edukasi</option>
              </select>
              <select name="romanticOptions" id="romanticOptions">
                <option value="">Romantis</option>
              </select>
              <select name="natureOptions" id="natureOptions">
                <option value="">Alam</option>
              </select>
            </nav>
            <div className="userAccount">
              <img
                src={deleteIcon}
                alt="deleteIcon.svg"
                className="deleteIcon"
              />
              <img src={userIcon} alt="userIcon.svg" className="userIcon" />
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="mainHero">
          <div className="wrapper mainHero__wrapper">
            <div className="mainHero__content">
              <p className="exploreText"> Explore the wonderful Indonesia!</p>
              <h1 className="mainHero__title">
                Liburan & nikmati <span>tempatbaru</span> di Indonesia{" "}
              </h1>
              <p className="descriptionText">
                Destinize membuat kamu selalu update terkait tempat liburan baru
                di Indonesia dengan mengikuti perkembangan para influencer di
                sosial media ✨
              </p>
              <div>
                <button>Mulai sekarang →</button>
                <button>
                  <img src={playIcon} alt="playIcon.svg" className="playIcon" />
                  <span className="playDemoText">Putar Demo</span>
                </button>
              </div>
            </div>

            <div className="mainHero__image">
              <img
                src={bannerImage}
                alt="bannerImage.svg"
                className="bannerImage"
              />
            </div>
          </div>
        </section>
        <div className="but-img"></div>
      </main>
    </>
  );
}

export default App;

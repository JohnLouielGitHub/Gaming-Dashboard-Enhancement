import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";

function Teams() {
  return (
    <>
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto ">
        <div className="row ">
          <div className="col col-lg-9">
            <div className="row mb-4">
              <div className="col">
                <div className="carousel"></div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/logo_1.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name">ViralCircuits</h2>
                <span className="text-white-50">Philippines</span>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/game-logo-9.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name">Vile Guild</h2>
                <span className="text-white-50">Philippines</span>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/game-logo-7.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name">Vanguards</h2>
                <span className="text-white-50">Philippines</span>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/logo_6.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name">Fandangos</h2>
                <span className="text-white-50">Philippines</span>
              </div>
            </div>

            <div className="row">
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/logo_6.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name">Fandangos</h2>
                <span className="text-white-50">Philippines</span>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box"></div>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box"></div>
              </div>
              <div className="col col-6 col-lg-3">
                <div className="team-sm-box"></div>
              </div>
            </div>
          </div>

          <div className="col d-none d-lg-inline-block col-lg-3 vh-100">
            <div className="right-menu"></div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Teams;

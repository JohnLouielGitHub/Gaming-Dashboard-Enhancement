import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";

function Teams() {
  return (
    <>
      <main id="dashboard" className=" pt-4 ps-2 pe-2 pe-lg-0 ms-auto teams">
        <div className="row ">
          <div className="col col-lg-9">
            <div className="row mb-4">
              <div className="col">
                <div className="carousel"></div>
              </div>
            </div>
            <div className="w-100 mb-2 ">
                  <h1 className="teams-h1 mb-0">All Teams</h1>
                  <span className="text-white-50">List of Esports Teams</span>
            </div>
            <div className="row mb-4">
              <div className="col col-6 col-md-4 col-lg-2">
                
                <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
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
                <h2 className="team-name mb-1">ViralCircuits</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
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
                <h2 className="team-name mb-1">Vile Guild</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
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
                <h2 className="team-name mb-1 mb-1">Vanguards</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
                <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/logo_6.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Manila Eagles</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
                <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/mvp-logo.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Vanguards</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
                <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/logo_dragon.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Dragons PH</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
            </div>

            <div className="row">
              <div className="col col-6 col-md-4 col-lg-2">
                <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/new-logo-1.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Relentless</h2>
                <span className="text-white-50">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
              <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/team-logo-1.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Dragonfires</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
              <div className="team-sm-box position-relative mb-1">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-100 h-100"
                    src="img/teams_img/team-logo-5.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Spearheads</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
              <div className="team-sm-box position-relative mb-1 d-flex align-items-center justify-content-center">
                  <div className="overlay h-100 w-100 position-absolute"></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/new-logo-4.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Guttersnipes</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
              <div className="team-sm-box position-relative mb-1 d-flex align-items-center justify-content-center">
                  <div className="overlay h-100 w-100 position-absolute "></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/logo_4.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Wolves</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
              <div className="col col-6 col-md-4 col-lg-2">
              <div className="team-sm-box position-relative mb-1 d-flex justify-content-center align-items-center">
                  <div className="overlay h-100 w-100 position-absolute "></div>
                  <img
                    className="w-75 h-75"
                    src="img/teams_img/logo_5.png"
                    alt="logo"
                  />
                  <img
                    className="flag position-absolute"
                    src="img/teams_img/ph_flag.jpg"
                    alt="logo"
                  />
                </div>
                <h2 className="team-name mb-1">Copperheads</h2>
                <span className="text-white-50 span-ph">Philippines</span>
              </div>
            </div>
          </div>

          <div className="col d-none d-lg-inline-block col-lg-3 vh-100">
            <div className="right-menu p-3">
                <div className="mb-4 right-menu-main">
                  <h2 className="right-menu-title mb-0">Leading Teams</h2> 
                  <span className="text-white-50 span-ph">Top 10 Best Performing Teams</span>
                </div>
                <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-2.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Emperors</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-3.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Unhinged</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-4.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Guttersnipes</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-5.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Master Panda</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-6.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Gamers 2</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/new-logo-7.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Subsonic</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/game-logo-10.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Pride</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/game-logo-9.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Vile Guild</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/game-logo-7.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Senix</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
              <div className="right-teams d-flex align-items-center mb-3">
                  <img
                    className="top-img h-100"
                    src="img/teams_img/game-logo-8.png"
                    alt="logo"
                  />
                  <div>
                  <h2 className="team-name">Virtus Pro</h2>
                  <span className="span-ph text-white-50">Philippines</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Teams;

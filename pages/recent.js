import Link from "next/link";
import Script from 'next/script'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import {useRouter} from "next/router";

function Recent() {
  return (
    <>
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
      <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
      <section id="widgets" data-simplebar="true">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div
                    className="
                profile-search
                d-flex
                justify-content-between
                align-items-center
              "
                  >
                    <button
                      className="off-canvas-burger btn btn-primary d-block d-xl-none"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasExample"
                      aria-controls="offcanvasExample"
                    >
                      <i
                        className="fas fa-bars"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                      ></i>
                    </button>

                    <h2 className="profile-username h4 w-100 ms-3 mb-0 mt-0 m-xl-0">
                      Hello X-travaganza !
                    </h2>

                    <div className="search-bar w-100 position-relative">
                      <input
                        className="
                    search-bar-input
                    w-100
                    ps-4
                    p-2
                    rounded
                    bg-secondary
                  "
                        type="text"
                        placeholder="Search..."
                      />
                      <span>
                        <img
                          className="
                      search-icon
                      position-absolute
                      top-50
                      translate-middle-y
                    "
                          src="img/search.png"
                          alt="search.png"
                        />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-12 w-100 h-100 cards mt-3">
                    <div className="w-100 h-100 video">
                      <video
                        className="w-100 h-75 video-player"
                        id="video"
                        poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                        controls
                        autoPlay
                      ></video>

                      <div className="featured-game w-100 p-2">
                        <h1 className="featured-game-title">
                          Company of Heroes 2
                        </h1>
                        <div className="featured-game-desc fs-6">
                          Company of Heroes 2 is a real-time strategy video game
                          developed by Relic Entertainment and published by Sega
                          for Microsoft Windows, OS X, and Linux.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div
                      className="
                  card-games
                  w-100
                  h-100
                  card-game-preview card-image-1
                  d-flex
                  align-items-end
                "
                    >
                      <div className="card-content w-100 rounded-bottom-3 p-3">
                        <h4 className="card-head mb-2">
                          Asssassin's Creed Vol.3
                        </h4>
                        <span>20k Playing &nbsp; 4k Love this game</span>
                        <p className="card-description mt-2 fs-6">
                          Assassin's Creed is an action-adventure and stealth
                          video game series created by Patrice Désilets...
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div
                      className="
                  card-games
                  w-100
                  h-100
                  card-game-preview card-image
                  d-flex
                  align-items-end
                  card-image-2
                "
                    >
                      <div className="card-content w-100 p-3">
                        <h4 className="card-head mb-2">PUBG MOBILE</h4>
                        <span>1M Playing &nbsp; 321k Love this game</span>
                        <p className="card-description mt-2 fs-6">
                          PUBG is a game with the battle royale genre, where
                          players can play with 100 people online at once...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                <div className="col-12 d-none d-md-block w-100 h-100 mt-3">
                <div
      className="
        d-none
        notification-advancement
        d-md-flex
        align-items-center
        justify-content-around
        p-2
      "
    >
      <div className="d-flex align-items-center">
        <div>
          <img src="img/logo.png" className="logo" alt="logo.png" />
        </div>
        <div className="notif-container ms-1 me-2">
          <div className="notif-title">
            Claim your Achievment Game for Benifits exclusive!
          </div>
          <div className="notif-subtitle">
            Increase your Account by using special features and promos from
            Achievment.
          </div>
        </div>
      </div>
      <div>
        <button
          className="claim-btn btn btn-primary px-md-2 px-lg-3 px-xl-5 py-md-1"
        >
          Claim Now
        </button>
      </div>
      <div>
        <button className="btn btn-outline-light border-0">
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  </div>
</div>

              </div>
              <div className="col-md-4">
                <div
                  

                >
                  <div className="recent-games mt-4 mt-md-0">
                    <div className="d-flex justify-content-between">
                      <div className="recent-games-head">Recent Games</div>
                      <div>
                        <a href="#">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </div>
                    </div>

                    <div className="list-games">
                      <div className="game">
                        <div
                          className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="https://www.ladgeek.com/wp-content/uploads/2020/08/Fall-Guys-Ultimate-Knockout-PC-Version-Full-Game-Setup-Free-Download.jpg.webp"
                              alt="Fall-Guys-Ultimate-Knockout-PC-Version-Full-Game-Setup-Free-Download.jpg.webp"
                              className="game-preview"
                            />
                            <div className="game-info">
                              <div className="game-title">Fall Guys Beta</div>
                              <div className="version">Version 14.2</div>
                            </div>
                          </div>
                          <a href="#">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </div>
                      </div>
                      <div className="game">
                        <div
                          className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="https://tcf.wuki.com/game/16000/15926/320x320/slither-io.webp"
                              alt="slither-io.webp"
                              className="game-preview"
                            />
                            <div className="game-info">
                              <div className="game-title">Slither.io</div>
                              <div className="version">Version 11.21</div>
                            </div>
                          </div>
                          <a href="#">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </div>
                      </div>
                      <div className="game">
                        <div
                          className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="https://www.hebergementwebs.com/image/b8/b8e8a31bf26f2944552bc38c5781e078.webp/how-to-change-your-name-on-robloxhow-to-change-your-name-on-roblox-0.webp"
                              alt="how-to-change-your-name-on-robloxhow-to-change-your-name-on-roblox-0.webp"
                              className="game-preview"
                            />
                            <div className="game-info">
                              <div className="game-title">Roblox</div>
                              <div className="version">Version 1.12</div>
                            </div>
                          </div>
                          <a href="#">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </div>
                      </div>
                      <div className="game">
                        <div
                          className="
                      d-flex
                      justify-content-between
                      align-items-center
                    "
                        >
                          <div className="d-flex align-items-center">
                            <img
                              src="https://image.winudf.com/v2/image1/Y29tLm1hcnRpbm1hZ25pLm1la29yYW1hX3NjcmVlbl84XzE2MDQ5MTMyMzZfMDU3/screen-8.jpg?fakeurl=1&type=.jpg"
                              alt="screen-8.jpg?fakeurl=1&type=.jpg"
                              className="game-preview"
                            />
                            <div className="game-info">
                              <div className="game-title">Mekorama</div>
                              <div className="version">Version 1.7.2</div>
                            </div>
                          </div>
                          <a href="#">
                            <i className="fas fa-ellipsis-v"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="notification-menu mt-4 mb-4 h-100">
                    <div
                      className="
                  notification-menu-head
                  d-flex
                  justify-content-between
                  align-items-center
                "
                    >
                      <div className="h3 m-0">Notification</div>
                      <a href="#" className="notif-view-all">
                        View All
                      </a>
                    </div>

                    <div className="notifications">
                      <div className="notif d-flex justify-content-between">
                        <div className="notif-description">
                          <h4>Someone Wants to join</h4>
                          <p className="time">5:32 pm, January 29</p>
                        </div>
                        <div
                          className="
                      kebab
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                        >
                          <a href="#">
                            <i className="fas fa-ellipsis-h"></i>
                          </a>
                        </div>
                      </div>
                      <button
                        className="
                    btn btn-primary
                    pt-0
                    pb-0
                    ps-3
                    pe-3
                    rounded-pill
                    mb-27
                  "
                      >
                        Group
                      </button>
                      <div className="notif d-flex justify-content-between">
                        <div className="notif-description">
                          <h4>Force The Game</h4>
                          <p className="time">2:11 pm, January 30</p>
                        </div>
                        <div
                          className="
                      kebab
                      d-flex
                      align-items-center
                      justify-content-center
                    "
                        >
                          <a href="#">
                            <i className="fas fa-ellipsis-h"></i>
                          </a>
                        </div>
                      </div>
                      <button className="btn btn-fb pt-0 pb-0 ps-3 pe-3 rounded-pill">
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </SimpleBarReact>
      </main>

    </>
  );
}
export default Recent;

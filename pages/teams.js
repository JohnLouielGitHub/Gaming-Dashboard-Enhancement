import Link from "next/link";
import Script from 'next/script'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

function Teams() {
    return <>

        <div><main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto teams">
        <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">   
        <section id="widgets" data-simplebar="true">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <div className="row mb-3">
                <img
                  className="dota-main-logo"
                  src="img/teams_img/dota-wide.png"
                  alt=""
                />
              </div>
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

                  <div className="profile-username h4 w-100 ms-3 mb-0 mt-0 m-xl-0">
                    <h2>Hello X-travaganza !</h2>
                  </div>

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
                    /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col col-12 col-lg-8 col-xl-9 d-flex flex-wrap mb-5">
              <div
                className="
                  teams-box-header
                  d-flex
                  justify-content-between
                  w-100
                  align-items-center
                "
              >
                <h2>Leading Teams</h2>

                <div>
                  <button className="btn design">Design</button>
                </div>
              </div>
              <div className="leading-teams first w-100 pb-3 bg position-relative">
                <div
                  className="leading-teams_overlay position-absolute w-100 h-100"
                ></div>
                <div
                  className="leading-teams_content position-absolute h-100 w-100"
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <h2 className="text-white">Thermionic Draugr</h2>
                    <img src="img/teams_img/three_dots.svg" alt="" />
                  </div>
                  <span className="d-inline-block mb-5">25 Sep 2020</span>
                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-baseline
                      leading-teams_icons
                      position-absolute
                      w-100
                    "
                  >
                    <div className="project_circles d-flex">
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic5.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                    </div>
                    <button
                      className="d-inline-block border-0 add-btn bg-transparent"
                    >
                      <img src="img/teams_img/add_btn.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="leading-teams second w-100 pb-3 bg position-relative">
                <div
                  className="leading-teams_overlay position-absolute w-100 h-100"
                ></div>
                <div
                  className="leading-teams_content position-absolute h-100 w-100"
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <h2 className="text-white">Thermionic Draugr</h2>
                    <img src="img/teams_img/three_dots.svg" alt="" />
                  </div>
                  <span className="d-inline-block mb-5">25 Sep 2020</span>
                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-baseline
                      leading-teams_icons
                      position-absolute
                      w-100
                    "
                  >
                    <div className="project_circles d-flex">
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic5.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                    </div>
                    <button
                      className="d-inline-block border-0 add-btn bg-transparent"
                    >
                      <img src="img/teams_img/add_btn.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="leading-teams w-100 pb-3 bg third position-relative">
                <div
                  className="leading-teams_overlay position-absolute w-100 h-100"
                ></div>
                <div
                  className="leading-teams_content position-absolute h-100 w-100"
                >
                  <div
                    className="d-flex justify-content-between align-items-center"
                  >
                    <h2 className="text-white">Thermionic Draugr</h2>
                    <img src="img/teams_img/three_dots.svg" alt="" />
                  </div>
                  <span className="d-inline-block mb-5">25 Sep 2020</span>
                  <div
                    className="
                      d-flex
                      justify-content-between
                      align-items-baseline
                      leading-teams_icons
                      position-absolute
                      w-100
                    "
                  >
                    <div className="project_circles d-flex">
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic5.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic6.jpg" alt="" />
                      </div>
                      <div className="circle-div">
                        <img src="img/teams_img/pic3.jpg" alt="" />
                      </div>
                    </div>
                    <button
                      className="d-inline-block border-0 add-btn bg-transparent"
                    >
                      <img src="img/teams_img/add_btn.svg" alt="" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col col-12 col-lg-4 col-xl-3 mb-5">
              <div className="match">
                <div className="teams-box-header">
                  <h2>Choose Game</h2>
                </div>
                <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
                <div className="match-box">
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
                    
                  </div>
                </div>
                </SimpleBarReact>
              </div>
            </div>
          </div>
          <div className="row d-flex flex-wrap bottom-row">
            <div className="col col-12 col-lg-7 h-100">
              <div className="dummy-box">
                <div className="teams-box-header d-flex justify-content-between">
                  <h2>Tournaments</h2>
                </div>
                <SimpleBarReact forceVisible="y" autoHide={true} id="scroller"  className="h-100 simpl-bar">
                <div>
                  <div className="h-100 table-container">
                    <table
                      className="table table-borderless caption-top overflow-hidden"
                    >
                      <tbody className="overflow-scroll">
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assasin's Creed US</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota-1.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img className="banner"
                            src="img/teams_img/dota-1.jpg" alt="" />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota-1.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img className="banner"
                            src="img/teams_img/dota-1.jpg" alt="" />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img className="banner"
                            src="img/teams_img/dota-1.jpg" alt="" />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota2.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">
                            <img
                              className="banner"
                              src="img/teams_img/dota-1.jpg"
                              alt=""
                            />
                          </th>
                          <td
                            className="d-flex align-items-center h-100 flex-column"
                          >
                            <div>
                              <img
                                className="flag"
                                src="img/teams_img/ph_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Assassin's Creed PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱100,000</span>
                          </td>
                          <td className="d-flex flex-column justify-content-center">
                            <div className="table-text">Game mode</div>
                            <span className="d-block text-white">5v5</span>
                          </td>
                          <td className="text-end">
                            <button
                              className="
                                tournament_btn
                                bg-blue
                                border-0
                                mt-2
                                text-uppercase text-white
                              "
                            >
                              join tournament
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                </SimpleBarReact>

              </div>
            </div>
            <div className="col col-12 col-lg-5 h-100 mt-5 mt-lg-0">
              <div className="dummy-box">
                <div
                  className="
                    teams-box-header
                    header-live
                    d-flex
                    justify-content-between
                  "
                >
                  <h2>Live Now</h2>
                </div>
                <SimpleBarReact forceVisible="y" autoHide={true} id="scroller"
                  className="simpl-bar live-box-scroll">
                <div>
                  <div className="h-100">
                    <table className="table table-borderless live-table">
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_2.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_4.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_5.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_6.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            Subsonic
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-end">
                            Unbreakable
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                </SimpleBarReact>
              </div>
            </div>
          </div>
        </div>
      </section>
      </SimpleBarReact>
    </main></div>

     </>;
}


export default Teams;
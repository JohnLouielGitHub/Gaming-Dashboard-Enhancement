import Link from "next/link";
import Header from "../components/Header";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

function Dashboard() {
  return (
    <>
  {" "}
  <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto tournaments">
      <section id="widgets" data-simplebar="true">
      <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
        <div className="container-fluid">
          <div className="row">
              <Header />
            <div className="col-md-8">
             
              <div className="row mb-3">
                <img
                  className="dota-main-logo"
                  src="img/teams_img/dota-wide.png"
                  alt=""
                />
              </div>
            </div>
            </div>
          
          </div>

          <div className="row d-flex flex-wrap bottom-row mt-3">
            <div className="col col-12 col-lg-7 h-100  border-bottom-16">
              <div className="dummy-box">
                <div className="teams-box-header d-flex justify-content-between">
                  <h2>Tournaments</h2>
                </div>
                <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
                <div>
                  <div id="scroller" className="h-100 table-container">
                    <table
                      className="table table-borderless caption-top overflow-hidden border-bottom-16"
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
                                >Dota 2 PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">₱250,000</span>
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
                                src="img/teams_img/us_flag.gif"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Dota 2 US</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">$10,000</span>
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
                                >Dota 2 PH</span
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
                                src="img/teams_img/uk_flag.jpg"
                                alt=""
                              />
                              <span className="text-white tournament-name"
                                >Dota 2 PH</span
                              >
                            </div>
                            <span className="d-block text-white-50 table-text"
                              >08/25/2021</span
                            >
                          </td>
                          <td>
                            <div className="table-text">Prize pool</div>
                            <span className="d-block text-white">$10,000</span>
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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
                                >Dota 2 PH</span
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


            <div className="col col-12 col-lg-5 h-100 mt-3 mt-lg-0 border-bottom-16">
              <div className="border-16">
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
                <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
                <div
                  id="scroller"
                  data-simplebar
                  className="simpl-bar live-box-scroll border-bottom-16"
                >
                  <div className="h-100">
                    <table className="table table-borderless live-table border-bottom-16">
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
                            Ultra
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
                            Wolves
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
                              src="img/teams_img/team-logo-4.png"
                              alt=""
                            />
                            Ghouls
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
                            Everlasting
                            <img
                              className="live_icon"
                              src="img/teams_img/team-logo-3.png"
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
                            Eagles
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
                            King
                            <img
                              className="live_icon"
                              src="img/teams_img/game-logo-9.png"
                              alt=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td className="text-start">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_5.png"
                              alt=""
                            />
                            Imperial
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
                            Senix
                            <img
                              className="live_icon"
                              src="img/teams_img/game-logo-7.png"
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
          <div className="row mt-5 ">
            <div className="col col-12 d-flex flex-wrap mb-5 bg-card border-bottom-16 border-top-16 bracket-col w-100">
              <div className="bracket-container w-100 ">
               <div className="bracket-box p-2 w-100">
               <div className="bg-card w-100">
                <h1 className="text-center h1">Season 1 Tournament Bracket</h1>
                <div className="text-center h3 mb-0">Dota 2 April 29, 2021 Tournament - Manila, Philippines</div>
                </div>
                <div className="bg-card">
                <div className="tournament-bracket tournament-bracket--rounded pt-3 ">
                  <div
                    className="
                      tournament-bracket__round
                      tournament-bracket__round--quarterfinals
                    "
                  >
                    <h3 className="tournament-bracket__round-title">
                      Quarterfinals
                    </h3>
                    <ul className="tournament-bracket__list px-0 bg-card">
                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-18">01 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_5.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ca
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >4</span
                                  >
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_4.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-kz
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>

                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-18">01 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_6.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-cz
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >4</span
                                  >
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_1.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-us
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-18">01 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/dota-logo.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-fi
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >2</span
                                  >
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_2.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-se
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>

                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-18">01 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/team-logo-3.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ru
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >4</span
                                  >
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/team-logo-6.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-by
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="
                      tournament-bracket__round
                      tournament-bracket__round--semifinals
                    "
                  >
                    <h3 className="tournament-bracket__round-title">Semifinals</h3>
                    <ul className="tournament-bracket__list px-0 bg-card">
                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-20">12 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_5.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ca
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                </td>
                              </tr>
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_6.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-cz
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >2</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>

                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-20">12 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/dota-logo.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-fi
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >4</span
                                  >
                                </td>
                              </tr>
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/team-logo-3.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ru
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >7</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="
                      tournament-bracket__round
                      tournament-bracket__round--bronze
                    "
                  >
                    <h3 className="tournament-bracket__round-title">
                      Bronze medal game
                    </h3>
                    <ul className="tournament-bracket__list px-0 bg-card">
                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-21">22 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_5.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-fi
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >3</span
                                  >
                                  <span
                                    className="
                                      tournament-bracket__medal
                                      tournament-bracket__medal--bronze
                                      fa fa-trophy
                                    "
                                    aria-label="Bronze medal"
                                  ></span>
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/dota-logo.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ca
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >2</span
                                  >
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="
                      tournament-bracket__round tournament-bracket__round--gold
                    "
                  >
                    <h3 className="tournament-bracket__round-title">
                      Gold medal game
                    </h3>
                    <ul className="tournament-bracket__list px-0 bg-card">
                      <li className="tournament-bracket__item bg-none ps-0">
                        <div className="tournament-bracket__match bg-none" tabindex="0">
                          <table className="tournament-bracket__table">
                            <caption className="tournament-bracket__caption">
                              <time datetime="1998-02-22">23 April 2021</time>
                            </caption>
                            <thead className="sr-only">
                              <tr>
                                <th>Country</th>
                                <th>Score</th>
                              </tr>
                            </thead>
                            <tbody className="tournament-bracket__content">
                              <tr
                                className="
                                  tournament-bracket__team
                                  tournament-bracket__team--winner
                                "
                              >
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/logo_6.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-cz
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >1</span
                                  >
                                  <span
                                    className="
                                      tournament-bracket__medal
                                      tournament-bracket__medal--gold
                                      fa fa-trophy
                                    "
                                    aria-label="Gold medal"
                                  ></span>
                                </td>
                              </tr>
                              <tr className="tournament-bracket__team">
                                <td className="tournament-bracket__country">
                                  <img
                                    src="img/teams_img/team-logo-3.png"
                                    alt=""
                                  />
                                  <span
                                    className="
                                      tournament-bracket__flag
                                      flag-icon flag-icon-ru
                                    "
                                    aria-label="Flag"
                                  ></span>
                                </td>
                                <td className="tournament-bracket__score">
                                  <span className="tournament-bracket__number"
                                    >0</span
                                  >
                                  <span
                                    className="
                                      tournament-bracket__medal
                                      tournament-bracket__medal--silver
                                      fa fa-trophy
                                    "
                                    aria-label="Silver medal"
                                  ></span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              
              
                </div>
               </div>
              </div>
            </div>




          </div>
          
          
      </SimpleBarReact>
      </section>
    </main>{" "}
    </>
  );
}

export default Dashboard;
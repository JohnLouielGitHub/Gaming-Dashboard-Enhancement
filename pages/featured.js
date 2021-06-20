import Link from "next/link";
import Script from "next/script";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { useRouter } from "next/router";

import LeagueNews from "../components/LeagueNews";

import Header from "../components/Header";

function Featured() {
  let leagueNews = [
    {
      id: 1,
      title: "Premiere League News",
      description: "Promotional Series of Top 10 teams",
      date: "GMT: July 21, 2021",
    },
    {
      id: 2,
      title: "Tournament Delayed",
      description: "Server Maintenance for upcoming Tournaments.",
      date: "GMT: June 28, 2021",
    },
  ];

  return (
    <>
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
        <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
          <section id="widgets" data-simplebar="true">
            <div className="container-fluid">
              <div className="row">
                <Header />
                <div className="col-lg-8">
                  <div className="row d-flex">
                    <div className="col-md-12">
                      <div className="featured__banner w-100 bg-banner-2 mb-5">
                        <div className="col-12 col-md-12 py-2">
                          <div className="px-3 py-1 bg-fade">
                            
                            <h2 className="h2 text-start mb-2">
                              Spectate Live Matches Participate in Draft
                              Tournaments{" "}
                            </h2>
                            <p className="mb-1">
                              Join Duelist now to get access to all the
                              tournaments taking place in the world of Duelist.
                              All you need to do is log on to the app and you
                              can watch your favorite players, or even play
                              against them yourself!
                            </p>

                          </div>
                          <button className="btn-color w-25 bg-fb border-sp border-16 ms-3 mt-2 px-3 py-2 text-center">
                              Join Now
                            </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Upcoming Leagues</h3>
                      <div className="w-100">
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/trophy.svg"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series A</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/trophy.svg"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series B</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/trophy.svg"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series C</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/trophy.svg"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series D</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-2 mt-2 mt-md-0">
                        Premiere League News
                      </h3>
                      <div className="w-100">
                        {leagueNews.map((x) => {
                          return <LeagueNews data={x} key={x.id} />;
                        })}
                        <button className="btn-color w-100 bg-darker border-sp border-16 px-3 py-2 text-center">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 px-4 bg-dark mt-3 mt-md-0 border-16">
                  <div className="row d-flex justify-content-between align-items-center mt-3">
                    <div className="h2 text-start mb-2 px-2 w-75">Live Matches</div>
                    <div className="h2 w-25 mb-2 text-end">
                      <button className="featured__live-match-menu btn d-inline text-light border-0">
                        <i className="fas fa-bars"></i>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <div className="featured__card-matches border-sp mb-2">
                      <div className="px-2 py-3 w-100">
                        <div className="d-flex align-items-center justify-content-around mb-3">
                          <span className="bg-danger px-3 py-1 rounded-pill">
                            Live
                          </span>
                          <div className="d-inline-block align-items-center">
                            <div className="h5">Esports League News</div>
                            <div className="h6">
                              Group 5-Finals match 3 of 5
                            </div>
                          </div>
                          <a className="bg-gold text-dark p-1 rounded-circle">
                            <i className="far fa-star"></i>
                          </a>
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/game-logo-7.png"
                                alt="team-1"
                              />
                            </div>
                            <div className="h2">2 : 1</div>
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/game-logo-10.png"
                                alt="team-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Senix</h5>
                          </div>
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Pride</h5>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">
                            Watch Online
                          </button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">
                            Match Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="featured__card-matches border-sp mb-2">
                      <div className="px-2 py-3 w-100">
                        <div className="d-flex align-items-center justify-content-around mb-3">
                          <span className="bg-danger px-3 py-1 rounded-pill">
                            Live
                          </span>
                          <div className="d-inline-block align-items-center">
                            <div className="h5">Esports League News</div>
                            <div className="h6">
                              Group 10-Pre-match 1 of 5
                            </div>
                          </div>
                          <a className="bg-gold text-dark p-1 rounded-circle">
                            <i className="far fa-star"></i>
                          </a>
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/team-logo-5.png"
                                alt="team-1"
                              />
                            </div>
                            <div className="h2">1 : 0</div>
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/team-logo-6.png"
                                alt="team-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Phoenix</h5>
                          </div>
                          <div className="col-6">
                            <h5 className="mx-2 text-center">King</h5>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">
                            Watch Online
                          </button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">
                            Match Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="featured__card-matches border-sp mb-2">
                      <div className="px-2 py-3 w-100">
                        <div className="d-flex align-items-center justify-content-around mb-3">
                          <span className="bg-danger px-3 py-1 rounded-pill">
                            Live
                          </span>
                          <div className="d-inline-block align-items-center">
                            <div className="h5">Esports League News</div>
                            <div className="h6">
                              Group 3-Pre-Finals match 2 of 5
                            </div>
                          </div>
                          <a className="bg-gold text-dark p-1 rounded-circle">
                            <i className="far fa-star"></i>
                          </a>
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/team-logo-2.png"
                                alt="team-1"
                              />
                            </div>
                            <div className="h2">1 : 1</div>
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/team-logo-3.png"
                                alt="team-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Doom</h5>
                          </div>
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Everlasting</h5>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">
                            Watch Online
                          </button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">
                            Match Details
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="featured__card-matches border-sp mb-2">
                      <div className="px-2 py-3 w-100">
                        <div className="d-flex align-items-center justify-content-around mb-3">
                          <span className="bg-danger px-3 py-1 rounded-pill">
                            Live
                          </span>
                          <div className="d-inline-block align-items-center">
                            <div className="h5">Esports League News</div>
                            <div className="h6">
                              Group 5-Practice match 4 of 5
                            </div>
                          </div>
                          <a className="bg-gold text-dark p-1 rounded-circle">
                            <i className="far fa-star"></i>
                          </a>
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/team-logo-1.png"
                                alt="team-1"
                              />
                            </div>
                            <div className="h2">2 : 2</div>
                            <div className="rounded-circle bg-dark">
                              <img
                                className="featured__live-match-team"
                                src="img/teams_img/logo_4.png"
                                alt="team-2"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Dragons</h5>
                          </div>
                          <div className="col-6">
                            <h5 className="mx-2 text-center">Wolves</h5>
                          </div>
                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">
                            Watch Online
                          </button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">
                            Match Details
                          </button>
                        </div>
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
export default Featured;

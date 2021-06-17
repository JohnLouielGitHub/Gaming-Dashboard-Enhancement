import Link from "next/link";
import Script from "next/script";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import { useRouter } from "next/router";

import Header from "../components/Header";

function Featured() {
  return (
    <>
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
        <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
          <section id="widgets" data-simplebar="true">
            <div className="container-fluid">
              <div className="row">
                <Header />
                <div className="col-md-8">
                  <div className="row d-flex">
                    <div className="col-md-12">
                      <div className="featured__banner w-100 bg-dark rounded-3">
                        <div className="col-12 col-md-9">
                          <div className="p-3">
                            <h2 className="h2">
                              Let's subscribe to enjoy every match that is
                              presented{" "}
                            </h2>
                            <p>
                              Come and join us, watch as players trive to win to
                              be the victor!
                            </p>
                            <button className="px-3 py-2 bg-darker rounded-pill border-0 ">
                              Join now!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-0">
                      <h3>Upcoming Leagues</h3>
                      <div className="w-100">
                        <div className="d-flex align-items-center border-bottom border-3 border-light">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/teams_img/game-logo-7.png"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series A</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-3 border-light">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/teams_img/game-logo-8.png"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series B</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-3 border-light">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/teams_img/game-logo-9.png"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series C</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom border-3 border-light">
                          <img
                            className="w-25 h-25 me-3"
                            src="img/teams_img/game-logo-10.png"
                            alt="team-logo"
                          ></img>
                          <div>
                            <h3>Series D</h3>
                            <p>Philippines</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-0">
                      <h3>Premiere League News</h3>
                      <div className="w-100">
                        <div className="d-flex align-items-center">
                          <div className="border-2 border-light rounded border my-2 px-3 py-1">
                            <h3 className="px-4 py-2 bg-warning rounded-pill">
                              Premiere League News
                            </h3>
                            <p className="px-4 py-2">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-4 py-2">2020 GMT on Saturday</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="border-2 border-light rounded border my-2 px-3 py-1">
                            <h3 className="px-4 py-2 bg-warning rounded-pill">
                              Premiere League News
                            </h3>
                            <p className="px-4 py-2">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-4 py-2">2020 GMT on Saturday</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="border-2 border-light rounded border my-2 px-3 py-1">
                            <h3 className="px-4 py-2 bg-warning rounded-pill">
                              Premiere League News
                            </h3>
                            <p className="px-4 py-2">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-4 py-2">2020 GMT on Saturday</p>
                          </div>
                        </div>

                        <button className="w-100 bg-primary px-3 py-4 text-center rounded-pill">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 px-4 bg-dark">
                  <div className="row d-flex justify-content-between">
                    <h2 className="h2 px-2 pt-3 w-75">Live Matches</h2>
                    <button className="w-25 d-inline-block px-2 py-1">
                      <i className="fas fa-bars"></i>
                    </button>
                  </div>
                  <div className="row">
                    <div className="featured__card-matches mb-2 bg-darker rounded-pill">
                      <div className="p-2 w-100">
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="bg-danger px-3 py-1 rounded-pill">
                            Live
                          </span>
                          <div className="d-inline-block align-items-center">
                            <div className="h5">Esports League News</div>
                            <div className="h6">
                              Group 5 - Finals match 3 of 5
                            </div>
                          </div>
                          <a className="bg-gold px-3 py-1 rounded-pill">
                            <i className="far fa-star"></i>
                          </a>
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

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
                <div className="col-lg-8">
                  <div className="row d-flex">
                    <div className="col-md-12">
                      <div className="featured__banner w-100 bg-dark mb-5">
                        <div className="col-12 col-md-10">
                          <div className="p-3">
                            <h2 className="h2">
                            Spectate Live Matches Participate in Draft Tournaments{" "}
                            </h2>
                            <p>
                            Join Duelist now to get access to all the tournaments taking place in the world of Duelist. All you need to do is log on to the app and you can watch your favorite players, or even play against them yourself!
                            </p>
                            <button className="px-3 py-2 bg-darker btn-color rounded-pill border-0 ">
                              Join now!
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h3 className="mb-3">Upcoming Leagues</h3>
                      <div className="w-100">
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
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
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
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
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
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
                        <div className="d-flex align-items-center border-bottom border-1 border-light mb-2 p-2">
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
                    <div className="col-md-6">
                      <h3 className="mb-2 mt-2 mt-md-0">Premiere League News</h3>
                      <div className="w-100">
                        <div className="d-flex align-items-center">
                          <div className="featured__news w-100 border-2 border-sp rounded border my-2 px-3 py-1">
                            <h4 className=" bg-main rounded-pill mt-2 px-3">
                              Premiere League News
                            </h4>
                            <p className="px-3">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-3">2021 GMT on Saturday</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="featured__news w-100 border-2 border-sp rounded border my-2 px-3 py-1">
                            <h4 className=" bg-main rounded-pill mt-2 px-3">
                              Premiere League News
                            </h4>
                            <p className="px-3">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-3">2021 GMT on Monday</p>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="featured__news w-100 border-2 border-sp rounded border my-2 px-3 py-1">
                            <h4 className=" bg-main rounded-pill mt-2 px-3">
                              Premiere League News
                            </h4>
                            <p className="px-3">
                              Experts play's direct matches high win rate
                              matches.
                            </p>
                            <p className="px-3">2021 GMT on Wednesday</p>
                          </div>
                        </div>

                        <button className="btn-color w-100 bg-darker border-sp border-16 px-3 py-2 text-center">
                          View More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 px-4 bg-dark mt-3 mt-md-0 border-16">
                  <div className="row d-flex justify-content-between align-items-center mt-3">
                    <div className="h2 px-2 w-75">Live Matches</div>
                    <div className="h2 w-25 text-end">
                      <button className="featured__live-match-menu btn d-inline text-light border-0">
                      <i className="fas fa-bars"></i>
                    </button></div>
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
                              <img className="featured__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div className="h2">2 : 1</div>
                            <div className="rounded-circle bg-gold">
                              <img  className="featured__live-match-team" src="img/teams_img/game-logo-10.png" alt="team-2"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Senix Team</h5>
                          </div>
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Pride Team</h5>
                          </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">Watch Online</button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">Match Details</button>
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
                              <img className="featured__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div className="h2">2 : 1</div>
                            <div className="rounded-circle bg-gold">
                              <img  className="featured__live-match-team" src="img/teams_img/game-logo-10.png" alt="team-2"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Senix Team</h5>
                          </div>
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Pride Team</h5>
                          </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">Watch Online</button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">Match Details</button>
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
                              <img className="featured__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div className="h2">2 : 1</div>
                            <div className="rounded-circle bg-gold">
                              <img  className="featured__live-match-team" src="img/teams_img/game-logo-10.png" alt="team-2"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Senix Team</h5>
                          </div>
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Pride Team</h5>
                          </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">Watch Online</button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">Match Details</button>
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
                              <img className="featured__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div className="h2">2 : 1</div>
                            <div className="rounded-circle bg-gold">
                              <img  className="featured__live-match-team" src="img/teams_img/game-logo-10.png" alt="team-2"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Senix Team</h5>
                          </div>
                          <div className="col-6">
                          <h5 className="mx-2 text-center">Pride Team</h5>
                          </div>

                        </div>
                        <div className="row d-flex justify-content-center">
                          <button className="btn w-40 btn-watch text-light bg-pink px-2 py-1 me-1">Watch Online</button>
                          <button className="btn w-40 btn-watch text-light bg-dark px-2 py-1 ms-1">Match Details</button>
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

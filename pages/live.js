import Link from "next/link";
import Script from "next/script";
import {useRouter} from "next/router";
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import Header from "../components/Header";
function Live() {
  return (
    <>

    <Script src="js/active.js"></Script>
      {" "}
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
      <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
        <section id="widgets">
          <div className="container-fluid">
            <div className="row">
              <Header/>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-xxl-12 w-100">
                    <video
                      className="w-100 live__video-player bg-dark border-sp"
                      id="video"
                      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                      controls
                      autoPlay
                    ></video>
                  </div>
                  <div className="col-12">
                  <div className="live__card-matches border-0 border-16 mb-2 border-sp mx-1">
                      <div className="px-2 py-3 w-100">
                        <div className="d-flex align-items-center justify-content-around mb-3">
                          <div className="col-4 text-center">
                            <span className="bg-danger px-3 py-1 rounded-pill">
                            Live Now!
                          </span></div>
                          <div className="col-4 text-center">
                          <div className="d-inline-block align-items-center">
                            <div className="h5 text-center">Champinoship S Series League</div>
                            <div className="h6 text-center">
                              Group 1 - Finals match 5 of 5
                            </div>
                          </div>
                          </div>
                          <div className="col-4 text-center">
                          <a className="bg-gold text-main text-dark px-2 py-1 border-16">
                            <i className="far fa-star"></i>
                          </a>
                          </div>
                          
                         
                          
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                          <div className="rounded-circle bg-danger">
                              <img className="live__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div>
                              <div className="h6 text-center text-darker">06 / 18 / 2021</div>
                              <div className="h6 text-center text-gold">02 : 36 : 31</div>
                              <div className="h6 text-center text-light">Hours   Minutes   Seconds</div>
                            </div>
                            <div className="rounded-circle bg-fb">
                              <img  className="live__live-match-team" src="img/teams_img/game-logo-10.png" alt="team-2"/>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-4">
                          <h5 className="mx-2 text-center">Senix Team</h5>
                          </div>
                          <div className="col-4 text-center">V.S</div>
                          <div className="col-4">
                          <h5 className="mx-2 text-center">Pride Team</h5>
                          </div>

                        </div>
                        <div className="row">
                          <div className=" d-flex justify-content-around align-items-center">
                          <div>
                              <img className="live__teams" src="img/teams_img/photo-1.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-2.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-3.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-4.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-5.jpg" alt="red-team"/>
                            </div>
                            <div className="h5">
                              RED
                            </div>
                            <div className="d-flex align-items-center w-25">
                            <button className="btn w-25 btn-watch text-light bg-pink px-2 py-1 me-1"><i className="fas fa-share-alt"></i></button>
                            <button className="btn w-75 btn-watch text-light bg-dark px-2 py-1 ms-1">Match Info</button>
                            </div>
                            <div className="h5">
                              BLUE
                            </div>
                            <div>
                              <img className="live__teams" src="img/teams_img/photo-10.jpg" alt="blue-team"/>
                              <img className="live__teams" src="img/teams_img/photo-9.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-8.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-7.jpg" alt="red-team"/>
                              <img className="live__teams" src="img/teams_img/photo-6.jpg" alt="red-team"/>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <div className="col-md-4">
                <div className="vh-100">
                  <div className="live__chat w-100 h-100 border-sp bg-main position-relative">
                    <h2
                      className="
                    live__chat-title
                    heading-2
                    p-3
                    w-100
                    position-absolute
                    bg-dark
                    top-0
                    left-0
                  "
                    >
                      Live Chat
                    </h2>
                    <div
                      className="live__chat-message-container w-100 h-100 py-2 px-3 position-absolute"
                      data-simplebar
                      data-simplebar-auto-hide="true"
                    >
                      <ul className="list-unstyled text-light">
                        <li className="mb-2 px-2 py-3"><span className="px-3 py-2 bg-darker border-16">I wanna play too...</span></li>
                        <li className="mb-2  mb-2 px-2 py-3"><span className="px-3 py-2 bg-darker border-16">Very Satisfying.</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-3"><span className="live__chat-user-msg px-3 py-2 bg-secondary">Good Game!</span></li>
                        <li className="mb-2  mb-2 px-2 py-3"><span className="px-3 py-2 bg-darker border-16">HAHAHAHHA</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-3"><span className="live__chat-user-msg px-3 py-2 bg-secondary">Nice.</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-3"><span className="live__chat-user-msg px-3 py-2 bg-secondary">They actually trying their best.</span></li>
                        <li className="mb-2  mb-2 px-2 py-3"><span className="px-3 py-2 bg-darker border-16">Add me my IGN is: XxDextroyerxX</span></li>
                        <li className="mb-2 text-end px-2 py-3"><span className="live__chat-user-msg px-3 py-2 bg-primary">...</span></li>
                      </ul>
                    </div>
                    <div
                      className="
                    live__chat-container
                    w-100
                    bg-dark
                    p-3
                    position-absolute
                    bottom-0
                    left-0
                  "
                    > 

                      <div>

                        <form
                          className="
                        live__form-control
                        d-flex
                        justify-content-between
                      "
                        >
                          <input
                            type="text"
                            name="message"
                            id="live__chat-msg"
                            className="text-light w-100 me-1 px-3"
                            placeholder="message..."
                          />
                          <button className="text-light">
                            <i className="fas fa-chevron-right"></i>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </SimpleBarReact>
      </main>{" "}
    </>
  );
}

export default Live;

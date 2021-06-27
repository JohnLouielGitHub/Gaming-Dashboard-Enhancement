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
                  <div className="col-xxl-12 w-100 px-3">
                    <video
                      className="w-100 live__video-player bg-dark border-sp position-relative "
                      id="video"
                      poster="https://s.aolcdn.com/hss/storage/midas/f10fcd5c0630ecb553f69ead07e7c318/206538633/esports-ed.jpg"
                      controls
                      autoPlay
                      tabIndex="1"
                    >
                     <div className="position-absolute top-0 bg-dark ps-3 pe-5 py-2 text-start col-12" tabIndex="-1">Live Now : Champinoship S Series League || Group 1 - Finals match 5 of 5</div>
                    
                      </video>

                    

                  </div>
                  <div className="col-12">
                  <div className="live__card-matches border-0 border-16 mt-2 mb-2 border-sp mx-1">
                      <div className="py-3 w-100 h-100">
                        <div className="mb-3">
                          <div className="bg-fade-1 d-flex align-items-center justify-content-around py-2">
                          <div className="col-4 text-center">
                            <span className=" px-3 py-1 text-danger border border-danger">
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
                          <a className="bg-gold text-main text-dark p-1 rounded-circle">
                            <i className="far fa-star"></i>
                          </a>
                          </div>
                          
                          </div>

                         
                          
                        </div>
                        <div className="row mb-3">
                          <div className="d-flex align-items-center justify-content-around">
                          <div className="rounded-circle bg-danger">
                              <img className="live__live-match-team" src="img/teams_img/game-logo-7.png" alt="team-1"/>
                            </div>
                            <div>
                              <div className="h6 text-center text-fb">06 / 18 / 2021</div>
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
                          <div className="text-start">
                              <img className="live__teams ms-1" src="img/teams_img/photo-1.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-2.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-3.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-4.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-5.jpg" alt="red-team"/>
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
                            <div className="text-end">
                              <img className="live__teams ms-1" src="img/teams_img/photo-10.jpg" alt="blue-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-9.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-8.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-7.jpg" alt="red-team"/>
                              <img className="live__teams ms-1" src="img/teams_img/photo-6.jpg" alt="red-team"/>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                  <div className="col-md-12">
                  <div className="featured__banner w-100 bg-banner-2 mb-5">
                        <div className="col-12 col-md-12 py-2">
                          <div className="px-3 py-1 bg-fade">
                            
                            <h2 className="h2 text-start mb-2">
                            Join the Duelist Community{" "}
                            </h2>
                            <p className="mb-1">
                            Duelist is an application with live tournament matches, that are shared with the world.
                            </p>

                          </div>
                          <button className="btn-color w-25 bg-fb border-sp border-16 ms-3 mt-2 px-3 py-2 text-center">
                              Join Now
                            </button>
                        </div>
                      </div>
                      </div>
                    
                </div>
              </div>
            <div className="col-md-4 mt-3 mt-lg-0">
                <div >
                  <div className="live__chat w-100 bg-main ">
                   
                    <div
                      className="
                      h5
                      mb-0
                      live__chat-title
                      heading-2
                      p-3
                      w-100
                      bg-dark
                      "
                    >
                      Live Chat
                    </div>
                    
                    <div
                      className="live__chat-message-container border-sp w-100 h-50 py-2 px-3"
                    >
                      <ul className="list-unstyled text-light d-block">
                        <li className="mb-2 px-2 py-2"><span className="px-3 py-2 bg-darker border-16">I wanna play too...</span></li>
                        <li className="mb-2  mb-2 px-2 py-2"><span className="px-3 py-2 bg-darker border-16">Very Satisfying.</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-2"><span className="live__chat-user-msg px-3 py-2 bg-secondary">Good Game!</span></li>
                        <li className="mb-2  mb-2 px-2 py-2"><span className="px-3 py-2 bg-darker border-16">HAHAHAHHA</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-2"><span className="live__chat-user-msg px-3 py-2 bg-secondary">Nice.</span></li>
                        <li className="mb-2 tmb-2 text-end px-2 py-2"><span className="live__chat-user-msg px-3 py-2 bg-secondary">They actually trying their best.</span></li>
                        <li className="mb-2  mb-2 px-2 py-2"><span className="px-3 py-2 bg-darker border-16">Add me my IGN is: XxDextroyerxX</span></li>
                        <li className="mb-2 text-end px-2 py-2"><span className="live__chat-user-msg px-3 py-2 bg-primary">...</span></li>
                      </ul>
                    </div>
                    
                    <div
                      className="
                    live__chat-container
                    w-100
                    bg-dark
                    p-3
                  "
                    > 

                      <div>
                        <form
                          className="
                        live__form-control
                        d-flex
                        justify-content-between"
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
                <div className="w-100 h-50 mt-3 mt-lg-0">
                <div className="teams mt-3">
                <div
                  className="
                    teams-box-header
                    header-live
                    d-flex

                    border-0
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
                    <table className="table table-borderless live-table">
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td className="text-center">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_3.png"
                              alt=""
                            />
                            <div>
                            Subsonic
                            </div>
                            
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                px-3
                                py-2
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-center">
                            
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_1.png"
                              alt=""
                            />
                            <div>
                            Unbreakable
                            </div>
                            
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td className="text-center">
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_2.png"
                              alt=""
                            />
                            <div>
                            Ultra
                            </div>
                            
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                px-3
                                py-2
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-center">
                            
                            <img
                              className="live_icon"
                              src="img/teams_img/logo_4.png"
                              alt=""
                            />
                            <div>
                            Wolves
                            </div>
                            
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td className="text-center">
                            <img
                              className="live_icon"
                              src="img/teams_img/team-logo-4.png"
                              alt=""
                            />
                            <div>Ghouls</div>
                           
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                px-3
                                py-2
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-center">
                            
                            <img
                              className="live_icon"
                              src="img/teams_img/team-logo-3.png"
                              alt=""
                            />
                            <div>Everlasting</div>
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td className="text-center">
                            <img
                              className="live_icon"
                              src="img/teams_img/team-logo-5.png"
                              alt=""
                            />
                            <div>Phoenix</div>
                           
                          </td>
                          <td className="text-center">
                            <button
                              className="
                                live_btn
                                bg-danger
                                px-3
                                py-2
                                border-0
                                text-uppercase text-white
                              "
                            >
                              live
                            </button>
                          </td>
                          <td className="text-center">
                            
                            <img
                              className="live_icon"
                              src="img/teams_img/team-logo-6.png"
                              alt=""
                            />
                            <div>King</div>
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
          </div>
        </section>
        </SimpleBarReact>
      </main>{" "}
    </>
  );
}

export default Live;

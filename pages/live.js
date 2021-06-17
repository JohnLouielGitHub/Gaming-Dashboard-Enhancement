import Link from "next/link";

function Live() {
  return (
    <>
      {" "}
      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
        <section id="widgets" data-simplebar="true">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <div className="row">
                  <div className="col-xxl-12 w-100 mt-3">
                    <video
                      className="w-100 live__video-player"
                      id="video"
                      poster="//shaka-player-demo.appspot.com/assets/poster.jpg"
                      controls
                      autoPlay
                    ></video>
                  </div>
                  <div className="col-12 w-100 p-3 d-flex">
                    <div className="col-12">
                      <div className="row d-flex">
                        <div>
                          <img
                            className="
                          live__user-logo live__user-logo
                          border-outline border
                          rounded-circle
                        "
                            src="img/Dashboard.png"
                            alt="user-logo.png"
                          />

                          <div className="d-flex justify-content-between">
                            <h2 className="live__title pt-2 mb-0 fs-2">
                              Let's Play.
                            </h2>
                            <div className="d-flex align-items-center">
                              <div className="me-md-1 me-lg-3">
                                <button
                                  className="
                                w-100
                                btn btn-primary
                                rounded-pill
                                px-4
                                my-2
                              "
                                  type="submit"
                                  title="follow"
                                >
                                  Follow
                                </button>
                              </div>

                              <div>
                                <button
                                  className="w-100 btn text-gold rounded-circle my-2"
                                  type="submit"
                                  title="favorite"
                                >
                                  <i className="far fa-star"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="live__subtitle h5 pb-1">
                            My Game Live Watch me play
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="d-flex justify-content-between py-2">
                          <div className="d-flex w-50">
                            <div className="me-3">0 views</div>
                            <div>0 watching</div>
                          </div>
                          <div className="d-flex justify-content-around w-50">
                            <div id="live__like">
                              <i className="far fa-thumbs-up pe-1"></i>
                              <span className="d-none d-sm-inline">like</span>
                            </div>
                            <div id="live__dislike">
                              <i className="far fa-thumbs-down pe-1"></i>
                              <span className="d-none d-sm-inline">
                                dislike
                              </span>
                            </div>
                            <div id="live__share">
                              <i className="far fa-share-square pe-1"></i>
                              <span className="d-none d-sm-inline">share</span>
                            </div>
                          </div>

                          <a href="#">
                            <i className="fas fa-ellipsis-h"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 w-100 p-3">
                    <div className="d-flex">
                      <div className="col">
                        <p className="fs-6">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aspernatur animi temporibus beatae voluptas
                          assumenda eius ab hic reprehenderit corrupti totam?
                          <br />
                          <br />
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Impedit maxime modi recusandae non debitis
                          perspiciatis suscipit, laudantium earum, sequi
                          officiis numquam reiciendis natus similique
                          repellendus molestiae, at nulla explicabo quae
                          voluptatibus laborum adipisci animi et ad? Est
                          corrupti aperiam repellendus error odit atque dolores!
                          Veniam cupiditate ea quasi non placeat!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="vh-100">
                  <div className="live__chat w-100 h-75 position-relative">
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
                      className="live__chat-message-container w-100 h-100 py-2 px-3"
                      data-simplebar
                      data-simplebar-auto-hide="true"
                    ></div>
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

                  <div className="notification-menu mt-4 mb-4">
                    <div
                      className="
                    notification-menu-head
                    d-flex
                    justify-content-between
                    align-items-center
                  "
                    >
                      <div className="h3 m-0">Notification</div>
                      <Link href="/">
                        <a className="notif-view-all">View All</a>
                      </Link>
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
                          <Link href="/">
                            <a>
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                          </Link>
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
                          <h4>You received a gift from: GameMod#10</h4>
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
                          <Link href="/">
                            <a>
                              <i className="fas fa-ellipsis-h"></i>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <button className="btn btn-fb pt-0 pb-0 ps-3 pe-3 rounded-pill">
                        Receive
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
    </>
  );
}

export default Live;

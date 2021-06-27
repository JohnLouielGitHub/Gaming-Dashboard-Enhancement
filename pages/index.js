import Link from "next/link";

function Index() {
  return (
    <>
      <main id="login">
        <div className="main-overlay bg-image background position-absolute h-100 w-100"></div>
        <div className="container d-flex align-items-center justify-content-center">
          <div className="row login_row w-100 position-relative background">
            <div className="overlay position-absolute h-100 w-100 d-xl-none"></div>
            <div
              className="
              right-text
              col-xl-6
              d-xl-block d-none d-flex
              align-items-center
              position-relative
              h-100
              background
            "
            >
              <div className="overlay2 position-absolute h-100 w-100"></div>
              <div
                className="
                right-text-content
                h-100
                d-flex
                flex-column
                justify-content-center
                position-relative
              "
              >
                <div className="position-absolute text-white  px-3">
                  <div className="bg-line"></div>
                  <h1 className="text-start">
                    <span className="top">Login And</span>
                    <span className="color">Explore</span> Dashboard
                  </h1>
                  <p>
                    Explore the world around you with us with comfortable and
                    quality services, let's join immediately and get the
                    benefits.
                  </p>
                </div>
              </div>
            </div>
            <div className="col login_col col-12 col-xl-6">
              <form
                className="
                col-11
                w-100
                h-100
                m-auto
                overflow-hidden
                d-flex
                align-items-center
                justify-content-center
              "
    
              >
                <div className="inner">
                  <div>
                    <div className="text-center">
                    <img
                      className="logo login_logo mb-1 mb-xl-2"
                      src="img/login_img/game-logo.png"
                      alt="logo"
                    />
                    </div>

                    <h2 className="login_h2 mb-4 text-white">
                      (Sign in to your account) / Just press the sign-in for now.
                    </h2>
                  </div>
                  <div className="mb-3 mb-md-4">
                    <label
                      htmlFor="exampleInputEmail1"
                      className="form-label text-white"
                    >
                      <span>
                        <i className="fa fa-user"></i>
                      </span>{" "}
                      &nbsp;Username
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Username..."
                    />
                  </div>

                  <div className="mb-3 mb-md-4 mb-xl-2 mb-xxl-4">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label text-white"
                    >
                      <span className="me-1">
                        <i className="fa fa-key"></i>
                      </span>
                      &nbsp;Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password..."
                    />
                  </div>

                  <div
                    className="
                    col
                    forgot
                    d-flex
                    justify-content-end
                    mb-3 mb-md-4 mb-xl-2 mb-xxl-4
                  "
                  >
                    <a className="login_a" href="#">
                      Forgot password?
                    </a>
                  </div>

                  <div className="upper-btn mb-md-4">
                    <Link href="/featured">
                    <button
                      type="submit"
                      className="btn-color w-100 bg-darker border-16 px-3 py-1 text-center"
                    >
                      Sign in
                    </button>
                    </Link>
    
                  </div>

                  <div
                    id="emailHelp"
                    className="
                    form-text
                    mb-3
                    d-flex
                    justify-content-center
                    mb-md-4 mb-xl-2 mb-xxl-4
                  "
                  >
                    Or sign in with
                  </div>
                  <div className="social-btns d-flex justify-content-center bottom mb-4">
                    <button
                      className="
                      btn
                      google
                      text-white
                      border-0
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    >
                      <img src="img/login_img/google.png" alt="google icon" />
                    </button>

                    <button
                      className="
                      btn
                      facebook
                      text-white
                      border-0
                      d-flex
                      justify-content-center
                      align-items-center
                      mx-3
                    "
                    >
                      <img
                        src="img/login_img/facebook.png"
                        alt="facebook icon"
                      />
                    </button>

                    <button
                      className="
                      btn
                      twitter
                      text-white
                      border-0
                      d-flex
                      justify-content-center
                      align-items-center
                    "
                    >
                      <img
                        className="twitter-icon"
                        src="img/login_img/twitter.png"
                        alt="twitter icon"
                      />
                    </button>
                  </div>
                  <div className="text-center mb-2 text-white-50">
                    Don't have an account?&nbsp;&nbsp;&nbsp;
                    <Link href="/register">
                    <a  className="register-link login_a text-decoration-none">Register here</a>
                    </Link>

                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Index;

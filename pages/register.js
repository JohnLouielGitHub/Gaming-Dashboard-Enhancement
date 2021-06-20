function Register() {
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
                <div className="position-absolute text-white px-3">
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
                col-12
                w-100
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
  
                    <h2 className="login_h2 h2 mb-1 text-white">
                      Sign Up
                    </h2>
                    <p className=" h4">
                      It's quick and easy.
                    </p>
                  </div>
                  <div className="">
                    <label
                      htmlFor="exampleInputLastname1"
                      className="form-label text-white"
                    >
                     Firstname 
                    </label>
                    <input
                      type="name"
                      className="form-control"
                      id="exampleInputFirstName"
                      aria-describedby="firstNameHelp"
                      placeholder="First name"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="exampleInputLastname1"
                      className="form-label text-white"
                    >
                 
                      Lastname
                    </label>
                    <input
                      type="lastname"
                      className="form-control"
                      id="exampleInputLastname1"
                      placeholder="Last Name"
                    />
                  </div>
                    
                  <div className="">
                    <label
                      htmlFor="exampleInputLastname1"
                      className="form-label text-white"
                    >
                    Password
                      
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="New Password"
                    />
                  </div>

                  <div className="d-flex">
                  <div className="me-2">
                    <label
                      htmlFor="exampleInputBirthday1"
                      className="form-label text-white"
                    >
                 
                      
                    </label>
                    <p>Birthday</p>
                    <input className="form-control" type="date"/>
                  </div>
                  
                  <div className="ms-auto me-auto">
                    <label
                      htmlFor="exampleInputBirthday1"
                      className="form-label text-white"
                    >
                      
                      
                    </label>
                    <p>Gender</p>
                    <div className="d-flex align-items-center">
                    <input className="me-1" type="radio" name="gender" value="male"/> Male
                    <input className="me-1 ms-1" type="radio" name="gender" value="female"/> Female
                    <input className="me-1 ms-1" type="radio" name="gender" value="other"/> Other
                    </div>
                    
                  </div>
                  </div>
                  
                  

                  <div className="upper-btn mb-auto mt-3">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 mb-2 mb-xl-1"
                    >
                      Sign Up
                    </button>
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
                    Or sign up with
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
                  
                 
                  
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Register;

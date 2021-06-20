import Link from "next/link";

function Header() {
  return (
    <>
      {" "}
      <div className="col-md-12 mb-3">
        <div className="head-row">

          <div className="profile-search d-flex justify-content-between align-items-center">
          <div className="col-6 col-md-8 pe-1">
            <div className="d-flex justify-content-between">
              <div className="col-2 col-lg-3 d-xl-none">
              <button
              className="off-canvas-burger btn btn-primary d-block d-xl-none me-3 px-3"
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
              </div>
              <div className="col-8 col-lg-9 col-xl-12">
              <div className="search-bar w-100 position-relative">
              <input
                className="
      search-bar-input
      w-100
      ps-4
      p-2
      rounded
      border-0
      
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
                />
              </span>
            </div>
     
              </div>
            </div>
            </div>
          <div className="col-6 col-md-4 ps-4">
          <div className="d-flex justify-content-between align-items-center">
            
            <h2 className=" h4 w-100 ms-3 mb-0 mt-0 m-xl-0 px-3 text-end ">
              X-travaganza
            </h2>
            <img className="profile-user-logo ms-2" src="img/teams_img/logo_6.png"/>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

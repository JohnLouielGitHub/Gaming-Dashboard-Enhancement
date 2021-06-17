import Link from "next/link";

function Header() {
  return (
    <>
      {" "}
      <div className="col-md-12 mb-3">
        <div className="row">
          <div className="profile-search d-flex justify-content-between align-items-center">
            <button
              className="off-canvas-burger btn btn-primary d-block d-xl-none"
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
            <div className="search-bar w-100 position-relative">
              <input
                className="
    search-bar-input
    w-100
    ps-4
    p-2
    rounded
    bg-secondary
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
            <h2 className="profile-username h4 w-100 ms-3 mb-0 mt-0 m-xl-0">
              Hello X-travaganza !
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

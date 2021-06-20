import Link from "next/link";
import Script from 'next/script'
import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";
import {useRouter} from "next/router";

function Videos() {
  return (
    <>

      <main id="dashboard" className="vh-100 pt-4 ps-2 pe-2 pe-lg-0 ms-auto">
      <SimpleBarReact forceVisible="y" autoHide={false} className="h-100">
      <section id="widgets" data-simplebar="true">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div
                    className="
                profile-search
                d-flex
                justify-content-between
                align-items-center
              "
                  >
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

                    <h2 className="profile-username h4 w-100 ms-3 mb-0 mt-0 m-xl-0">
                      Hello X-travaganza !
                    </h2>

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
export default Videos;

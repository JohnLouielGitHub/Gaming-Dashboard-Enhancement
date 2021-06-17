import Link from "next/link";

function SideMenu() {
  return (
    <>
      <div id="off-canvas-menu" className="position-fixed">
        <div
          className="offcanvas offcanvas-start"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0">
            <aside id="side-menu">
              <div className="d-flex justify-content-center">
                <div className="side-menu-content w-100">
                  <h1 className="text-white">Store.</h1>
                  <ul className="list-unstyled">
                    <Link href="/dashboard">
                      <a>
                        <li id="side-menu-icon-home" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Dashboard.png"
                            alt="dashboard-icon.png"
                          />
                          Dashboard
                        </li>
                      </a>
                    </Link>
                    <Link href="/live">
                      <a>
                        <li id="side-menu-icon-live" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Live.png"
                            alt="live-icon.png"
                          />
                          Live
                        </li>
                      </a>
                    </Link>

                    <Link href="/videos">
                      <a>
                        <li id="side-menu-icon-videos" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Videos.png"
                            alt="videos-icon.png"
                          />
                          Videos
                        </li>
                      </a>
                    </Link>

                    <Link href="/teams">
                      <a>
                        <li id="side-menu-icon-teams" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Teams.png"
                            alt="teams-icon.png"
                          />
                          Teams
                        </li>
                      </a>
                    </Link>

                    <Link href="/featured">
                      <a>
                        <li id="side-menu-icon-featured" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Featured.png"
                            alt="featured-icon.png"
                          />
                          Featured
                        </li>
                      </a>
                    </Link>

                    <Link href="/settings">
                      <a>
                        <li id="side-menu-icon-setting" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Setting.png"
                            alt="setting-icon.png"
                          />
                          Setting
                        </li>
                      </a>
                    </Link>

                    <Link href="/">
                      <a>
                        <li className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/logout.png"
                            alt="logout-1324760598547500271.png"
                          />
                          Logout
                        </li>
                      </a>
                    </Link>
                  </ul>
                  <div className="upgrade-box w-100 p-4 text-center">
                    <h3>Upgrade Version</h3>
                    <div className="upgrade-text">
                      <p>Upgrade now for game interest</p>
                    </div>

                    <button className="btn btn-light ps-3 pe-3">
                      Upgrade Now
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <aside id="side-menu" className="vh-100 position-fixed d-none d-xl-block">
        <div className="side-menu-content w-100 pt-60">
          <h1 className="text-white">Store.</h1>
          <ul className="list-unstyled">
            <Link href="/dashboard">
              <a>
                <li id="side-menu-icon-home" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Dashboard.png"
                    alt="dashboard-icon.png"
                  />
                  Dashboard
                </li>
              </a>
            </Link>
            <Link href="/live">
              <a>
                <li id="side-menu-icon-live" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Live.png"
                    alt="live-icon.png"
                  />
                  Live
                </li>
              </a>
            </Link>

            <Link href="/videos">
              <a>
                <li id="side-menu-icon-videos" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Videos.png"
                    alt="videos-icon.png"
                  />
                  Videos
                </li>
              </a>
            </Link>

            <Link href="/teams">
              <a>
                <li id="side-menu-icon-teams" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Teams.png"
                    alt="teams-icon.png"
                  />
                  Teams
                </li>
              </a>
            </Link>

            <Link href="/featured">
              <a>
                <li id="side-menu-icon-featured" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Featured.png"
                    alt="featured-icon.png"
                  />
                  Featured
                </li>
              </a>
            </Link>

            <Link href="/settings">
              <a>
                <li id="side-menu-icon-setting" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Setting.png"
                    alt="setting-icon.png"
                  />
                  Setting
                </li>
              </a>
            </Link>

            <Link href="/">
              <a>
                <li className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/logout.png"
                    alt="logout-1324760598547500271.png"
                  />
                  Logout
                </li>
              </a>
            </Link>
          </ul>
          <div className="upgrade-box w-100 p-4 text-center">
            <h3>Upgrade Version</h3>
            <div className="upgrade-text">
              <p>Upgrade now for game interest</p>
            </div>

            <button className="btn btn-light ps-3 pe-3">Upgrade Now</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideMenu;

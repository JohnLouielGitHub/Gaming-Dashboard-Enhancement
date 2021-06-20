import Link from "next/link";
import Script from "next/script";
import { useRouter } from "next/router";

function SideMenu() {
  const router = useRouter();

  const isActiveMenu = "active";

  const notActiveMenu = "";
  let isActive = (x) => {
    if (x === router.pathname) {
      return isActiveMenu;
    } else {
      return notActiveMenu;
    }
  };

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
            <aside
              id="side-menu"
              className="vh-100 position-fixed d-none d-xl-block"
            >
              <div className="d-flex justify-content-center">
                <div className="side-menu-content w-100">
                  <img src="img/login_img/game-logo.png" alt="duelist logo" />
                  <ul className="list-unstyled">
                    <Link href="/featured">
                      <a className={`d-block ${isActive("/featured")}`}>
                        <li id="side-menu-icon-home" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/Dashboard.svg"
                            alt="dashboard-icon.svg"
                          />
                          Featured
                        </li>
                      </a>
                    </Link>
                    <Link href="/live">
                      <a className={`d-block ${isActive("/live")}`}>
                        <li id="side-menu-icon-live" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/live.svg"
                            alt="live-icon.svg"
                          />
                          Live
                        </li>
                      </a>
                    </Link>

                    <Link href="/dashboard">
                      <a className={`d-block ${isActive("/dashboard")}`}>
                        <li id="side-menu-icon-videos" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/videos.svg"
                            alt="videos-icon.svg"
                          />
                          Tournaments
                        </li>
                      </a>
                    </Link>

                    <Link href="/teams">
                      <a className={`d-block ${isActive("/teams")}`}>
                        <li id="side-menu-icon-teams" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/teams.svg"
                            alt="teams-icon.svg"
                          />
                          Teams
                        </li>
                      </a>
                    </Link>

                    <Link href="/team-profile">
                      <a className={`d-block ${isActive("/team-profile")}`}>
                        <li id="side-menu-icon-featured" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/featured.svg"
                            alt="featured-icon.svg"
                          />
                          Team Profile
                        </li>
                      </a>
                    </Link>

                    <Link href="/settings">
                      <a className={`d-block ${isActive("/settings")}`}>
                        <li id="side-menu-icon-setting" className="p-2">
                          <img
                            className="side-menu-icon me-2"
                            src="img/setting.svg"
                            alt="setting-icon.svg"
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
                            alt="logout-1324760598547500271.svg"
                          />
                          Logout
                        </li>
                      </a>
                    </Link>
                  </ul>
                  <div className="upgrade-box w-100 px-3 py-4 text-center">
            <h3>Upgrade to Premium</h3>
            <div className="upgrade-text">
              <p>Upgrade now and get exclusive awawrds!</p>
            </div>

            <button className="btn btn-gold text-dark ps-3 pe-3">Get Premium now!</button>
          </div>
         </div>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <aside id="side-menu" className="vh-100 position-fixed d-none d-xl-block">
        <div className="side-menu-content w-100 pt-60">
          <img
            className="w-75"
            src="img/login_img/game-logo.png"
            alt="duelist logo"
          />
          <ul className="list-unstyled">
            <Link href="/featured">
              <a className={`d-block ${isActive("/featured")}`}>
                <li id="side-menu-icon-home-1" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/Dashboard.svg"
                    alt="dashboard-icon.svg"
                  />
                  Featured
                </li>
              </a>
            </Link>
            <Link href="/live">
              <a className={`d-block ${isActive("/live")}`}>
                <li id="side-menu-icon-live-1" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/live.svg"
                    alt="live-icon.svg"
                  />
                  Live
                </li>
              </a>
            </Link>

            <Link href="/dashboard">
              <a className={`d-block ${isActive("/dashboard")}`}>
                <li id="side-menu-icon-videos-1" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/videos.svg"
                    alt="videos-icon.svg"
                  />
                  Tournaments
                </li>
              </a>
            </Link>

            <Link href="/teams">
              <a className={`d-block ${isActive("/teams")}`}>
                <li id="side-menu-icon-teams-1" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/teams.svg"
                    alt="teams-icon.svg"
                  />
                  Teams
                </li>
              </a>
            </Link>

            <Link href="/team-profile">
              <a className={`d-block ${isActive("/team-profile")}`}>
                <li id="side-menu-icon-featured-1" className="p-2">
                  <img
                    className="side-menu-icon me-2"
                    src="img/featured.svg"
                    alt="featured-icon.svg"
                  />
                  Team Profile
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
          <div className="upgrade-box w-100 px-3 py-4 border-sp bg-main text-center">
            <h3>Upgrade to Premium</h3>
            <div className="upgrade-text">
              <p>Upgrade now and get exclusive awawrds!</p>
            </div>

            <button className="btn btn-premium bg-gold text-dark ps-3 pe-3">Get Premium now!</button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideMenu;

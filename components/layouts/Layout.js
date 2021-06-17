import SideMenu from "../SideMenu";

function Layout({ children }) {
  return (
    <div>
      <SideMenu />
      {children}
    </div>
  );
}

export default Layout;

import "../scss/main.scss";
import Layout from "../components/layouts/Layout";
import Auth from "../components/layouts/Auth";

function MyApp({ Component, pageProps, router }) {
  if (
    router.pathname.startsWith("/live") ||
    router.pathname.startsWith("/featured") ||
    router.pathname.startsWith("/team-profile")||
    router.pathname.startsWith("/teams") ||
    router.pathname.startsWith("/tournament") || 
    router.pathname.startsWith("/dashboard")
  ) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  } else {
    return (
      <Auth>
        <Component {...pageProps} />
      </Auth>
    );
  }
}
export default MyApp;

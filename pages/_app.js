import Layout from "../src/components/Layout/Layout";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className={`container`}>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;

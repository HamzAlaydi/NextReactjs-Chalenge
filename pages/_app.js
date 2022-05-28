import "../styles/globals.css";
import "../bootstrap.min2.css";
import { store } from "../utils/redux/store";
import Layout from "../components/layout";
import { Provider } from "react-redux";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Application logger</title>
        <meta name="description" content="Application logger Table " />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;

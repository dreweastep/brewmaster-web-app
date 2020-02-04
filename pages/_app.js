import App, { Container } from "next/app";

import Layout from "../components/_App/Layout";
import Router from "next/router";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

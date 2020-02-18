import App from "next/app";

import Layout from "../components/_App/Layout";
import Router from "next/router";
import { Image, Container } from "semantic-ui-react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

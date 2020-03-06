import App from "next/app";

import Layout from "../components/_App/Layout";
import Router from "next/router";

import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {

    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Layout />
        <Component {...pageProps} />
      </>
    );
  }
}

export default MyApp;

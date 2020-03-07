import Head from "next/head";
import HeadContent from "./HeadContent";
import Header from "./Header";
import { Container, Button } from "semantic-ui-react";

function Layout() {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <link rel="stylesheet" type="text/css" href="nprogress.css" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        <title>Brew-Master</title>
      </Head>
      <Header />
    </>
  );
}

export default Layout;

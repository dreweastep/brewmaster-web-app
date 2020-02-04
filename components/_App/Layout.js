import Head from "next/head";
import HeadContent from "./HeadContent";
import Header from "./Header";

function Layout() {
  return (
    <>
      <Head>
        <HeadContent />
        {/* Stylesheets */}
        <link rel="stylesheet" type="text/css" href="../public/static/nprogress.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <title>Brewmaster</title>
      </Head>
      <Header/>
    </>
  );
}

export default Layout;

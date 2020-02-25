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
        <link
          rel="stylesheet"
          href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
        />
        <title>Brew Master</title>
      </Head>
      <Header />
      <Container fluid className="landing-image">
        
      </Container>
    </>
  );
}

export default Layout;

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
        <title>Shopping App</title>
      </Head>
      <Header />
      <Container
        fluid
        style={{
          width: '100%',
          height: '100%',  
          position: 'absolute',
          display: 'inline-block',
          opacity: 0.7,
          backgroundImage: `url(${"images/hops.jpg"})`,
          backgroundSize: 'cover'
        }}
      >
      </Container>
    </>
  );
}

export default Layout;

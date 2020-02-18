import { Menu, Container, Image, Icon, Button } from "semantic-ui-react";

import Router, { useRouter } from "next/router";

import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();

  function setProgress() {
    NProgress.inc(0.2);
  }

  function doneProgress() {
    NProgress.done()
  }

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <div>
      <Menu widths={3} centered="true" id="menu">
        <Button.Group id="appbar">
          <Button id="appbar" onClick={setProgress} inverted>
            Home
          </Button>
          <Button id="appbar" onClick={doneProgress} inverted>
            Brews
          </Button>
          <Button id="appbar" inverted>
            Sensors
          </Button>
        </Button.Group>
      </Menu>
    </div>
  );
}

export default Header;

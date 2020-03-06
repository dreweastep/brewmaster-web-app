import { Menu, Container, Image, Icon, Button } from "semantic-ui-react";

import Router, { useRouter } from "next/router";

import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();

  return (
    <div>
      <Menu fluid widths={4} id="menu" inverted>
        <Container text>
          <Link href="/">
            <Menu.Item header>
              <p id="iconEmoji">🍺</p>
              Brew-Master
            </Menu.Item>
          </Link>
          <Link href="/brews">
            <Menu.Item header>
              <p id="iconEmoji">🍻</p>
              Brews
            </Menu.Item>
          </Link>
          <Link href="/create">
            <Menu.Item header>
              <p id="iconEmoji">🌡️</p>
              Sensor
            </Menu.Item>
          </Link>
          <Link href="/createBrew">
            <Menu.Item header>
              <p id="iconEmoji">➕</p>
              Create Brew
            </Menu.Item>
          </Link>
        </Container>
      </Menu>
    </div>
  );
}

export default Header;

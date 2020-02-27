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
      <Menu fluid widths={3} centered="true" id="menu" inverted>
        <Container text>
          <Link href="/">
            <Menu.Item header>
              <Image
                size="mini"
                src="/images/beer.jpg"
                style={{ marginRight: '1em' }}
              />
              Brew Master
          </Menu.Item>
          </Link>
          <Link href="/brews">
            <Menu.Item header>
              <Icon
                name="beer"
                size="large"
              />
              Brews
          </Menu.Item>
          </Link>
          <Link href="/create">
            <Menu.Item header>
              <Icon name="thermometer empty" size="large" />
              Sensors
          </Menu.Item>
          </Link>
        </Container>
      </Menu>
    </div>
  );
}

export default Header;

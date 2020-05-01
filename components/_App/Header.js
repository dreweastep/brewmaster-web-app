import { Menu, Container, Image, Icon, Button } from "semantic-ui-react";
import { handleLogout } from "../../utils/auth"

import Router, { useRouter } from "next/router";

import Link from "next/link";
import NProgress from "nprogress";

// Manipulates progress bar using nextJS Router
Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {

  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  console.log(user)

  return (
    <div>
      <Menu fluid widths={6} id="menu" inverted>
        <Container id="textContainer" text>
          <Link href="/">
            <Menu.Item header>
              <p id="iconEmoji">🍺</p>
              Brew-Master
            </Menu.Item>
          </Link>
          <Link href="/brews">
            <Menu.Item header>
              <p id="iconEmoji">🍻</p>
              My Brews
            </Menu.Item>
          </Link>
          <Link href="/sensor">
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

          {user ? (
            <>
              <Link href="/account">
                <Menu.Item header active={isActive('/account')}>
                  <p id="iconEmoji">🥴</p>
                  Account
                </Menu.Item>
              </Link>
              <Menu.Item onClick={handleLogout} header>
                <Icon
                  name="sign out"
                  size="large"
                />
                 Logout
              </Menu.Item>
            </>
          ) : (
              <>
                <Link href="/login">
                  <Menu.Item header>
                    <p id="iconEmoji">🔒</p>
                      Login
                  </Menu.Item>
                </Link>
                <Link href="/signup">
                  <Menu.Item header>
                    <p id="iconEmoji">📝</p>
                      Signup
                  </Menu.Item>
                </Link>
              </>
            )
          }
        </Container>
      </Menu>
    </div>
  );
}

export default Header;

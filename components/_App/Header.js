import {
  AppBar,
  Button,
  ButtonGroup,
  IconButton,
  Toolbar,
  Typography,
  Container
} from "@material-ui/core";

import Router, { useRouter } from "next/router";

import Link from "next/link";
import NProgress from "nprogress";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header() {
  const router = useRouter();

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <AppBar color="secondary" position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6">News</Typography>
        <Container>
          <ButtonGroup
            color="primary"
            variant="contained"
            size="large"
            aria-label="outlined primary button group"
          >
            <Button>Login</Button>
            <Button>Create Brew</Button>
            <Button>History</Button>
          </ButtonGroup>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

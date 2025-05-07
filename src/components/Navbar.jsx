import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import * as React from "react";
// border: "1px solid red",
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router";
const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Exchange Rate",
    path: "/exchange-rate",
  },
  {
    name: "View Github Repo",
    path: "https://github.com/Pragun-4u/novel-office",
  },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="relative"
      sx={{
        width: "100vw",
      }}
    >
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              hover: { color: "red" },
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFkrI9K5ensDA/company-logo_200_200/company-logo_200_200/0/1691468523244/novel_office_india_logo?e=2147483647&v=beta&t=xmyvbfPr_nvN1s5X0XccU_D-HlQTdtmn0QO7lwWF8tc"
              alt="logo"
              height={"35px"}
              width={"35px"}
              style={{
                borderRadius: "50%",
              }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                flexWrap: "nowrap",
              }}
            >
              {pages.map((page) => (
                <div key={page?.name} style={{ margin: "10px 0" }}>
                  <Link
                    to={page?.path}
                    sx={{ textAlign: "center" }}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      padding: "10px",
                    }}
                  >
                    {page?.name}
                  </Link>
                </div>
                // </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img
              src="https://media.licdn.com/dms/image/v2/D4E0BAQFkrI9K5ensDA/company-logo_200_200/company-logo_200_200/0/1691468523244/novel_office_india_logo?e=2147483647&v=beta&t=xmyvbfPr_nvN1s5X0XccU_D-HlQTdtmn0QO7lwWF8tc"
              alt="logo"
              height={"35px"}
              width={"35px"}
              style={{
                borderRadius: "50%",
              }}
            />
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              // justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {pages.map((page) => (
              <Link
                key={page?.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                to={page?.path}
                style={{ textDecoration: "none", color: "white" }}
              >
                {page?.name}
              </Link>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

import React, { useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AttractionsIcon from "@mui/icons-material/Attractions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import Box from "@mui/material/Box";
import { Link } from "gatsby";

import resume from "../../../assets/pdf/Cheo_Roman_Resume.pdf";
import avatar from "../../../assets/images/self.png";
import { PAGES } from "../../data/data";
import useDarkTheme from "../../hooks/useTheme";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [_, setMode] = useDarkTheme();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AttractionsIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Link to="/">CheoR</Link>
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

            {/* mobile view */}
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
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((obj) => (
                <MenuItem key={obj.page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <Link to={obj.url}>{obj.page}</Link>
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key={"Resume"} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <Link
                    href={resume}
                    aria-label="Download Resume"
                    rel="noreferrer"
                    target="_blank"
                    download=""
                  >
                    Resume
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AttractionsIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
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
            <Link to="/">CheoR</Link>
          </Typography>
          {/* tablet/desktops */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map((obj) => (
              <Button
                key={obj.page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                <Link to={obj.url}>{obj.page}</Link>
              </Button>
            ))}
            <Button
              key="Resume"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              <Link
                href={resume}
                aria-label="Download Resume"
                rel="noreferrer"
                target="_blank"
                download=""
              >
                Resume
              </Link>
            </Button>
          </Box>

          <Box
            sx={{ flexGrow: 0 }}
            onClick={() => setMode((prevState) => !prevState)}
          >
            <Avatar alt="CheoR" src={avatar} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

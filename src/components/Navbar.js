import React, { useContext, useState } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import AttractionsIcon from "@mui/icons-material/Attractions";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "gatsby";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";

import resume from "../../assets/pdf/Cheo_Roman_Resume.pdf";
import { ToggleThemeContext } from "../context/Theme";
import avatar from "../../assets/images/self.png";
import { PAGES } from "../data/data";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const { toggleTheme } = useContext(ToggleThemeContext);
   const [isDark, setIsDark] = useState(false); // theme.palette.mode doesn't toggle

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box mr={1} sx={{ flexGrow: 0 }}>
            <Avatar alt="CheoR" src={avatar} />
          </Box>
          <Typography
            component={Link}
            noWrap
            sx={{
              color: "inherit",
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              mr: 2,
              textDecoration: "none",
            }}
            to="/"
            variant="h6"
          >
            CheoR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              aria-controls="menu-appbar"
              aria-haspopup="true"
              aria-label="account of current user"
              color="inherit"
              onClick={handleOpenNavMenu}
              size="large"
            >
              <MenuIcon />
            </IconButton>

            {/* mobile view */}
            <Menu
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              id="menu-appbar"
              keepMounted
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              {PAGES.map((obj) => (
                <MenuItem key={obj.page} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    sx={{
                      textAlign: "center",
                      textDecoration: "none",
                    }}
                    to={obj.url}
                  >
                    {obj.page}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem key={"Resume"} onClick={handleCloseNavMenu}>
                <Typography
                  aria-label="Download Resume"
                  component={Link}
                  download=""
                  href={resume}
                  rel="noreferrer"
                  sx={{ textAlign: "center", textDecoration: "none" }}
                  target="_blank"
                >
                  Resume
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <AttractionsIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            component={Link}
            noWrap
            sx={{
              color: "inherit",
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              mr: 2,
              textDecoration: "none",
            }}
            to="/"
            variant="h5"
          >
            CheoR
          </Typography>
          {/* tablet/desktops */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {PAGES.map((obj) => (
              <Button
                component={Link}
                key={obj.page}
                onClick={handleCloseNavMenu}
                sx={{
                  display: "block",
                  my: 2,
                  textDecoration: "none",
                }}
                to={obj.url}
                variant="h6"
              >
                {obj.page}
              </Button>
            ))}
            <Button
              aria-label="Download Resume"
              component={Link}
              download=""
              href={resume}
              key="Resume"
              onClick={handleCloseNavMenu}
              rel="noreferrer"
              sx={{
                color: "inherit",
                display: "block",
                my: 2,
                textDecoration: "none",
              }}
              target="_blank"
            >
              Resume
            </Button>
          </Box>
          <Box
            p={1}
            sx={{
              flexGrow: 0,
            }}
            onClick={() => {
              toggleTheme((prevState) => !prevState);
              setIsDark((prevState) => !prevState);
            }}
          >
            { isDark ? <LightModeOutlinedIcon /> : <DarkModeOutlinedIcon />}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;

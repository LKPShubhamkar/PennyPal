import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import CustomContainer from "../CustomContainer";

const navLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Products", path: "/products" },
  { label: "Platform", path: "/platform" },
  { label: "Pricing", path: "/pricing" },
  // { label: "Stock Study", path: "/stock-study" },
];

const Header = () => {
  const location = useLocation();
  const [anchorEl, setAnchorEl] = useState(null);

  // Open/close handlers for mobile menu
  const handleMenuOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  return (
    <AppBar
      position="sticky"
      elevation={1}
      sx={{
        bgcolor: "#fff",
        // borderBottom: "1px solid #eee",
        boxShadow: " 0px 4px 6.5px 0px #5633CD2B",
        justifyContent: "center",
      }}
    >
      <CustomContainer>
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box display="flex" alignItems="center">
            <Link to="/">
              <img src="logo.png" alt="PennyPal" style={{ height: 50 }} />
            </Link>
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                paddingLeft: "60px",
              }}
            >
              {navLinks.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Button
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      color: isActive ? "#5633CD" : "#000",
                      textTransform: "none",
                      fontWeight: isActive ? 600 : 400,
                      fontSize: "0.95rem",
                      margin: "0 12px",
                      minWidth: "unset",
                      lineHeight: "100%",
                      letterSpacing: "0%",
                      borderBottom: isActive
                        ? "2.5px solid #5633CD"
                        : "2.5px solid transparent",
                      borderRadius: 0,
                      transition: "all 0.2s",
                    }}
                  >
                    {item.label}
                  </Button>
                );
              })}
            </Box>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              sx={{ ml: 1 }}
            >
              <MenuIcon sx={{ color: "#5633CD", fontSize: 32 }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              {navLinks.map((item) => (
                <MenuItem
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={handleMenuClose}
                  selected={location.pathname === item.path}
                  sx={{
                    color: location.pathname === item.path ? "#5633CD" : "#000",
                    fontWeight: location.pathname === item.path ? 600 : 400,
                  }}
                >
                  {item.label}
                </MenuItem>
              ))}
              <MenuItem
                component="a"
                href="https://ekyc.pennypal.in/lkpsec/pennypal_live"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "#5633CD",
                  fontWeight: 600,
                  border: "1px solid #5633CD",
                  borderRadius: "30px",
                  justifyContent: "center",
                  textAlign: "center",
                  mx: 1,
                }}
              >
                Open Free Account
              </MenuItem>
            </Menu>
          </Box>

          {/* Desktop Action Button */}
          <Box display={{ xs: "none", md: "flex" }} alignItems="center">
            <Button
              variant="contained"
              sx={{
                borderRadius: "37px",
                bgcolor: "#5633CD",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                "&:hover": { bgcolor: "#8169e0" },
              }}
              target="_blank"
              href="https://ekyc.pennypal.in/lkpsec/pennypal_live"
            >
              Open Free Account
            </Button>
          </Box>
        </Toolbar>
      </CustomContainer>
    </AppBar>
  );
};

export default Header;

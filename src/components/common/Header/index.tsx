import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Products", path: "/products" },
  { label: "Platform", path: "/platform" },
  { label: "Pricing", path: "/pricing" },
  // { label: "Stock Study", path: "/stock-study" },
];

const Header = () => {
  const location = useLocation();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "#fff",
        borderBottom: "1px solid #eee",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Section */}
          <Box display="flex" alignItems="center">
            <Link to="/">
              <img src="logo.png" alt="PennyPal" style={{ height: 50 }} />
            </Link>
          </Box>

          {/* Menu Items */}
          <Box display="flex" alignItems="center">
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

          {/* Action Buttons */}
          <Box display="flex" alignItems="center">
            {/* <Button
              variant="outlined"
              sx={{
                borderRadius: "37px",
                borderColor: "#5633CD",
                color: "#000",
                textTransform: "none",
                fontWeight: 500,
                px: 5,
                py: 1,
                mr: 1,
              }}
            >
              Login
            </Button> */}
            <Button
              variant="contained"
              sx={{
                borderRadius: "37px",
                bgcolor: "#5633CD",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                "&:hover": { bgcolor: "#5633CD" },
              }}
              target="_blank"
              href="https://ekyc.pennypal.in/lkpsec/individual_pennypal"
            >
              Open Free Account
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

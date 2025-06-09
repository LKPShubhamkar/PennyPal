import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "About Us", path: "/about-us" },
  { label: "Products", path: "/products" },
  { label: "Platform", path: "/platform" },
  { label: "Pricing", path: "/pricing" },
  { label: "Stock Study", path: "/stock-study" },
];

const Header = () => {
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
            {navLinks.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: "#000",
                  textTransform: "none",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  margin: "0 12px",
                  minWidth: "unset",
                  fontFamily: "Lato",
                  lineHeight: "100%",
                  letterSpacing: "0%",
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Action Buttons */}
          <Box display="flex" alignItems="center">
            <Button
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
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "37px",
                bgcolor: "#5633CD",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                "&:hover": { bgcolor: "#4b2dbf" },
              }}
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

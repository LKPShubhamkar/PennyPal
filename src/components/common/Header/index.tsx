import { AppBar, Toolbar, Button, Box, Container } from "@mui/material";
import { styled } from "@mui/system";

// Styled navigation button
const NavButton = styled(Button)({
  color: "#000",
  textTransform: "none",
  fontWeight: 500,
  fontSize: "0.95rem",
  margin: "0 12px",
  minWidth: "unset",
  lineHeight: "100%",
  letterSpacing: "0%",
});

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
            <img src="logo.png" alt="PennyPal" style={{ height: 50 }} />
          </Box>

          {/* Navigation Buttons */}
          <Box display="flex" alignItems="center">
            <NavButton>About Us</NavButton>
            <NavButton>Products</NavButton>
            <NavButton>Platform</NavButton>
            <NavButton>Pricing</NavButton>
            <NavButton>Stock Study</NavButton>
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

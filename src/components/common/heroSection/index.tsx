import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Banner from "../../../assets/about_banner.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const TopArm = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // column on mobile, row on desktop
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left Side */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 2,
                fontFamily: "Lato",
                color: "#5633CD",
              }}
            >
              Smart Trading. Built on Experience.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 2,
                fontSize: "1rem",
                lineHeight: 1.7,
                fontFamily: "Lato",
              }}
            >
              <span style={{ color: "#5633CD" }}>PennyPal</span> is a modern
              discount broking platform in India, created for traders and
              investors who prefer simplicity, transparency, and affordability.
              With a flat ₹10 per order across all segments, PennyPal enables
              Indian investors and traders to manage their trades without
              concern for high brokerage fees.
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                fontSize: "1rem",
                lineHeight: 1.3,
                fontFamily: "Lato",
              }}
            >
              Behind this platform is extensive experience — PennyPal operates
              under LKP Securities Limited, a well-established name in the
              Indian capital markets since 1948.
            </Typography>

            {/* TextField Section */}
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                fontWeight: 500,
                fontFamily: "Lato",
              }}
            >
              Open Free Demat Account
            </Typography>
            <TextField
              placeholder="Enter your mobile number"
              variant="outlined"
              type="tel" // allows only numbers
              inputProps={{
                inputMode: "numeric", // numeric keyboard on mobile
                pattern: "[0-9]*", // regex pattern for digits only
              }}
              sx={{
                // width: "100%",
                // mb: 2,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "22px",
                  //   height: 48,
                },
                "& .MuiOutlinedInput-input": {
                  padding: "12px 14px",
                  //   paddingRight: "48px",
                },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Typography
                      sx={{
                        fontWeight: 500,
                        color: "#000",
                        fontSize: "1rem",
                        fontFamily: "Lato",
                      }}
                    >
                      +91
                    </Typography>
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end" sx={{ height: "100%" }}>
                    <IconButton
                      sx={{
                        bgcolor: "#5633CD",
                        color: "#fff",
                        borderRadius: "20px",
                        height: 40,
                        px: 5.4,
                        minWidth: "auto",
                        "&:hover": {
                          bgcolor: "#5633CD",
                        },
                      }}
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Right Side */}
          <Box
            component="img"
            src={Banner}
            alt="Smart Trading"
            sx={{
              flex: 1,
              width: "100%",
              maxHeight: 400,
              objectFit: "contain",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default TopArm;

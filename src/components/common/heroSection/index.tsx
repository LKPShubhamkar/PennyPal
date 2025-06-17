import { Box, Typography } from "@mui/material";
import Banner from "../../../assets/about_banner.png";
import PhoneInput from "../PhoneInput";
import CustomContainer from "../CustomContainer";
const TopArm = () => {
  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#f9f9f9",
        fontFamily: "'Lato', sans-serif",
      }}
    >
      <CustomContainer>
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
            <PhoneInput />
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
      </CustomContainer>
    </Box>
  );
};

export default TopArm;

import { Box, Typography, Stack, Paper } from "@mui/material";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import PlatformTwoImg from "../../../assets/PlatformTwo.png";

const featuresLeft = [
  "Quick paperless account opening",
  "Live prices with real-time updates",
  "Readymade Options strategy",
  "Built-in TradingView charts",
  "Custom watchlists",
];

const featuresRight = [
  "Track P&L and portfolio growth in-app",
  "Realtime UPI fund transfer",
  "Notifications & price alerts",
  "Scalping on Charts",
];

const PlatformTwo = () => {
  return (
    <Box
      sx={{
        pt: 10,
        pb: 10,
        bgcolor: "#fff",
        // px: { xs: 3, md: 10 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          color="#5633CD"
          fontWeight={700}
          gutterBottom
          sx={{ fontSize: { xs: "28px", md: "36px" } }}
        >
          PennyPal Mobile App
        </Typography>
        <Typography
          variant="h6"
          fontWeight={500}
          sx={{ fontSize: { xs: "18px", md: "22px" }, mb: 4 }}
        >
          What makes it special?
        </Typography>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={4}
          flexWrap="nowrap"
        >
          <Stack spacing={2}>
            {featuresLeft.map((text, idx) => (
              <Paper
                key={idx}
                elevation={8} // Try 8, 12, 16, or up to 24 for more shadow
                sx={{
                  px: 1,
                  py: 1.5,
                  borderRadius: 2,
                  borderLeft: "4px solid #5633CD",
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "15px",
                  maxWidth: 320,
                }}
              >
                {text}
              </Paper>
            ))}
          </Stack>

          <Stack spacing={2}>
            {featuresRight.map((text, idx) => (
              <Paper
                key={idx}
                elevation={8} // Try 8, 12, 16, or up to 24 for more shadow
                sx={{
                  px: 1,
                  py: 1.5,
                  borderRadius: 2,
                  borderLeft: "4px solid #5633CD",
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "15px",
                  maxWidth: 320,
                }}
              >
                {text}
              </Paper>
            ))}
          </Stack>
        </Stack>

        {/* Store Buttons */}
        <Stack direction="row" spacing={2} mt={4}>
          <Box
            component="img"
            src={AppStore}
            alt="App Store"
            sx={{ height: 48 }}
          />
          <Box
            component="img"
            src={PlayStore}
            alt="Google Play"
            sx={{ height: 48 }}
          />
        </Stack>
      </Box>

      {/* Right Image */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: { xs: 6, md: 0 },
        }}
      >
        <Box
          component="img"
          src={PlatformTwoImg}
          alt="Mobile App UI"
          sx={{
            width: { xs: "100%", md: "220px" },
            maxWidth: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default PlatformTwo;

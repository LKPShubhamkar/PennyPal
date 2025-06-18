import { Box, Typography, Stack, Paper } from "@mui/material";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import PlatformTwoImg from "../../../assets/PlatformTwo.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CustomContainer from "../../common/CustomContainer";

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
  // Inside your component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <CustomContainer>
      <Box
        sx={{
          // pt: 10,
          // pb: 10,
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
            spacing={isMobile ? 0 : 4} // 0 spacing on mobile, 4 on desktop
            flexWrap="nowrap"
          >
            <Stack
              spacing={2}
              sx={{
                mb: { xs: 2, sm: 0 }, // Add margin only when stacked
              }}
            >
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
            <a
              href="https://apps.apple.com/in/app/lkp-pennypal/id6740027396"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={AppStore}
                alt="App Store"
                sx={{ height: 40 }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lkpsec.pennypal&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={PlayStore}
                alt="Google Play"
                sx={{ height: 40 }}
              />
            </a>
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
              // width: { xs: "100%", md: "220px" },
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default PlatformTwo;

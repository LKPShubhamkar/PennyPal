import { Box, Typography, Stack, Paper } from "@mui/material";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import PlatformThreeImg from "../../../assets/PlatformThree.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import CustomContainer from "../../common/CustomContainer";

const PlatformThree = () => {
  // Inside your component
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const featuresLeft = [
    "Best for active traders & analysts",
    "Reliable performance during market hours",
    "GTT orders and bracket orders",
    "Multi-asset view: Stocks, F&O, Commodities",
  ];

  const featuresRight = [
    "Clean, fast, clutter-free interface",
    "Advanced charting + indicators",
    "Market depth, order book & trade history",
  ];
  return (
    <CustomContainer>
      <Box
        sx={{
          // pt: 10,
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
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            position: "relative",
            overflow: "visible",
          }}
        >
          <Box
            component="img"
            src={PlatformThreeImg}
            alt="Mobile App UI"
            sx={{
              width: { xs: "120%", md: "160%" },
              maxWidth: "none",
              transform: { xs: "translateX(-10%)", md: "translateX(-25%)" },
            }}
          />
        </Box>
        {/* Right Image */}
        <Box sx={{ flex: 1, pl: { md: 12 } }}>
          <Typography
            color="#5633CD"
            fontWeight={700}
            gutterBottom
            sx={{ fontSize: { xs: "28px", md: "56px" } }}
          >
            PennyPal Web
          </Typography>
          <Typography
            fontWeight={500}
            sx={{ fontSize: { xs: "18px", md: "22px" }, mb: 4 }}
          >
            Designed for active traders.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={isMobile ? 0 : 4}
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
                    minWidth: 320,
                    background:
                      "linear-gradient(90deg, rgba(86, 51, 205, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)",
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
                    minWidth: 320,
                    background:
                      "linear-gradient(90deg, rgba(86, 51, 205, 0.09) 0%, rgba(255, 255, 255, 0.09) 100%)",
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
      </Box>
    </CustomContainer>
  );
};

export default PlatformThree;

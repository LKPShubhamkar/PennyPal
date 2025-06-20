import { Box, Stack, Typography } from "@mui/material";
import HomeFourImage from "../../../../src/assets/HomeFour.png"; // Adjust path if needed
import HomeFrame from "../../../../src/assets/Home4Frame.png";
import CustomContainer from "../../common/CustomContainer";
import Card from "../../common/Card";
import { useTheme, useMediaQuery } from "@mui/material";

const featureList = [
  "Trading View Chart Integration",
  "Option Chain & Strategy",
  "Smart Screeners & Filters",
  "Advanced Order Types (BO and GTT)",
  "Live Market Feed + News Integration",
];

const HomeFour = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeFrame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        py: 10,
      }}
    >
      <CustomContainer>
        <Box>
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent="space-between"
            spacing={{ xs: 6, md: 10 }}
            // maxWidth="lg"
            // mx="auto"
          >
            {/* Image Section */}
            <Box
              component="img"
              src={HomeFourImage}
              alt="Trader Tools"
              sx={{
                width: { xs: "100%", md: "48%" },
                maxWidth: 600,
                display: "block",
                mx: { xs: "auto", md: 0 },
              }}
            />

            {/* Content Section */}
            <Stack
              spacing={4}
              alignItems={{ xs: "center", md: "flex-start" }}
              textAlign={{ xs: "center", md: "left" }}
              sx={{ width: { xs: "100%", md: "48%" } }}
            >
              <Typography
                variant="h4"
                fontWeight={700}
                sx={{
                  color: "#5633CD",
                  lineHeight: 1.4,
                }}
              >
                Trader-Grade Tools.
                <br />
                Investor-Friendly Experience.
              </Typography>

              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "1fr",
                    sm: "1fr 1fr",
                    md: "1fr 1fr 1fr",
                  },
                  gap: 2,
                }}
              >
                {featureList.map((feature, idx) => (
                  <Box key={idx}>
                    <Card
                      title={feature}
                      width={isMobile ? 320 : 170}
                      height={85}
                      fontSize={isMobile ? "16px" : "13px"}
                    />
                  </Box>
                ))}
              </Box>
            </Stack>
          </Stack>
        </Box>
      </CustomContainer>{" "}
    </Box>
  );
};

export default HomeFour;

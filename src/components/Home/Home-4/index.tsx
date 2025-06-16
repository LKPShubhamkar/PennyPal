import { Box, Stack, Typography, Paper } from "@mui/material";
import HomeFourImage from "../../../../src/assets/HomeFour.png"; // Adjust path if needed
// import Card from "../../common/Card";

const featureList = [
  "Trading View Chart Integration",
  "Option Chain & Strategy",
  "Smart Screeners & Filters",
  "Advanced Order Types (BO and GTT)",
  "Live Market Feed + News Integration",
];

const HomeFour = () => {
  return (
    <Box sx={{ bgcolor: "#f9f9fb", py: 10 }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        justifyContent="space-between"
        spacing={{ xs: 6, md: 10 }}
        maxWidth="lg"
        mx="auto"
      >
        {/* Image Section */}
        <Box
          component="img"
          src={HomeFourImage}
          alt="Trader Tools"
          sx={{
            width: { xs: "100%", md: "48%" },
            maxWidth: 500,
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

          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent={{ xs: "center", md: "flex-start" }}
            useFlexGap
            gap={2}
          >
            {/* <Card /> */}
            {featureList.map((feature, idx) => (
              <Paper
                key={idx}
                elevation={0}
                sx={{
                  border: "1px solid #E0E0E0",
                  borderRadius: "12px",

                  px: 3,
                  py: 1.5,
                  minWidth: 120,
                  textAlign: "center",
                  color: "#5633CD",
                  fontWeight: 500,
                  fontSize: "14px",
                  backgroundColor: "#fff",
                }}
              >
                {feature}
              </Paper>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomeFour;

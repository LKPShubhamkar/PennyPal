import { Box, Paper, Stack, Typography } from "@mui/material";
import PricingTwoImg from "../../../assets/PricingTwo.png";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import webBroswer from "../../../assets/webroswer.png";

const features = [
  "No Account Opening Fee",
  "No AMC for First Year",
  "No % based charges",
  "No upfront fees",
  "No minimum trades required",
];

const Pricingtwo = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        sx={{
          color: "#5633CD",
          textAlign: "center",
          fontWeight: 700,
          mb: 4,
        }}
      >
        Brokerage Structure
      </Typography>

      <Box sx={{ flex: 1, minWidth: 300, textAlign: "center" }}>
        <img
          src={PricingTwoImg}
          alt="Pricing Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>

      <Box
        sx={{
          justifyContent: "space-between",
          display: "flex",
          gap: 2,
          pt: "2rem",
        }}
      >
        {features.map((feature, idx) => (
          <Paper
            key={idx}
            elevation={1} // Subtle shadow for each Paper
            sx={{
              p: 2,
              textAlign: "center",
              fontWeight: 600,
              color: "#5633CD",
              bgcolor: "#f9f8ff",
              borderRadius: 2,
            }}
          >
            {feature}
          </Paper>
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content", // or set a fixed width like 180px * 3 + spacing
          mx: "auto", // horizontal centering if parent is block-level
          my: 6,
        }}
      >
        <Typography
          variant="h3"
          align="center"
          sx={{
            color: "#5633CD",
            fontWeight: 600,
            mb: 3,
          }}
        >
          Open a free account now
        </Typography>
        <Typography align="center">Download the app now.</Typography>
        <Stack direction="row" spacing={2} mt={2}>
          <Box
            component="img"
            src={webBroswer}
            alt="Web Browser"
            sx={{ height: 40, width: 120 }}
          />
          <Box
            component="img"
            src={AppStore}
            alt="App Store"
            sx={{ height: 40, width: 120 }}
          />
          <Box
            component="img"
            src={PlayStore}
            alt="Google Play"
            sx={{ height: 40, width: 120 }}
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default Pricingtwo;

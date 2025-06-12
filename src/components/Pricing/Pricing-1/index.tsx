import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import PricingOneImg from "../../../assets/pricingOne.png";

const PricingOne = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        bgcolor: "#fff",
        minHeight: "80vh",
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1, minWidth: 300, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
        <Typography fontSize="1.8em" fontWeight={500} mb={5}>
          Flat ₹10/Order. Always.
        </Typography>
        <Typography
          sx={{
            fontSize: "3.4rem",
            fontWeight: 550,
            color: "#5633CD",
            mb: 2,
            lineHeight: 1.1,
          }}
        >
          Simple. Transparent. No Fine Print.
        </Typography>
        <Typography fontSize="1.125rem" mb={3}>
          Whether you’re buying one share or a hundred, we charge a flat ₹10 per
          order. That’s it.
        </Typography>
        <PhoneInput />
      </Box>

      {/* Right Section */}
      <Box sx={{ flex: 1, minWidth: 300, textAlign: "center" }}>
        <Box
          component="img"
          src={PricingOneImg}
          alt="Pricing Illustration"
          sx={{
            maxWidth: 480, // adjust this value as needed (e.g., 180, 200, etc.)
            width: "100%",
            height: "auto",
            mx: "auto", // centers the image horizontally
          }}
        />
      </Box>
    </Box>
  );
};

export default PricingOne;

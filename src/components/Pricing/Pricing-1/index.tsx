import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import PricingOneImg from "../../../assets/pricingOne.png";

const PricingOne = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        bgcolor: "#fff",
        minHeight: "80vh",
        py: { xs: 4, md: 0 },
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          minWidth: 280,
          pr: { md: 6 },
          mb: { xs: 4, md: 0 },
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          fontSize={{ xs: "1.3em", md: "1.8em" }}
          fontWeight={500}
          mb={3}
        >
          Flat ₹10/Order. Always.
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "2rem", md: "3.4rem" },
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
      <Box
        sx={{
          flex: 1,
          minWidth: 220,
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={PricingOneImg}
          alt="Pricing Illustration"
          sx={{
            maxWidth: { xs: 280, md: 480 },
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
    </Box>
  );
};

export default PricingOne;

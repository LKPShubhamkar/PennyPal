import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import ProductOneImg from "../../../assets/product_1.png"; // Make sure this path is correct

const ProductOne = () => {
  return (
    <Box sx={{ bgcolor: "#fff", pt: 10, minHeight: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: "#5633CD", mb: 2 }}
          >
            Your Complete Investing Toolkit
          </Typography>

          <Typography variant="h6" fontWeight={500} mb={2}>
            Everything You Need. All in One Place.
          </Typography>

          <Typography variant="body1" mb={4}>
            From long-term investing to active trading PennyPal offers the
            complete suite of financial products to meet your goals.
          </Typography>

          <PhoneInput />
        </Box>

        {/* Right Image Section */}
        <Box sx={{ flex: 1 }}>
          <img
            src={ProductOneImg}
            alt="Investing Toolkit"
            style={{ width: "100%", maxWidth: 500 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ProductOne;

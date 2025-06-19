import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import PricingOneImg from "../../../assets/pricingOne.png";
import PrincingFrame from "../../../assets/Pricing1Frame.png";
import CustomContainer from "../../common/CustomContainer";

const PricingOne = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${PrincingFrame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        // py: 10,
      }}
    >
      {" "}
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            // minHeight: "10vh",
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
            <br />
            <br />
            <Typography
              sx={{
                fontSize: { xs: "2rem", md: "4.1rem" },
                fontWeight: 700,
                color: "#5633CD",
                mb: 2,
                lineHeight: 1.1,
              }}
            >
              Simple. Transparent. No Fine Print.
            </Typography>
            <Typography fontSize="1.125rem">
              Whether you’re buying one share or a hundred,
            </Typography>
            <Typography fontSize="1.125rem" mb={3}>
              we charge a flat ₹10 per order. That’s it.
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
                maxWidth: { xs: 280, md: 550 },
                width: "100%",
                // height: "auto",
              }}
            />
          </Box>
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default PricingOne;

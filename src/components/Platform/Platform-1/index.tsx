import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import PlatformOneImg from "../../../assets/platformOne.png";
import platformframe from "../../../assets/Platform1frame.png";
import CustomContainer from "../../common/CustomContainer";

const words = ["Powerful.", "Simple.", "Seamless."];

const ProductThree = () => {
  const [index, setIndex] = useState(0);

  // Word switcher
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Each word block is based on font size 6.3rem ~ 101px, use 104px for safety
  const wordHeight = 104;

  return (
    <Box
      sx={{
        backgroundImage: `url(${platformframe})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        // maxHeight: "80vh",
        py: 10,
      }}
    >
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            minHeight: "60vh",
            // bgcolor: "#fff",
            // minHeight: "80vh",
          }}
        >
          {/* Left Section */}
          <Box
            sx={{ flex: 1, minWidth: 300, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}
          >
            {/* Vertical Carousel Text */}
            <Box
              sx={{
                height: `${wordHeight}px`,
                overflow: "hidden",
                position: "relative",
                mb: 2,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.6s ease-in-out",
                  transform: `translateY(-${index * wordHeight}px)`,
                  height: `${words.length * wordHeight}px`,
                }}
              >
                {words.map((word, i) => (
                  <Typography
                    key={i}
                    sx={{
                      fontSize: { xs: "4.5rem", md: "6.5rem" },
                      color: "transparent",
                      WebkitTextStroke: "1px #5633CD",
                      height: `${wordHeight}px`,
                      lineHeight: `${wordHeight}px`,
                      textShadow: "0px 2px 15px rgba(86, 51, 205, 0.3)",
                    }}
                  >
                    {word}
                  </Typography>
                ))}
              </Box>
            </Box>

            {/* Subheading */}
            <Typography color="#5633CD" fontSize="3rem" fontWeight={600} mb={1}>
              Next-Gen Trading.
              <br />
              Built for India.
            </Typography>

            {/* Description */}
            <Typography fontSize="1rem" mb={3}>
              Trade anywhere, anytime with PennyPal’s mobile and web platforms.
              Fast, secure, and equipped with useful features.
            </Typography>

            <PhoneInput />
          </Box>

          {/* Right Section */}
          <Box
            component="img"
            src={PlatformOneImg}
            alt="Trading Illustration"
            sx={{
              width: { xs: "100%", sm: "80%", md: "100%" },
              maxWidth: 700,
              height: "auto",
              objectFit: "contain",
              mx: "auto",
              display: "block",
            }}
          />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default ProductThree;

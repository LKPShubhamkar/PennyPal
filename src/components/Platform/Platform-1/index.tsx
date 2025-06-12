import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import PhoneInput from "../../common/PhoneInput";
import PlatformOneImg from "../../../assets/platformOne.png";

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
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        bgcolor: "#fff",
        minHeight: "80vh",
      }}
    >
      {/* Left Section */}
      <Box sx={{ flex: 1, minWidth: 300, pr: { md: 6 }, mb: { xs: 4, md: 0 } }}>
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
                  fontSize: { xs: "4.5rem", md: "6rem" },

                  color: "transparent",
                  WebkitTextStroke: "1px #5633CD",
                  height: `${wordHeight}px`,
                  lineHeight: `${wordHeight}px`,
                }}
              >
                {word}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Subheading */}
        <Typography color="#5633CD" fontSize="2rem" fontWeight={600} mb={1}>
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
      <Box sx={{ flex: 1, minWidth: 300, textAlign: "center" }}>
        <img
          src={PlatformOneImg}
          alt="Trading Illustration"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </Box>
    </Box>
  );
};

export default ProductThree;

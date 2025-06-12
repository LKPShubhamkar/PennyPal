import { Box, Container, Typography, Divider } from "@mui/material";
import Img1 from "../../../assets/coins.png";
import Img2 from "../../../assets/stock_chart.png";
import Img3 from "../../../assets/Clip_path.png";

const WhatWeStandFor = () => {
  const items = [
    {
      img: Img1,
      title: "Tech-Driven Simplicity",
      subtitle: "Built for speed, ease of use, and reliability",
    },
    {
      img: Img2,
      title: "Transparent Pricing",
      subtitle: "No hidden charges, simple ₹10 per order pricing",
    },
    {
      img: Img3,
      title: "Trusted Legacy",
      subtitle: "Backed by LKP Securities since 1948",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "#fff",
      }}
    >
      <Container maxWidth="lg">
        {/* Main Heading */}
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: 600,
            mb: 6,
            textAlign: "center",

            color: "#5633CD",
          }}
        >
          What We Stand For
        </Typography>

        {/* 3 Boxes in horizontal row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" }, // vertical on mobile, horizontal on desktop
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 3, // space between boxes
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 31%", // force ~3 in a row
                border: "1px solid #eee",
                borderRadius: "12px",
                // p: 2,
                display: "flex",
                alignItems: "center",
                minHeight: "120px", // smaller box height
                transition: "box-shadow 0.1s ease",
                // cursor: "pointer",
                "&:hover": {
                  boxShadow: "0px 8px 16px #c792e6", // subtle hover effect
                },
              }}
            >
              {/* Left - Image */}
              <Box
                component="img"
                src={item.img}
                alt={item.title}
                sx={{
                  width: 50,
                  height: 50,
                  objectFit: "contain",
                  //   mr: 2,
                  ml: 2,
                }}
              />

              {/* Grey Vertical Line */}
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  bgcolor: "#ccc",
                  width: "1px",
                  mx: 2,
                }}
              />

              {/* Right - Text */}
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    mb: 0.5,
                    fontSize: "1rem", // slightly smaller
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ lineHeight: 1.5, fontSize: "0.9rem" }}
                >
                  {item.subtitle}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeStandFor;

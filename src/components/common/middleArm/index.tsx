import { Box, Typography, Divider } from "@mui/material";
import Img1 from "../../../assets/coins.png";
import Img2 from "../../../assets/stock_chart.png";
import Img3 from "../../../assets/Clip_path.png";
import aboutframe from "../../../assets/About2frame.png";
import CustomContainer from "../CustomContainer";

const WhatWeStandFor = () => {
  const items = [
    {
      img: Img1,
      title: "Tech-Driven Simplicity",
      subtitle: "Built for speed, ease of use, and reliability",
    },
    {
      img: Img2,
      title: "Flat Pricing, No Surprises",
      subtitle: "₹10/order across Equity, F&O, Currency and Commodities",
    },
    {
      img: Img3,
      title: "Market Access for All",
      subtitle: "Democratizing trading for retail investors across India",
    },
  ];

  return (
    // <Box
    //   sx={{
    //     py: 8,
    //     bgcolor: "#fff",
    //     border: " 1px solid #5633CD36",
    //   }}
    // >
    <Box
      sx={{
        backgroundImage: `url(${aboutframe})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        py: 10,
      }}
    >
      <CustomContainer>
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
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "stretch",
            gap: 3,
          }}
        >
          {items.map((item, index) => (
            <Box
              key={index}
              sx={{
                flex: "0 0 31%",
                border: "1px solid #5633CD36",
                borderRadius: "12px",
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                minHeight: "120px",
                transition: "box-shadow 0.1s ease",
                "&:hover": {
                  boxShadow: "0px 8px 16px #c792e6",
                },
              }}
            >
              {/* Horizontal layout inside each card */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                {/* Left - Image */}
                <Box
                  component="img"
                  src={item.img}
                  alt={item.title}
                  sx={{
                    width: 50,
                    height: 50,
                    objectFit: "contain",
                    ml: 2,
                  }}
                />

                {/* Vertical Divider */}
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    bgcolor: "#ccc",
                    width: "1px",
                    mx: 2,
                    alignSelf: "stretch",
                  }}
                />

                {/* Right - Text */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      mb: 0.5,
                      fontSize: "1rem",
                      color: "#5633CD",
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
            </Box>
          ))}
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default WhatWeStandFor;

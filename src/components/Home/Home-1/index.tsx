import { Box, Typography, Container } from "@mui/material";
import HomeoneImg from "../../../../src/assets/HomeOne.png";

const HomeOne = () => {
  return (
    <Box sx={{ py: 5, px: 2, bgcolor: "#f9f9fb" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            // gap: ,
          }}
        >
          {/* Left Content Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
              sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
            >
              <span style={{ color: "#5633CD" }}> PennyPal </span> - Your
              Gateway to Smart, Simple and Affordable Investing
            </Typography>
            <br />
            <Typography variant="body1" mb={3} sx={{ fontSize: "1.5rem" }}>
              Trade Smart. Save More.
            </Typography>
            <br />
            <Typography
              sx={{
                fontSize: "1.2rem",
                // fontWeight: 500,
                lineHeight: 1.5,
                mb: 3,
              }}
            >
              Invest. Trade. Grow. <br />
              <Box component="span" sx={{ fontWeight: 700, fontSize: "2rem" }}>
                All at Flat{" "}
                <span style={{ color: "#5633Cd", backgroundColor: "#e2dcf8" }}>
                  ₹10/Order.
                </span>
              </Box>
            </Typography>

            <Typography
              variant="body2"
              sx={{
                // color: "text.secondary",
                lineHeight: 1.8,
                maxWidth: 500,
              }}
            >
              No complex pricing. No hidden costs. Just transparent rates.
              <br /> <br />
              Whether you’re starting your investment journey or actively
              trading, PennyPal offers tools to help you manage and grow.
            </Typography>
          </Box>

          {/* Right Side - Image Only */}
          <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={HomeoneImg}
              alt="Investing App"
              style={{
                maxWidth: 500,
                width: "25rem",
                height: "25rem",
                display: "block",
              }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeOne;

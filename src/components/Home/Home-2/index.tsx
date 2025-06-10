import { Box, Stack, Typography, Container } from "@mui/material";
import HomeTwoImg from "../../../../src/assets/HomeTwo.png";

const HomeTwo = () => {
  // Features list with icons and highlights
  const featureList = [
    {
      icon: "💰",
      title: "Flat ₹10 Brokerage",
      desc: "Fixed order fee with no percentage deductions",
    },
    {
      icon: "📊",
      title: "Multiple Segments",
      desc: "Equity, F&O, Commodities, and Currency",
    },
    {
      icon: "⚡",
      title: "Quick Execution, Functional Tools",
      desc: "For time-sensitive trades",
    },
    {
      icon: "📱",
      title: "Mobile App + Web Platform",
      desc: "For convenient access and control",
    },
  ];

  return (
    <Box sx={{ py: 8, px: 2, bgcolor: "#f9f9fb" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            gap: 6,
          }}
        >
          {/* Left Section - Text & Features */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              mb={1}
              sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
              color="#5633CD"
            >
              Why PennyPal?
            </Typography>
            <Typography variant="body1" mt={1} mb={2}>
              PennyPal is designed for a wide range of users — from college
              students to active traders. We aim to make investing simple,
              accessible, and affordable.
            </Typography>
            <Typography variant="body1" fontWeight={600} mb={4}>
              Make the switch. Experience cost-effective investing.
            </Typography>

            <Stack spacing={3}>
              {featureList.map((feature, index) => (
                <Stack
                  direction="row"
                  spacing={2}
                  key={index}
                  alignItems="start"
                >
                  <Box
                    sx={{
                      width: 28,
                      height: 28,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {feature.icon}
                  </Box>
                  <Typography variant="body1">
                    <span style={{ color: "#5633CD", fontWeight: 600 }}>
                      {feature.title}
                    </span>{" "}
                    – {feature.desc}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          {/* Right Section - Image */}
          <Box sx={{ flex: 1, textAlign: "center" }}>
            <img
              src={HomeTwoImg}
              alt="PennyPal Mobile App"
              style={{ width: "100%", maxWidth: 400 }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HomeTwo;

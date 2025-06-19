import { Box, Stack, Typography } from "@mui/material";
import HomeTwoImg from "../../../../src/assets/HomeTwo.png";
import HomeTwo1 from "../../../../src/assets/home2-1.svg";
import HomeTwo2 from "../../../../src/assets/home2-2.svg";
import HomeTwo3 from "../../../../src/assets/home2-3.svg";
import HomeTwo4 from "../../../../src/assets/home2-4.svg";
import CustomContainer from "../../common/CustomContainer";

const HomeTwo = () => {
  // Features list with icons and highlights
  const featureList = [
    {
      icon: HomeTwo1,
      title: "Flat ₹10 Brokerage",
      desc: "Fixed order fee with no percentage deductions",
    },
    {
      icon: HomeTwo2,
      title: "Multiple Segments",
      desc: "Equity, F&O, Commodities, and Currency",
    },
    {
      icon: HomeTwo3,
      title: "Quick Execution, Functional Tools",
      desc: "For time-sensitive trades",
    },
    {
      icon: HomeTwo4,
      title: "Mobile App + Web Platform",
      desc: "For convenient access and control",
    },
  ];

  return (
    <CustomContainer>
      <Box>
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
              fontWeight={700}
              mb={2}
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                color: "#5633CD",
              }}
            >
              Why PennyPal?
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.1rem" },
                lineHeight: 1.7,
                mb: 2,
              }}
            >
              PennyPal is designed for a wide range of users — from college
              students to active traders. We aim to make investing simple,
              accessible, and affordable.
            </Typography>

            <Typography fontWeight={600} sx={{ fontSize: "1.05rem", mb: 4 }}>
              Make the switch. Experience cost-effective investing.
            </Typography>

            <Stack spacing={3}>
              {featureList.map((feature, index) => (
                <Stack
                  direction="row"
                  spacing={2}
                  key={index}
                  alignItems="center"
                >
                  {/* <Box
                    sx={{
                      width: 28,
                      height: 28,
          
                    }}
                  >
                    {feature.icon}
                  </Box> */}
                  <img
                    src={feature.icon}
                    alt="PennyPal Mobile App"
                    style={{
                      width: 45,
                      height: 45,
                      fontSize: 20,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#5633CD",
                    }}
                  />
                  <Typography sx={{ fontSize: "1rem", lineHeight: 1.6 }}>
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
            <Box
              component="img"
              src={HomeTwoImg}
              alt="PennyPal Mobile App"
              sx={{ width: "100%", minWidth: { md: 650 } }}
            />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default HomeTwo;

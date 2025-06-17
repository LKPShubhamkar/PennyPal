import { Box, Typography, Stack } from "@mui/material";
import HomeThreeImg from "../../../../src/assets/HomeThree.png"; // Update as per your path
import HomeThree1 from "../../../../src/assets/home3-1.svg";
import HomeThree2 from "../../../../src/assets/home3-2.svg";
import HomeThree3 from "../../../../src/assets/home3-3.svg";
import HomeThree4 from "../../../../src/assets/home3-4.svg";
import HomeFrame from "../../../../src/assets/Home3Frame.png";
import CustomContainer from "../../common/CustomContainer";
const features = [
  {
    icon: HomeThree1,
    title: "Stocks & F&O Trading",
    desc: "Power up your trades with speed and insights",
  },
  {
    icon: HomeThree2,
    title: "Mutual Funds",
    desc: "Systematic Wealth Creation over a period of time",
  },
  {
    icon: HomeThree3,
    title: "IPOs & ETFs",
    desc: "Get early access",
  },
  {
    icon: HomeThree4,
    title: "SIPs & Smart Investing",
    desc: "Automate your wealth journey",
  },
];

const HomeThree = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${HomeFrame})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        py: 10,
      }}
    >
      <CustomContainer>
        <Box sx={{ pt: 8 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 6,
            }}
          >
            {/* Left Section - Image */}
            <Box sx={{ flex: 1, textAlign: "center" }}>
              <img
                src={HomeThreeImg}
                alt="Trading Dashboard"
                style={{ width: "100%" }}
              />
            </Box>

            {/* Right Section - Content */}
            <Box sx={{ flex: 1 }}>
              <Typography
                fontWeight={700}
                color="#5633CD"
                mb={2}
                sx={{
                  fontSize: { xs: "1.75rem", md: "2.25rem" },
                  lineHeight: 1.4,
                }}
              >
                One Platform. All the Action.
              </Typography>

              <Typography sx={{ fontSize: "1.05rem", mb: 4 }}>
                All within the PennyPal ecosystem – mobile + web.
              </Typography>

              <Stack spacing={3}>
                {features.map((feature, index) => (
                  <Stack
                    key={index}
                    direction="row"
                    spacing={2}
                    alignItems="center"
                  >
                    <img
                      src={feature.icon}
                      alt={feature.title}
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
          </Box>
        </Box>
      </CustomContainer>{" "}
    </Box>
  );
};

export default HomeThree;

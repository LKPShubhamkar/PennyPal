import { Box, Typography, Stack, Container } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HomeThreeImg from "../../../../src/assets/HomeThree.png"; // Update as per your path

const features = [
  {
    icon: <ShowChartIcon sx={{ color: "#A3A3A3", fontSize: 32 }} />,
    title: "Stocks & F&O Trading",
    desc: "Power up your trades with speed and insights",
  },
  {
    icon: <AccountBalanceIcon sx={{ color: "#A3A3A3", fontSize: 32 }} />,
    title: "Mutual Funds",
    desc: "Systematic Wealth Creation over a period of time",
  },
  {
    icon: <LocalAtmIcon sx={{ color: "#A3A3A3", fontSize: 32 }} />,
    title: "IPOs & ETFs",
    desc: "Get early access",
  },
  {
    icon: <AutoGraphIcon sx={{ color: "#A3A3A3", fontSize: 32 }} />,
    title: "SIPs & Smart Investing",
    desc: "Automate your wealth journey",
  },
];

const HomeThree = () => {
  return (
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
            {features.map((feature, idx) => (
              <Stack
                key={idx}
                direction="row"
                spacing={2}
                alignItems="flex-start"
              >
                <Box
                  sx={{
                    width: 28,
                    height: 28,
                    fontSize: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#5633CD",
                  }}
                >
                  {feature.icon}
                </Box>
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
  );
};

export default HomeThree;

import React from "react";
import { Box, Grid, Typography, Stack, Container } from "@mui/material";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import HomeThreeImg from "../../../src/assets/HomeThree.png"; // Update as per your path

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
    <Box sx={{ bgcolor: "#f9f9fb", py: 10 }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          {/* Image Section */}
          <div>
            <Box
              component="img"
              src={HomeThreeImg}
              alt="Trading Dashboard"
              sx={{
                width: "100%",
                maxWidth: 550,
                display: "block",
                mx: { xs: "auto", md: 0 },
              }}
            />
          </div>

          {/* Content Section */}
          <div>
            <Typography
              variant="h4"
              fontWeight={700}
              color="#4B2DBF"
              mb={1}
              sx={{ lineHeight: 1.4 }}
            >
              One Platform. All the Action.
            </Typography>

            <Typography variant="body1" mb={4} color="text.secondary">
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
                  <Box>{feature.icon}</Box>
                  <Box>
                    <Typography
                      variant="subtitle1"
                      fontWeight={600}
                      color="#4B2DBF"
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.desc}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </div>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomeThree;

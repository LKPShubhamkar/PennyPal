import { useState } from "react";
import { Box, Button, Typography, Stack } from "@mui/material";
import CustomContainer from "../../common/CustomContainer";
import Card from "../../common/Card";

const featureContent = {
  "Equity Trading": {
    title: "Equity Trading",
    subtitle: "Buy & Sell Stocks in Real-Time",
    features: [
      "Invest in NSE & BSE listed shares",
      "Flat ₹10/order – No hidden charges",
      "Advanced charting for analysis",
    ],
  },
  "Futures & Options": {
    title: "Futures & Options (F&O)",
    subtitle: "Trade Derivatives Like a Pro",
    features: [
      "NSE F&O with low latency execution",
      "Readymade Strategy for smart planning",
      "Flat ₹10/order – No turnover-based pricing",
    ],
  },
  Commodities: {
    title: "Commodities",
    subtitle: "Fuel Your Portfolio with Gold, Crude & More",
    features: [
      "MCX commodities – gold, silver, crude",
      "Risk hedging made simple",
      "Same low cost: ₹10/order",
    ],
  },
  "Mutual Funds": {
    title: "Mutual Funds",
    subtitle: "SIP, Lumpsum, Growth – All in one Place",
    features: [
      "Explore handpicked funds",
      "Start SIPs from ₹100/month",
      "In-app tracking & alerts",
    ],
  },
  "ETFs & IPOs": {
    title: "ETFs & IPOs",
    subtitle: "Invest in Trends & New Opportunities",
    features: [
      "Trade Nifty50, Gold, PSU Bank ETFs & more",
      "Apply for IPOs in 2 clicks via UPI",
      "Real-time updates and application status",
    ],
  },
  "Systematic Investing Tools": {
    title: "Systematic Investing Tools",
    subtitle: "Smart Investing, On Autopilot",
    features: ["SIPs in stocks & mutual funds", "Timely Alerts", "GTT Orders"],
  },
};

type TabKey = keyof typeof featureContent;
const tabOptions = Object.keys(featureContent) as TabKey[];

const ProductTwo = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Equity Trading");

  const { subtitle, features } = featureContent[activeTab];

  return (
    <CustomContainer>
      <Box sx={{ minHeight: "50vh" }}>
        {/* Tabs */}
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
          my={7}
        >
          {tabOptions.map((tab) => (
            <Button
              key={tab}
              onClick={() => setActiveTab(tab)}
              sx={{
                color: "#5633CD",
                borderBottom: activeTab === tab ? "2px solid #5633CD" : "none",
                borderRadius: 0,
                fontWeight: 600,
                textTransform: "none",
                fontSize: "1.3rem",
              }}
            >
              {tab}
            </Button>
          ))}
        </Stack>

        {/* Subtitle */}
        <Typography
          variant="h5"
          align="center"
          fontWeight={600}
          color="#5633CD"
          mb={6}
        >
          {subtitle}
        </Typography>

        {/* Features */}
        <Stack direction="row" justifyContent="center" gap={4} flexWrap="wrap">
          {features.map((text, index) => (
            // <Paper
            //   key={index}
            //   elevation={3}
            //   sx={{
            //     px: 4,
            //     py: 3,
            //     borderRadius: 4,
            //     textAlign: "center",
            //     color: "#5633CD",
            //     fontWeight: 500,
            //     minWidth: 220,
            //     whiteSpace: "pre-line",
            //   }}
            // >
            <Card
              key={index}
              title={text}
              width={320}
              height={160}
              fontSize="20px"
            />

            // </Paper>
          ))}
        </Stack>
      </Box>
    </CustomContainer>
  );
};

export default ProductTwo;

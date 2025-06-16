import { Box, Typography } from "@mui/material";
import HomeSixImg from "../../../assets/HomeSix.png";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import PhoneInput from "../../common/PhoneInput";

const HomeSix = () => {
  return (
    <Box sx={{ bgcolor: "#fff", py: 10 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6,
        }}
      >
        {/* Left Content */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h4" fontWeight={700} color="#5633CD" mb={2}>
            Your Journey Starts Now
          </Typography>

          <Typography variant="body1" mb={3}>
            Whether you're investing for the long haul or trading daily, <br />
            PennyPal gives you the tools to do more with less.
          </Typography>

          <Typography variant="h6" mb={3}>
            Flat{" "}
            <Box component="span" sx={{ color: "#5633CD", fontWeight: 700 }}>
              ₹10
            </Box>
            /order. Invest Smart. Grow Steady.
          </Typography>

          {/* Input Field with Arrow Button */}
          <PhoneInput />

          {/* Store Buttons */}
          <Box sx={{ display: "flex", gap: 2, pt: 3 }}>
            <a
              href="https://apps.apple.com/in/app/lkp-pennypal/id6740027396"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={AppStore} alt="App Store" width={130} />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lkpsec.pennypal&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <img src={PlayStore} alt="Play Store" width={130} />
            </a>
          </Box>
        </Box>

        {/* Right Image */}
        <Box sx={{ flex: 1 }}>
          <img
            src={HomeSixImg}
            alt="Start Investing Illustration"
            style={{ width: "100%", maxWidth: 500 }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default HomeSix;

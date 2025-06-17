import { Box, Typography } from "@mui/material";
import HomeSixImg from "../../../assets/HomeSix.png";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import bargraph from "../../../assets/bargraph.png";
import PhoneInput from "../../common/PhoneInput";
import CustomContainer from "../../common/CustomContainer";

const HomeSix = () => {
  return (
    <CustomContainer>
      <Box sx={{ bgcolor: "#fff", py: { xs: 8, md: 12 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 6, md: 10 },
          }}
        >
          {/* Left Content */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h4"
              fontWeight={800}
              color="#5633CD"
              mb={2}
              sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }}
            >
              Your Journey Starts Now
            </Typography>

            <Typography
              variant="body1"
              mb={3}
              sx={{ fontSize: { xs: "1rem", md: "1.125rem" }, color: "#333" }}
            >
              Whether you're investing for the long haul or trading daily,
              <br />
              PennyPal gives you the tools to do more with less.
            </Typography>

            <Typography
              variant="h6"
              mb={3}
              sx={{ fontSize: { xs: "1.2rem", md: "1.4rem" }, fontWeight: 500 }}
            >
              Flat{" "}
              <Box
                component="span"
                sx={{
                  color: "#5633CD",
                  fontWeight: 700,
                  fontSize: { xs: "1.8rem", md: "2rem" },
                }}
              >
                ₹10
              </Box>{" "}
              /order. Invest Smart. Grow Steady.
            </Typography>

            <PhoneInput />

            {/* Store Buttons */}
            <Box sx={{ display: "flex", gap: 2, pt: 4, flexWrap: "wrap" }}>
              <a
                href="https://apps.apple.com/in/app/lkp-pennypal/id6740027396"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppStore} alt="Download on App Store" width={140} />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.lkpsec.pennypal&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStore} alt="Get it on Google Play" width={140} />
              </a>
            </Box>
            <Box
              sx={{
                flex: 1,
                textAlign: "center",
              }}
            >
              <img
                src={bargraph}
                alt="Start Investing Illustration"
                style={{
                  width: "100%",
                  // maxWidth: 480,
                  height: "auto",
                }}
              />
            </Box>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1,
              textAlign: "center",
            }}
          >
            <img
              src={HomeSixImg}
              alt="Start Investing Illustration"
              style={{
                width: "100%",
                maxWidth: 480,
                height: "auto",
              }}
            />
          </Box>
        </Box>
      </Box>
    </CustomContainer>
  );
};

export default HomeSix;

import { Box, Grid, Stack, Typography } from "@mui/material";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import pricingframe from "../../../assets/pricing2frame.png";
// import webBroswer from "../../../assets/webroswer.png";
import CustomTable from "../../common/Table";
import Card from "../../common/Card";
import CustomContainer from "../../common/CustomContainer";

const features = [
  "No Account Opening Fee",
  "No AMC for First Year",
  "No % based charges",
  "No upfront fees",
  "No minimum trades required",
];

const Pricingtwo = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${pricingframe})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxWidth: "100%",
        maxHeight: "100%",
        // py: 10,
      }}
    >
      <CustomContainer>
        <Typography
          variant="h4"
          sx={{
            color: "#5633CD",
            textAlign: "center",
            fontWeight: 700,
            my: 4,
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Brokerage Structure
        </Typography>
        <Box>
          <CustomTable />
        </Box>

        {/* Responsive Features Grid */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent={{ xs: "center", sm: "space-between" }}
          alignItems={{ xs: "center", sm: "stretch" }}
          sx={{
            pt: "2rem",
          }}
        >
          {features.map((feature, idx) => (
            // <Paper
            //   key={idx}
            //   elevation={1}
            //   sx={{
            //     p: 2,
            //     textAlign: "center",
            //     fontWeight: 600,
            //     color: "#5633CD",
            //     bgcolor: "#f9f8ff",
            //     borderRadius: 2,
            //     fontSize: { xs: "1rem", md: "1.1rem" },
            //     flex: 1,
            //     minWidth: 0,
            //   }}
            // >
            <Card
              key={idx}
              title={feature}
              width={220}
              height={110}
              fontSize="16px"
            />

            // </Paper>
          ))}
        </Stack>

        {/* Call to Action Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            mx: "auto",
            my: 6,
            px: 2,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              color: "#5633CD",
              fontWeight: 600,
              mb: 2,
              fontSize: { xs: "1.5rem", md: "2rem" },
            }}
          >
            Open a free account now
          </Typography>
          <Typography
            align="center"
            sx={{ fontSize: { xs: "1rem", md: "1.1rem" }, pb: 2 }}
          >
            Download the app now.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {/* <Grid>
            <Box
              component="img"
              src={webBroswer}
              alt="Web Browser"
              sx={{ height: 40, width: 120 }}
            />
          </Grid> */}
            <Grid>
              <a
                href="https://apps.apple.com/in/app/lkp-pennypal/id6740027396"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={AppStore}
                  alt="App Store"
                  sx={{ height: 40, width: 120 }}
                />
              </a>
            </Grid>
            <Grid>
              <a
                href="https://play.google.com/store/apps/details?id=com.lkpsec.pennypal&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src={PlayStore}
                  alt="Google Play"
                  sx={{ height: 40, width: 120 }}
                />
              </a>
            </Grid>
          </Grid>
        </Box>
      </CustomContainer>{" "}
    </Box>
  );
};

export default Pricingtwo;

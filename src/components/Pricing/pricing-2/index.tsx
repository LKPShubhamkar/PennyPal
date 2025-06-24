import { Box, Stack, Typography } from "@mui/material";
// import AppStore from "../../../assets/appstore.png";
// import PlayStore from "../../../assets/playstore.png";
import pricing1frame from "../../../assets/pricing2frame.png";
// import pricing2frameEdited from "../../../assets/Pricing3frameeditied.png";
import CustomTable from "../../common/Table";
import Card from "../../common/Card";
import CustomContainer from "../../common/CustomContainer";
import { useTheme, useMediaQuery } from "@mui/material";

const features = [
  "No Account Opening Fee",
  "No AMC for First Year",
  "No % based charges",
  "No upfront fees",
  "No minimum trades required",
];

const Pricingtwo = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // e.g., <600px
  const desktopRows = [features.slice(0, 3), features.slice(3, 5)];
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${pricing1frame})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minWidth: "100%",
          minHeight: "100%",
          // px: 16,
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
              mt: 6,
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
            direction="column"
            spacing={4}
            sx={{
              pt: "2rem",
              mb: 8,
            }}
          >
            {!isMobile ? (
              // Desktop view: 3 cards on top, 2 below
              desktopRows.map((row, rowIndex) => (
                <Stack
                  key={rowIndex}
                  direction="row"
                  spacing={4}
                  justifyContent="center"
                  flexWrap="nowrap"
                >
                  {row.map((feature, idx) => (
                    <Card
                      key={idx}
                      title={feature}
                      width={220}
                      height={110}
                      fontSize="16px"
                    />
                  ))}
                </Stack>
              ))
            ) : (
              // Mobile view: single column
              <Stack spacing={2} alignItems="center">
                {features.map((feature, idx) => (
                  <Card
                    key={idx}
                    title={feature}
                    width={320}
                    height={110}
                    fontSize="18px"
                  />
                ))}
              </Stack>
            )}
          </Stack>
        </CustomContainer>
      </Box>
      {/* <Box
        sx={{
          backgroundImage: `url(${pricing2frameEdited})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          maxWidth: "100%",
          maxHeight: "100%",
          py: 2,
        }}
      > */}
      {/* <CustomContainer> */}
      {/* Call to Action Section */}
      {/* {!isMobile && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                mx: "auto",
                my: 3,
                px: 2,
              }}
            > */}
      {/* <Typography
              variant="h3"
              align="center"
              sx={{
                color: "#5633CD",
                fontWeight: 600,
                fontSize: { xs: "1.5rem", md: "2.6rem" },
                lineHeight: 1.1,
              }}
            >
              Open a
            </Typography>
            <Typography
              variant="h3"
              align="center"
              sx={{
                color: "#5633CD",
                fontWeight: 600,
                mb: 2,
                fontSize: { xs: "1.5rem", md: "2.6rem" },
                lineHeight: 1.1,
              }}
            >
              free account now
            </Typography> */}
      {/* <Typography
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
            </Box> */}
      {/* )} */}
      {/* </CustomContainer> */}
      {/* </Box> */}
    </>
  );
};

export default Pricingtwo;

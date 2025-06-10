import { Box, Container, Typography } from "@mui/material";
import LkpLogo from "../../../assets/LKPLogo.png"; // replace with your actual image

const Promos = () => {
  return (
    <Box
      sx={{
        py: 7,
        bgcolor: "#5633CD",
        fontFamily: "Lato",
        maxWidth: "1100px", // reduce overall width manually (900px looks nice)
        mx: "auto", // center it
        px: { xs: 2, md: 4 }, // add small horizontal padding for mobile & desktop
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {/* Left Box */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              component="h2"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: "#fff",
              }}
            >
              Supported by LKP Securities Limited
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: "1rem",
                lineHeight: 1.7,
                fontFamily: "Lato",
                color: "#fff",
              }}
            >
              LKP Securities is a SEBI-registered stockbroker and is listed on
              BSE. Known
              <br /> for its regulatory adherence and operational capabilities,
              LKP provides the <br />
              infrastructure that supports PennyPal’s services.
            </Typography>
          </Box>

          {/* Right Box - Image */}
          <Box
            component="img"
            src={LkpLogo}
            alt="LKP Securities"
            sx={{
              maxWidth: 280, // try 150-200px based on your logo shape
              maxHeight: 180, // you can adjust this too
              objectFit: "contain",
              mx: "auto", // center horizontally if needed
              display: "block", // center correctly
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Promos;

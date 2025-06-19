import { Box, Typography } from "@mui/material";
import LkpLogo from "../../../assets/LKPLogo.png";
import CustomContainer from "../CustomContainer";
import vectorImage from "../../../assets/vector.png";

const Promos = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${vectorImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        // py: 10,
      }}
    >
      <CustomContainer>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            py: 7,
            px: { xs: 2, md: 4 },
            gap: 4,
          }}
        >
          {/* Text Section */}
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

          {/* Logo Section */}
          <Box
            component="img"
            src={LkpLogo}
            alt="LKP Securities"
            sx={{
              maxWidth: 280, // try 150-200px based on your logo shape
              maxHeight: 180, // you can adjust this too
              objectFit: "contain",
              mx: "auto",
              display: "block",
            }}
          />
        </Box>
      </CustomContainer>
    </Box>
  );
};

export default Promos;

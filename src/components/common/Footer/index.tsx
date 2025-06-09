import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Divider,
  Stack,
  Link,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";

const Footer = () => {
  return (
    <Box
      sx={{
        pt: 6,
        pb: 4,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        {/* Top Row: Download + Social */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Download Section (60%) */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
              color="#4B2DBF"
            >
              Download the App
            </Typography>
            <Stack direction="row" spacing={2} mt={1}>
              <Box
                component="img"
                src="/appstore.png"
                alt="App Store"
                sx={{ height: 40 }}
              />
              <Box
                component="img"
                src="/playstore.png"
                alt="Google Play"
                sx={{ height: 40 }}
              />
            </Stack>
          </Grid>

          {/* Social Section (40%) */}
          <Grid item xs={12} md={4} textAlign={{ xs: "center", md: "left" }}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              gutterBottom
              color="#4B2DBF"
            >
              Follow us on
            </Typography>
            <Stack
              direction="row"
              spacing={1}
              mt={1}
              justifyContent={{ xs: "center", md: "flex-start" }}
            >
              <IconButton>
                <FacebookIcon color="primary" />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "#E1306C" }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon color="primary" />
              </IconButton>
              <IconButton>
                <XIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon sx={{ color: "red" }} />
              </IconButton>
              <IconButton>
                <WhatsAppIcon sx={{ color: "#25D366" }} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        {/* Divider */}
        <Box my={4}>
          <Divider />
        </Box>

        {/* Company Info + Office */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" lineHeight={1.8}>
              LKP Securities Ltd: Single SEBI registration number for
              NSE/BSE/MSEI: INZ000216033
              <br />
              CIN L67120MH1994PLC080039 and Maharashtra GSTIN No:
              27AAACL0963A1ZZ
              <br />
              Research Analyst registration number: INH00001758
              <br />
              DP registration number: IN-DP-705-2022
              <br />
              PMS registration number: INP000005299
              <br />
              Telephone No: +91 22 4002 4785 / 4002 4786
              <br />
              Fax No.: +91 22 2287 4787
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography fontWeight={600} mb={1} color="#4B2DBF">
              Corporate Office:
            </Typography>
            <Typography variant="body2" lineHeight={1.6}>
              2nd Floor, Gala Impecca, Andheri Kurla Road, Near Hotel Courtyard
              Marriott, Chakala, Andheri (East), Mumbai-400059.
            </Typography>

            <Box mt={2}>
              <Typography fontWeight={600} color="#4B2DBF">
                Have a query, write to us
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body2">helpdesk@pennypal.in</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Compliance & Grievances */}
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography fontWeight={600} color="#4B2DBF" mb={1}>
                Compliance Officer Details
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <PersonIcon fontSize="small" />
                <Typography variant="body2">Mr. Ritesh Kumar Tiwari</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mt={0.5}>
                <PhoneIcon fontSize="small" />
                <Typography variant="body2">022-66353110</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography fontWeight={600} color="#4B2DBF" mb={1}>
                In case of grievances for Securities Broking / DP
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body2">grievances@lkpsec.com</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        {/* Bottom Links */}
        <Box mt={6}>
          <Divider />
          <Stack
            direction="row"
            spacing={2}
            flexWrap="wrap"
            mt={2}
            justifyContent="center"
          >
            {[
              "Privacy Policy Disclaimer",
              "Advisory for Investors",
              "Investor Charter",
              "Investor Information",
              "Contact Us",
              "Investors Education",
              "E-Voting",
              "Smart ODR",
              "Account Closure",
              "KMP",
              "SEBI Complaint Redressal System",
              "Customer Support",
            ].map((linkText, index) => (
              <Link
                key={index}
                href="#"
                underline="hover"
                color="text.secondary"
                fontSize="14px"
              >
                {linkText}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

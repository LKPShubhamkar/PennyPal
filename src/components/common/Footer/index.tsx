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
    <Box sx={{ bgcolor: "#fff", pt: 6, pb: 6, fontFamily: "Lato" }}>
      <Container maxWidth="lg">
        {/* App & Social */}
        <Grid
          container
          spacing={4}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item xs={12} md={7}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="#4B2DBF"
              gutterBottom
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
          <Grid item xs={12} md={5}>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              color="#4B2DBF"
              gutterBottom
            >
              Follow us on
            </Typography>
            <Stack direction="row" spacing={1}>
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

        {/* Info + Contact */}
        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
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
          <Grid item xs={12} md={5}>
            <Typography fontWeight={600} mb={1} color="#4B2DBF">
              Corporate Office :
            </Typography>
            <Typography variant="body2" lineHeight={1.6}>
              2nd Floor, Gala Impecca, Andheri Kurla Road,
              <br />
              Near Hotel Courtyard Marriott, Chakala,
              <br />
              Andheri (East), Mumbai-400059.
            </Typography>
            <Box mt={2}>
              <Typography fontWeight={600} color="#4B2DBF">
                Have a query, write to us
              </Typography>
              <Stack direction="row" alignItems="center" spacing={1}>
                <MailOutlineIcon fontSize="small" />
                <Typography variant="body2">helpdesk@pennypal.in</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        {/* Compliance + Grievance */}
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
              <Stack direction="row" alignItems="center" spacing={1}>
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

        {/* Other Links */}
        <Box mt={6}>
          <Typography fontWeight={600} color="#4B2DBF" mb={1}>
            Other Links
          </Typography>
          <Stack direction="row" spacing={2} flexWrap="wrap">
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
            ].map((text, idx) => (
              <Link
                key={idx}
                href="#"
                underline="hover"
                color="text.secondary"
                fontSize="14px"
              >
                {text}
              </Link>
            ))}
          </Stack>
        </Box>

        {/* Disclaimer */}
        <Box mt={4}>
          <Typography fontWeight={600} color="#4B2DBF" mb={1}>
            Disclaimer
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
            Investments in securities market are subject to market risk, read
            all the related documents carefully before investing. The
            disseminated stock are exemplary, and not recommendations.
            Information is research-based and investors are requested to act
            with due diligence. SEBI Registration Number - INZ000216033: We
            collect, retain, process, or disclose your information for
            legitimate business purposes only. To contact you and to provide
            information as latest updates regarding products or services, we may
            use calls or SMS. We do not sell or rent your contact information to
            third parties. Please note that by subscribing to the
            above-mentioned details, you are authorizing us to call/SMS you for
            a period of 12 months even if you may be registered under DND. We
            shall Call/SMS you for a period of 12 months.
          </Typography>
        </Box>

        {/* Attention Investors */}
        <Box mt={4}>
          <Typography fontWeight={600} color="#4B2DBF" mb={1}>
            Attention Investors
          </Typography>
          <Typography variant="body2" color="text.secondary" lineHeight={1.6}>
            Stock Brokers can accept securities as Margin from Clients only by
            way of pledge in the depository system w.e.f. September 1, 2020.
            Update your mobile number & email ID with your Stock Broker /
            Depository Participant. Receive alerts on your Registered Mobile for
            all debit and other important transactions in your demat account
            directly from CDSL/NSDL on the same day. Issued in the interest of
            investors. Investors may please refer to the Exchange’s Frequently
            Asked Questions (FAQs) issued vide circular reference NSE/INSP/45191
            dated July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and
            other guidelines issued from time to time in this regard. Check your
            Securities / MF / Bonds in the consolidated account statement issued
            by NSDL/CDSL every month.
          </Typography>
        </Box>

        {/* Arbitration */}
        <Box mt={4}>
          <Typography
            variant="caption"
            display="block"
            // textAlign="center"
            color="text.secondary"
          >
            Arbitration Mechanism on the Stock Exchange
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

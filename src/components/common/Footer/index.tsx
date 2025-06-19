import { Box, Typography, Divider, Stack, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "../../../assets/instagram.png";
import WhatsAppIcon from "../../../assets/whatsapp.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import AppStore from "../../../assets/appstore.png";
import PlayStore from "../../../assets/playstore.png";
import CustomContainer from "../CustomContainer";

const footerLinks = [
  { label: "Privacy Policy", url: "https://www.lkpsec.com/privacypolicy" },
  { label: "Disclaimer", url: "https://www.lkpsec.com/disclaimer" },
  {
    label: "Advisory for Investors",
    url: "https://www.lkpsec.com/advisoryinfo",
  },
  { label: "Investor Charter", url: "https://www.lkpsec.com/investor" },
  { label: "Investor Information", url: "https://www.lkpsec.com/investorinfo" },
  { label: "Contact Us", url: "https://lkpsec.com/contactus" },
  {
    label: "Investors Education",
    url: "https://www.bseipf.com/investors_education.html",
  },
  {
    label: "E-Voting",
    url: "https://evoting.cdslindia.com/Evoting/EvotingLogin",
  },
  { label: "Smart ODR", url: "https://smartodr.in/login" },
  {
    label: "Account Closure",
    url: "https://closure.meon.co.in/cloud_closure/closure/lkpsec",
  },
  { label: "KMP", url: "https://www.lkpsec.com/Kmp" },
  {
    label: "SEBI Complaint Redressal System",
    url: "https://scores.sebi.gov.in/",
  },
  {
    label: "Customer Support",
    url: "https://helpdesk.pennypal.in/portal/en/kb/",
  },
];

const Footer = () => {
  return (
    <CustomContainer>
      {/* App & Social */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", sm: "center" }}
        spacing={4}
        sx={{ pt: 6, pb: 6 }}
      >
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            fontSize={{ xs: 18, sm: 20 }}
            color="#5633CD"
            gutterBottom
          >
            Download the App
          </Typography>
          <Stack direction="row" spacing={2} mt={2}>
            <a
              href="https://apps.apple.com/in/app/lkp-pennypal/id6740027396"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={AppStore}
                alt="App Store"
                sx={{ height: 40 }}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.lkpsec.pennypal&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Box
                component="img"
                src={PlayStore}
                alt="Google Play"
                sx={{ height: 40 }}
              />
            </a>
          </Stack>
        </Box>
        <Box>
          <Typography
            variant="subtitle1"
            fontWeight={600}
            fontSize={{ xs: 18, sm: 20 }}
            color="#5633CD"
            gutterBottom
          >
            Follow us on
          </Typography>
          <Stack direction="row">
            <IconButton
              target="_blank"
              href="https://www.facebook.com/PennyPalindia"
              sx={{
                "&:hover svg": { transform: "scale(1.2)" },
                "& svg": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <FacebookIcon
                sx={{ fontSize: "2.5rem", color: "primary.main" }}
              />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.instagram.com/pennypal_official"
              rel="noopener noreferrer"
              sx={{
                "&:hover img": { transform: "scale(1.2)" },
                "& img": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <img
                src={InstagramIcon}
                alt="Instagram"
                style={{
                  width: "2.1rem",
                  height: "2.1rem",
                  objectFit: "contain",
                }}
              />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.linkedin.com/company/pennypalindia/"
              sx={{
                "&:hover svg": { transform: "scale(1.2)" },
                "& svg": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <LinkedInIcon
                sx={{ fontSize: "2.5rem", color: "primary.main" }}
              />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://twitter.com/PennyPal_India"
              sx={{
                "&:hover svg": { transform: "scale(1.2)" },
                "& svg": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <XIcon sx={{ fontSize: "2.5rem", color: "black" }} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://www.youtube.com/@Pennypal_Official"
              sx={{
                "&:hover svg": { transform: "scale(1.2)" },
                "& svg": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <YouTubeIcon sx={{ fontSize: "2.5rem", color: "red" }} />
            </IconButton>
            <IconButton
              target="_blank"
              href="https://wa.me/919136764584"
              sx={{
                "&:hover img": { transform: "scale(1.2)" },
                "& img": { transition: "transform 0.2s ease-in-out" },
              }}
            >
              <img
                src={WhatsAppIcon}
                alt="WhatsApp"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  objectFit: "contain",
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Stack>

      {/* Divider */}
      <Box my={4}>
        <Divider />
      </Box>

      {/* Info + Contact */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        spacing={4}
        alignItems="flex-start"
        textAlign={{ xs: "left", sm: "inherit" }}
      >
        <Box flex={1}>
          <Typography
            variant="body2"
            lineHeight={1.8}
            letterSpacing={1}
            fontWeight={400}
            fontSize={{ xs: 13, sm: 15 }}
          >
            LKP Securities Ltd: Single SEBI registration number for
            NSE/BSE/MSEI: INZ000216033
            <br />
            CIN L67120MH1994PLC080039 and Maharashtra GSTIN No: 27AAACL0963A1ZZ
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
        </Box>
        <Box flex={1}>
          {/* <Typography
            fontWeight={600}
            mb={1}
            color="#5633CD"
            fontSize={{ xs: 18, sm: 20 }}
          > */}
          Corporate Office :{/* </Typography> */}
          <Typography
            variant="body2"
            lineHeight={1.6}
            letterSpacing={1}
            fontSize={{ xs: 13, sm: 15 }}
          >
            2nd Floor, Gala Impecca, Andheri Kurla Road,
            <br />
            Near Hotel Courtyard Marriott, Chakala,
            <br />
            Andheri (East), Mumbai-400059.
          </Typography>
          <Box mt={2}>
            <Typography
              fontWeight={600}
              color="#5633CD"
              fontSize={{ xs: 18, sm: 20 }}
            >
              Have a query, write to us
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MailOutlineIcon fontSize="small" />
              <Typography variant="body2" fontSize={{ xs: 13, sm: 15 }}>
                helpdesk@pennypal.in
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Stack>

      {/* Compliance + Grievance */}
      <Box mt={4}>
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={4}
          alignItems="flex-start"
          textAlign={{ xs: "left", sm: "inherit" }}
        >
          <Box flex={1}>
            <Typography
              fontWeight={600}
              fontSize={{ xs: 18, sm: 20 }}
              color="#5633CD"
              mb={1}
            >
              Compliance Officer Details
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PersonIcon fontSize="small" />
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16 }}>
                Mr. Ritesh Kumar Tiwari
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16 }}>
                022-66353110
              </Typography>
            </Stack>
          </Box>
          <Box flex={1}>
            <Typography
              fontWeight={600}
              color="#5633CD"
              mb={1}
              fontSize={{ xs: 18, sm: 20 }}
            >
              In case of grievances for Securities Broking / DP
            </Typography>
            <Stack direction="row" alignItems="center" spacing={1}>
              <MailOutlineIcon fontSize="small" />
              <Typography variant="body1" fontSize={{ xs: 14, sm: 16 }}>
                grievances@lkpsec.com
              </Typography>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Other Links */}
      <Box mt={6}>
        <Typography
          fontWeight={600}
          fontSize={{ xs: 18, sm: 20 }}
          color="#5633CD"
          mb={1}
        >
          Other Links
        </Typography>
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "13px", sm: "16px" },
            a: {
              textDecoration: "none",
              color: "#000",
              cursor: "pointer",
              "&:hover": {
                color: "#5633CD",
              },
            },
          }}
        >
          {footerLinks.map((link, index) => (
            <React.Fragment key={link.label}>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.label}
              </a>
              {index !== footerLinks.length - 1 && " | "}
            </React.Fragment>
          ))}
        </Typography>
      </Box>

      {/* Disclaimer */}
      <Box mt={4}>
        <Typography
          fontWeight={600}
          fontSize={{ xs: 18, sm: 20 }}
          color="#5633CD"
          mb={1}
        >
          Disclaimer
        </Typography>
        <Typography
          variant="body2"
          color="#000"
          lineHeight={1.8}
          fontSize={{ xs: 13, sm: 15 }}
        >
          Investments in securities market are subject to market risk, read all
          the related documents carefully before investing. The disseminated
          stock are exemplary, and not recommendations. Information is
          research-based and investors are requested to act with due diligence.
          SEBI Registration Number - INZ000216033: We collect, retain, process,
          or disclose your information for legitimate business purposes only. To
          contact you and to provide information as latest updates regarding
          products or services, we may use calls or SMS. We do not sell or rent
          your contact information to third parties. Please note that by
          subscribing to the above-mentioned details, you are authorizing us to
          call/SMS you for a period of 12 months even if you may be registered
          under DND. We shall Call/SMS you for a period of 12 months.
        </Typography>
      </Box>

      {/* Attention Investors */}
      <Box mt={4}>
        <Typography
          fontWeight={600}
          fontSize={{ xs: 18, sm: 20 }}
          color="#5633CD"
          mb={1}
        >
          Attention Investors
        </Typography>
        <Typography
          variant="body2"
          color="#000"
          lineHeight={1.8}
          fontSize={{ xs: 13, sm: 15 }}
        >
          Stock Brokers can accept securities as Margin from Clients only by way
          of pledge in the depository system w.e.f. September 1, 2020. Update
          your mobile number & email ID with your Stock Broker / Depository
          Participant. Receive alerts on your Registered Mobile for all debit
          and other important transactions in your demat account directly from
          CDSL/NSDL on the same day. Issued in the interest of investors.
          Investors may please refer to the Exchange’s Frequently Asked
          Questions (FAQs) issued vide circular reference NSE/INSP/45191 dated
          July 31, 2020 and NSE/INSP/45534 dated August 31, 2020 and other
          guidelines issued from time to time in this regard. Check your
          Securities / MF / Bonds in the consolidated account statement issued
          by NSDL/CDSL every month.
        </Typography>
      </Box>

      {/* Arbitration */}
      <Box mt={4}>
        <Typography
          variant="body2"
          display="block"
          color="#000"
          fontSize={{ xs: 13, sm: 15 }}
        >
          Arbitration Mechanism on the Stock Exchange
        </Typography>
      </Box>
    </CustomContainer>
  );
};

export default Footer;

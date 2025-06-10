import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import HomeSevenImg from "../../../../src/assets/HomeSeven.png"; // Your provided image

const contactDetails = [
  {
    icon: <PhoneIcon sx={{ color: "#5633CD" }} />,
    label: "Contact Number",
    value: "022-66351228",
    link: "tel:02266351228",
  },
  {
    icon: <WhatsAppIcon sx={{ color: "#5633CD" }} />,
    label: "WhatsApp",
    value: "9136764584",
    link: "https://wa.me/919136764584",
  },
  {
    icon: <EmailIcon sx={{ color: "#5633CD" }} />,
    label: "Email ID",
    value: "helpdesk@pennypal.in",
    link: "mailto:helpdesk@pennypal.in",
  },
];

const HomeSeven = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, px: 2, bgcolor: "#fff" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* Content section */}
          <div
            style={{
              flex: 1,
              // maxWidth: "600px",
              // width: "100%",
            }}
          >
            <Typography variant="h5" fontWeight={700} color="#5633CD">
              Need Help?
            </Typography>
            <Typography variant="h4" fontWeight={700} mb={4}>
              We’re Always Around
            </Typography>

            <Stack spacing={3}>
              {contactDetails.map((item, index) => (
                <Stack
                  key={index}
                  direction="row"
                  alignItems="center"
                  spacing={2}
                >
                  {item.icon}
                  <Typography variant="body1">
                    {item.label} -{" "}
                    <a
                      href={item.link}
                      style={{
                        color: "#5633CD",
                        textDecoration: "none",
                        fontWeight: 600,
                      }}
                    >
                      {item.value}
                    </a>
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </div>

          {/* Image Section */}
          <div style={{ flex: 1, maxWidth: "500px", width: "100%" }}>
            <img
              src={HomeSevenImg}
              alt="Customer Support Illustration"
              style={{ width: "100%", display: "block" }}
            />
          </div>
        </div>
      </Box>
    </Container>
  );
};

export default HomeSeven;

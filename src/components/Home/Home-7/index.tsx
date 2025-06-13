import { Box, Typography, Stack } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import HomeSevenImg from "../../../../src/assets/HomeSeven.png";
import WhatsAppIcon from "../../../../src/assets/whatsapp.png";

const contactDetails = [
  {
    icon: <PhoneIcon sx={{ color: "#5633CD" }} />,
    label: "Contact Number",
    value: "022-66351228",
    link: "tel:02266351228",
  },
  {
    icon: (
      <img
        src={WhatsAppIcon}
        alt="WhatsApp"
        style={{ width: 24, height: 24 }}
      />
    ),
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
    <Box sx={{ py: { xs: 4, md: 8 }, px: { xs: 1, md: 2 }, bgcolor: "#fff" }}>
      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems="center"
        spacing={{ xs: 4, md: 6 }}
      >
        {/* Content section */}
        <Box sx={{ flex: 1, width: "100%" }}>
          <Typography
            variant="h5"
            fontWeight={700}
            color="#5633CD"
            sx={{ fontSize: { xs: "1.7rem", md: "2rem" } }}
          >
            Need Help?
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            mb={4}
            sx={{ fontSize: { xs: "2.1rem", md: "2.7rem" } }}
          >
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
                <Typography
                  variant="body1"
                  sx={{ fontSize: { xs: "1rem", md: "1.1rem" } }}
                >
                  {item.label} -{" "}
                  <a
                    href={item.link}
                    style={{
                      color: "#5633CD",
                      textDecoration: "none",
                      fontWeight: 600,
                      wordBreak: "break-all",
                    }}
                  >
                    {item.value}
                  </a>
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Image Section */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: { xs: "100%", md: "500px" },
            mx: "auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            src={HomeSevenImg}
            alt="Customer Support Illustration"
            style={{ width: "100%", display: "block" }}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default HomeSeven;

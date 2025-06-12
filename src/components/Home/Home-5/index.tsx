import { Box, Typography, Stack, Container } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const points = [
  "10-Minute Paperless Account Opening",
  "Track all your investments in one place",
  "Easy UPI fund transfers",
  "Enhanced dashboard for easy investing",
  "Price alerts, market watchlists, & fast order placement",
];

const HomeFive = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8, bgcolor: "#fff", px: 2 }}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <Typography
            variant="h4"
            fontWeight={700}
            mb={1}
            sx={{ fontSize: { xs: "1.8rem", md: "2rem" } }}
            color="#5633CD"
          >
            Slick, Fast, Powerful App
          </Typography>
          <Typography variant="body1">
            Secure and Seamless experience.
          </Typography>
        </Stack>

        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          spacing={{ xs: 4, md: 10 }}
          mt={6}
          maxWidth="lg"
          mx="auto"
          flexWrap="wrap"
        >
          {/* Left Column */}
          <Stack spacing={2}>
            {points.slice(0, 3).map((text, index) => (
              <Stack direction="row" alignItems="center" key={index}>
                <FiberManualRecordIcon
                  fontSize="small"
                  sx={{ color: "#5633CD", mr: 1 }}
                />
                <Typography variant="body1" style={{ fontSize: "20px" }}>
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>

          {/* Right Column */}
          <Stack spacing={2}>
            {points.slice(3).map((text, index) => (
              <Stack direction="row" alignItems="center" key={index}>
                <FiberManualRecordIcon sx={{ color: "#5633CD", mr: 1 }} />
                <Typography variant="body1" style={{ fontSize: "20px" }}>
                  {text}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Container>
  );
};

export default HomeFive;

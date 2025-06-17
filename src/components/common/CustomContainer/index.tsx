import { Box } from "@mui/material";

const CustomContainer = ({ children }: any) => {
  return (
    <Box
      sx={{
        maxWidth: "1300px",
        mx: "auto", // center horizontally
        px: { xs: 2, md: 4 }, // responsive horizontal padding
        width: "100%",
      }}
    >
      {children}
    </Box>
  );
};

export default CustomContainer;

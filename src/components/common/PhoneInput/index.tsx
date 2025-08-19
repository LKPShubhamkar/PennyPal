// import {
//   Box,
//   IconButton,
//   InputAdornment,
//   TextField,
//   Typography,
// } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { apiServices } from "../../../services"; // adjust path if needed
// import { useState } from "react";

// const PhoneInput = () => {
//   const [hovered, setHovered] = useState(false);
//   const [phone, setPhone] = useState("");

//   const handleMobileLogin = async () => {
//     const trimmedPhone = phone.trim();

//     if (!/^\d{10}$/.test(trimmedPhone)) {
//       console.error("Invalid phone number");
//       return;
//     }

//     const payload = {
//       mobileNumber: trimmedPhone,
//     };

//     const encodedCredentials = btoa("admin:admin");
//     const customHeaders = {
//       Authorization: `Basic ${encodedCredentials}`,
//     };

//     try {
//       const response = await apiServices.ExternalSSORoute(
//         payload,
//         customHeaders
//       );
//       const originalUrl = response?.data?.data?.url;

//       if (originalUrl) {
//         const modifiedUrl = originalUrl.replace(
//           "live.meon.co.in",
//           "ekyc.pennypal.in"
//         );
//         window.open(modifiedUrl, "_blank");
//       } else {
//         console.error("No redirect URL found in response");
//       }
//     } catch (error) {
//       console.error("Failed to call SSO API:", error);
//     } finally {
//       setPhone("");
//     }
//   };

//   return (
//     <>
//       <Typography sx={{ py: 1, fontWeight: 500 }}>Open Free Account</Typography>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           maxWidth: 400,
//           bgcolor: "#fff",
//           borderRadius: "30px",
//           // boxShadow: "0 0 0 1px #5633CD",
//           border: "1px solid #5633CD",
//           pl: 1,
//           boxShadow: " 0px 6px 11.8px 2px #00000029",
//         }}
//       >
//         <TextField
//           placeholder="Enter Mobile Number"
//           variant="outlined"
//           type="tel"
//           value={phone}
//           onChange={(e) => {
//             const numericInput = e.target.value.replace(/\D/g, "").slice(0, 10);
//             setPhone(numericInput);
//           }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleMobileLogin();
//           }}
//           inputProps={{
//             inputMode: "numeric",
//             maxLength: 10,
//           }}
//           sx={{
//             flexGrow: 1,
//             "& .MuiOutlinedInput-root": {
//               border: "none",
//               borderRadius: "30px",
//               px: 1,
//             },
//             "& .MuiOutlinedInput-notchedOutline": {
//               border: "none",
//             },
//             "& .MuiOutlinedInput-input": {
//               py: 1.5,
//               pl: 0,
//             },
//           }}
//           InputProps={{
//             startAdornment: (
//               <InputAdornment position="start">
//                 <Typography sx={{ px: 1, color: "#000", fontWeight: 500 }}>
//                   +91
//                 </Typography>
//               </InputAdornment>
//             ),
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton
//                   onClick={handleMobileLogin}
//                   onMouseEnter={() => setHovered(true)}
//                   onMouseLeave={() => setHovered(false)}
//                   sx={{
//                     bgcolor: "#5633CD",
//                     color: "#fff",
//                     borderRadius: "30px",
//                     width: 80,
//                     height: 35,
//                     border: "0.5px solid #5633CD",
//                     minWidth: 0,
//                     flexShrink: 0,
//                     transition: "background-color 0.3s ease",
//                     boxSizing: "border-box",
//                     "&:hover": {
//                       bgcolor: "#4b2dbf",
//                     },
//                     "& svg": {
//                       transition: "transform 0.3s ease",
//                       transform: hovered ? "translateX(18px)" : "translateX(0)",
//                       fontSize: 28,
//                     },
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                   }}
//                 >
//                   <ArrowForwardIcon />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Box>
//     </>
//   );
// };

// export default PhoneInput;

import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const PhoneInput = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        maxWidth: { xs: "100%", md: "50%" },
        minWidth: 320,
        border: "1.5px solid rgb(88, 63, 172)",
        borderRadius: "22px",
        mt: 6,
        px: 0.5,
        py: 0.5,
        bgcolor: "#faf8ff",
        gap: 1.5,
        // Uncomment below to center in parent:
        // mx: "auto",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          color: "#5633CD",
          fontSize: { xs: "1rem", sm: "1.1rem" },
          flex: 1,
          textAlign: "left",
          px: 1.5,
        }}
      >
        Open Free Account
      </Typography>
      <IconButton
        href="https://ekyc.pennypal.in/lkpsec/individual_pennypal"
        target="_blank"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        sx={{
          bgcolor: "#5633CD",
          color: "#fff",
          borderRadius: "30px",
          width: 80,
          height: 35,
          border: "0.5px solid #5633CD",
          minWidth: 0,
          flexShrink: 0,
          transition: "background-color 0.3s ease",
          boxSizing: "border-box",
          "&:hover": {
            bgcolor: "#4b2dbf",
          },
          "& svg": {
            transition: "transform 0.3s ease",
            transform: hovered ? "translateX(18px)" : "translateX(0)",
            fontSize: 28,
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ArrowForwardIcon />
      </IconButton>
    </Box>
  );
};

export default PhoneInput;

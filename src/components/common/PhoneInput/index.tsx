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

// import { Box, IconButton, TextField, Typography } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// const PhoneInput = () => {
//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           maxWidth: "50%",
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontWeight: 500,
//           }}
//         >
//           Open Free Account
//         </Typography>
//         <IconButton
//           sx={{
//             bgcolor: "#5633CD",
//             color: "#fff",
//             borderRadius: "0 22px 22px 0",
//             height: 35,
//             px: 4,
//             minWidth: "auto",
//             //   ml: -1, // overlap 1px border between button and input for seamless join
//             "&:hover": {
//               bgcolor: "#4b2dbf",
//             },
//           }}
//         >
//           <ArrowForwardIcon />
//         </IconButton>
//       </Box>
//       {/* <Box
//         sx={{
//           display: "flex",
//           alignItems: "center",
//           width: "100%",
//           maxWidth: 400,
//         }}
//       >
//         <TextField
//           placeholder="Enter your mobile number"
//           variant="outlined"
//           type="tel"
//           inputProps={{
//             inputMode: "numeric",
//             pattern: "[0-9]*",
//           }}
//           sx={{
//             flexGrow: 1,
//             "& .MuiOutlinedInput-root": {
//               borderTopRightRadius: 0,
//               borderBottomRightRadius: 0,
//               borderTopLeftRadius: "22px",
//               borderBottomLeftRadius: "22px",
//             },
//             "& .MuiOutlinedInput-input": {
//               padding: "12px",
//             },
//           }}
//           InputProps={{
//             startAdornment: (
//               <Typography
//                 sx={{
//                   fontWeight: 500,
//                   color: "#000",
//                   fontSize: "1rem",

//                   mr: 1,
//                   userSelect: "none",
//                 }}
//               >
//                 +91
//               </Typography>
//             ),
//             endAdornment: null, // remove adornment here
//           }}
//         />

//         <IconButton
//           sx={{
//             bgcolor: "#5633CD",
//             color: "#fff",
//             borderRadius: "0 22px 22px 0",
//             height: 48,
//             px: 4,
//             minWidth: "auto",
//             //   ml: -1, // overlap 1px border between button and input for seamless join
//             "&:hover": {
//               bgcolor: "#4b2dbf",
//             },
//           }}
//         >
//           <ArrowForwardIcon />
//         </IconButton>
//       </Box> */}
//     </>
//   );
// };

// export default PhoneInput;

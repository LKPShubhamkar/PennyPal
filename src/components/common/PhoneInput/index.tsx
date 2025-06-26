import { Box, IconButton, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { apiServices } from "../../../services"; // adjust path if needed
import { useState } from "react";

const PhoneInput = () => {
  const [phone, setPhone] = useState("");
  const { VITE_SECRET_KEY } = import.meta.env;

  const handleMobileLogin = async () => {
    const trimmedPhone = phone.trim();

    if (!/^\d{10}$/.test(trimmedPhone)) {
      console.error("Invalid phone number");
      return;
    }

    const payload = {
      company: "lkpsec",
      workflowName: "individual_pennypal",
      secret_key: VITE_SECRET_KEY,
      unique_keys: {
        mobile_number: trimmedPhone,
      },
    };

    try {
      const response = await apiServices.ExternalSSORoute(payload);
      const originalUrl = response?.data?.url;

      if (originalUrl) {
        //  Replace domain
        const modifiedUrl = originalUrl.replace(
          "live.meon.co.in",
          "ekyc.pennypal.in"
        );

        //  Open new tab with modified URL
        window.open(modifiedUrl, "_blank");
      } else {
        console.error("No redirect URL found in response");
      }
    } catch (error) {
      console.error("Failed to call SSO API:", error);
    } finally {
      setPhone("");
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          maxWidth: 400,
        }}
      >
        <TextField
          placeholder="Enter your mobile number"
          variant="outlined"
          type="tel"
          value={phone}
          onChange={(e) => {
            const input = e.target.value;
            const numericInput = input.replace(/\D/g, "").slice(0, 10);
            setPhone(numericInput);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleMobileLogin();
            }
          }}
          inputProps={{
            inputMode: "numeric",
            maxLength: 10,
          }}
          sx={{
            flexGrow: 1,
            "& .MuiOutlinedInput-root": {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: "22px",
              borderBottomLeftRadius: "22px",
            },
            "& .MuiOutlinedInput-input": {
              padding: "12px",
            },
          }}
          InputProps={{
            startAdornment: (
              <Typography
                sx={{
                  fontWeight: 500,
                  color: "#000",
                  fontSize: "1rem",
                  // mr: 1,
                  userSelect: "none",
                }}
              >
                +91
              </Typography>
            ),
          }}
        />

        <IconButton
          sx={{
            bgcolor: "#5633CD",
            color: "#fff",
            borderRadius: "0 22px 22px 0",
            height: 48,
            px: 4,
            minWidth: "auto",
            ml: -1,
            "&:hover": {
              bgcolor: "#4b2dbf",
            },
          }}
          onClick={handleMobileLogin}
          aria-label="Submit phone number"
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default PhoneInput;

// import { Box, IconButton, Typography } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import { useState } from "react";

// const PhoneInput = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "space-between",
//         maxWidth: { xs: "100%", md: "50%" },
//         minWidth: 320,
//         border: "1.5px solid rgb(88, 63, 172)",
//         borderRadius: "22px",
//         mt: 6,
//         px: 0.5,
//         py: 0.5,
//         bgcolor: "#faf8ff",
//         gap: 1.5,
//         // Uncomment below to center in parent:
//         // mx: "auto",
//       }}
//     >
//       <Typography
//         variant="h6"
//         sx={{
//           fontWeight: 500,
//           color: "#5633CD",
//           fontSize: { xs: "1rem", sm: "1.1rem" },
//           flex: 1,
//           textAlign: "left",
//           px: 1.5,
//         }}
//       >
//         Open Free Account
//       </Typography>
//       <IconButton
//         href="https://ekyc.pennypal.in/lkpsec/individual_pennypal"
//         target="_blank"
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         sx={{
//           bgcolor: "#5633CD",
//           color: "#fff",
//           borderRadius: "30px",
//           width: 80,
//           height: 35,
//           border: "0.5px solid #5633CD",
//           minWidth: 0,
//           flexShrink: 0,
//           transition: "background-color 0.3s ease",
//           boxSizing: "border-box",
//           "&:hover": {
//             bgcolor: "#4b2dbf",
//           },
//           "& svg": {
//             transition: "transform 0.3s ease",
//             transform: hovered ? "translateX(18px)" : "translateX(0)",
//             fontSize: 28,
//           },
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         <ArrowForwardIcon />
//       </IconButton>
//     </Box>
//   );
// };

// export default PhoneInput;

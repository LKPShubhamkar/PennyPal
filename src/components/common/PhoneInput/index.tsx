import { Box, IconButton, TextField, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const PhoneInput = () => {
  return (
    <>
      <Typography
        variant="h6"
        sx={{
          mb: 2,
          fontWeight: 500,
        }}
      >
        Open Free Account
      </Typography>
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
          inputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
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

                  mr: 1,
                  userSelect: "none",
                }}
              >
                +91
              </Typography>
            ),
            endAdornment: null, // remove adornment here
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
            //   ml: -1, // overlap 1px border between button and input for seamless join
            "&:hover": {
              bgcolor: "#4b2dbf",
            },
          }}
        >
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </>
  );
};

export default PhoneInput;

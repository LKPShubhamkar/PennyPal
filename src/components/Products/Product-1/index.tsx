import {
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
const ProductOne = () => {
  return (
    //   <Container maxWidth="lg">
    <div>
      <div>
        <h1 color="#5633CD">Your Complete Investing Toolkit</h1>
        <h2>Everything You Need. All in One Place.</h2>
        <p>
          From long-term investing to active trading PennyPal offers the
          complete suite of financial products to meet your goals.
        </p>
        <Typography
          variant="h6"
          sx={{
            mb: 2,
            fontWeight: 500,
            fontFamily: "Lato",
          }}
        >
          Open Free Demat Account
        </Typography>
        <TextField
          placeholder="Enter your mobile number"
          variant="outlined"
          type="tel" // allows only numbers
          inputProps={{
            inputMode: "numeric", // numeric keyboard on mobile
            pattern: "[0-9]*", // regex pattern for digits only
          }}
          sx={{
            // width: "100%",
            // mb: 2,
            "& .MuiOutlinedInput-root": {
              borderRadius: "22px",
              //   height: 48,
            },
            "& .MuiOutlinedInput-input": {
              padding: "12px 14px",
              //   paddingRight: "48px",
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: "#000",
                    fontSize: "1rem",
                    fontFamily: "Lato",
                  }}
                >
                  +91
                </Typography>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end" sx={{ height: "100%" }}>
                <IconButton
                  sx={{
                    bgcolor: "#5633CD",
                    color: "#fff",
                    borderRadius: "20px",
                    height: 40,
                    px: 5.4,
                    minWidth: "auto",
                    "&:hover": {
                      bgcolor: "#5633CD",
                    },
                  }}
                >
                  <ArrowForwardIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div></div>
    </div>
  );
  //   </Container>;
};

export default ProductOne;

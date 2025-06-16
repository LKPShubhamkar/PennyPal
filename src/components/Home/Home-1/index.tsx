import { Box, Typography, Paper, Button } from "@mui/material";

const HomeOne = () => {
  return (
    <Box sx={{ py: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          // gap: ,
        }}
      >
        {/* Left Content Section */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            mb={1}
            sx={{ fontSize: { xs: "1.8rem", md: "2rem" }, maxWidth: "33rem" }}
          >
            <span style={{ color: "#5633CD" }}> PennyPal </span> - Your Gateway
            to Smart, Simple and Affordable Investing
          </Typography>
          <br />
          <Typography variant="body1" mb={3} sx={{ fontSize: "1.5rem" }}>
            Trade Smart. Save More.
          </Typography>
          <br />
          <Typography
            sx={{
              fontSize: "1.2rem",
              // fontWeight: 500,
              mb: 3,
            }}
          >
            Invest. Trade. Grow. <br />
            <Box component="span" sx={{ fontWeight: 700, fontSize: "2rem" }}>
              All at Flat{" "}
              <span style={{ color: "#5633Cd", backgroundColor: "#e2dcf8" }}>
                ₹10/Order.
              </span>
            </Box>
          </Typography>

          <Typography
            variant="body2"
            sx={{
              // color: "text.secondary",
              lineHeight: 1.8,
              maxWidth: 500,
            }}
          >
            No complex pricing. No hidden costs. Just transparent rates.
            <br /> <br />
            Whether you’re starting your investment journey or actively trading,
            PennyPal offers tools to help you manage and grow.
          </Typography>
        </Box>

        {/* Right Side - Image Only */}
        {/* <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <img
              src={HomeoneImg}
              alt="Investing App"
              style={{
                maxWidth: 500,
                width: "25rem",
                height: "25rem",
                display: "block",
              }}
            />
          </Box> */}
        <Box
          sx={{
            width: { xs: "20rem", md: "25rem" },
            height: "25rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "transparent",
            p: 2,
            position: "relative",
          }}
        >
          {/* Rotated shadow box */}
          <Box
            sx={{
              position: "absolute",

              // left: 18, // adjust as needed for shadow offset
              width: "90%",
              height: { xs: "80%", md: "70%" },
              bgcolor: "#5633CD",
              borderRadius: 5,
              // filter: "blur(2px)",
              transform: "rotate(8deg)",
              zIndex: 0,
            }}
          />
          {/* Main card */}
          <Paper
            elevation={8}
            sx={{
              borderRadius: 5,
              p: 4,

              position: "relative",
              bgcolor: "#F1EDFF",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                color: "#5633CD",
                mb: 1,
                letterSpacing: "0.01em",
              }}
            >
              Invest. Trade. Grow.
            </Typography>
            <Typography
              sx={{
                color: "#222",
                fontSize: "1.05rem",
                mb: 3,
              }}
            >
              A trusted partner for smart trading and investing.
            </Typography>
            {/* <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  gap: 1,
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
                      borderRadius: "22px",
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
              </Box> */}
            <Button
              sx={{
                border: "1px solid #5633CD",
                color: "#5633CD",
                borderRadius: "30px",
                width: "100%",
                fontSize: "1rem",
                height: 44,
                boxShadow: "0px 0px 5px #c792e6",

                mb: 2,
              }}
              target="_blank"
              href="https://ekyc.pennypal.in/lkpsec/individual_pennypal"
            >
              Open Free Account
            </Button>
            <Typography sx={{ fontSize: "0.75rem" }}>
              I agree to PennyPal Terms and Conditions and Privacy Policy by
              continuing.
            </Typography>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeOne;

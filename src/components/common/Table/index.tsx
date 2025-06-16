import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
} from "@mui/material";

const rows = [
  { segment: "Equity Delivery", brokerage: "₹10" },
  { segment: "Equity Intraday", brokerage: "₹10" },
  { segment: "Equity Futures", brokerage: "₹10" },
  { segment: "Equity Options", brokerage: "₹10" },
  { segment: "Currency Futures", brokerage: "₹10" },
  { segment: "Currency Options", brokerage: "₹10" },
  { segment: "Commodity Futures", brokerage: "₹10" },
  { segment: "IPO Application", brokerage: "₹0" },
];

const CustomTable = () => {
  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "auto",
        m: 0,
        p: 0,
      }}
    >
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{
          borderRadius: 5,
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          m: 0,
          p: 0,
        }}
      >
        <Table aria-label="brokerage table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "#E5E9FF" }}>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  fontWeight: 600,
                  color: "#5633CD",
                  textAlign: "center",
                  py: 1,
                }}
              >
                Segment
              </TableCell>
              <TableCell
                sx={{
                  fontSize: { xs: "14px", sm: "18px" },
                  fontWeight: 600,
                  color: "#5633CD",
                  textAlign: "center",
                  py: 1,
                }}
              >
                Brokerage (Per Order)
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index} hover>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "13px", sm: "16px" },
                    py: 1,
                  }}
                >
                  {row.segment}
                </TableCell>
                <TableCell
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "13px", sm: "16px" },
                    py: 1,
                  }}
                >
                  {row.brokerage}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default CustomTable;

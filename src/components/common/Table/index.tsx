import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
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
    <TableContainer
      component={Paper}
      elevation={0}
      sx={{
        borderRadius: 5,
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        overflow: "hidden",
      }}
    >
      <Table sx={{ minWidth: 400 }} aria-label="brokerage table">
        <TableHead>
          <TableRow
            sx={{
              backgroundColor: "#E5E9FF",
            }}
          >
            <TableCell
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#5633CD",
                textAlign: "center",
              }}
            >
              Segment
            </TableCell>
            <TableCell
              sx={{
                fontSize: "18px",
                fontWeight: 600,
                color: "#5633CD",
                textAlign: "center",
              }}
            >
              Brokerage (Per Order)
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} hover>
              <TableCell sx={{ textAlign: "center" }}>{row.segment}</TableCell>
              <TableCell sx={{ textAlign: "center" }}>
                {row.brokerage}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomTable;

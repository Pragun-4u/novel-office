import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import getFormatCurrency from "../hooks/getFormatCurrency";

function AmortizationTable({ data, currency }) {
  return (
    <TableContainer component={Paper}>
      <h3
        style={{
          width: "100%",
          whiteSpace: "nowrap",
          fontSize: "20px",
          marginLeft: "10px",
        }}
      >
        Amortization Schedule
      </h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Month</TableCell>
            <TableCell>Principal</TableCell>
            <TableCell>Interest</TableCell>
            <TableCell>Remaining Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.month}>
              <TableCell>{row.month}</TableCell>
              <TableCell>
                {getFormatCurrency(row.principal, currency)}
              </TableCell>
              <TableCell>{getFormatCurrency(row.interest, currency)}</TableCell>
              <TableCell>{getFormatCurrency(row.balance, currency)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AmortizationTable;

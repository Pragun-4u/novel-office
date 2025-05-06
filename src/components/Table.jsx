import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React from "react";

function CommonTable({
  tableName = "Table Name",
  rows = [],
  columns = [],
  uniqueKey = "",
}) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        overflowX: "hidden",
      }}
    >
      <h3
        style={{
          width: "100%",
          // whiteSpace: "nowrap",
          fontSize: "20px",
          marginLeft: "10px",
        }}
      >
        {tableName}{" "}
      </h3>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row[uniqueKey]}>
              {Object.values(row).map((value, index) => (
                <TableCell key={index}>{value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CommonTable;

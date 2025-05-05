import { TextField } from "@mui/material";
import React from "react";

const LoanCalculatorDashboard = () => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        name="loanAmount"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        name="interestRate"
        label="Outlined"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        name="term"
        label="Outlined"
        variant="outlined"
      />
    </div>
  );
};

export default LoanCalculatorDashboard;

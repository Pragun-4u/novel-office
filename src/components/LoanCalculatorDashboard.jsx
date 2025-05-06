import { Button, TextField } from "@mui/material";
import React, { useMemo, useState } from "react";
import getFormatCurrency from "../hooks/getFormatCurrency";
import useCalculateAmortizationSchedule from "../hooks/useAmortizationSchedule";
import useCalculateEMI from "../hooks/useCalculateEMI";
import Table from "./Table";

const fields = [
  {
    slug: "principal",
    label: "Loan Amount",
  },
  {
    slug: "interestRate",
    label: "Interest Rate (%)",
  },
  {
    slug: "years",
    label: "Term (years)",
  },
];

const LoanCalculatorDashboard = () => {
  const [formData, setFormData] = useState({});

  const calculatedEMI = useCalculateEMI(formData);
  const amortizedData = useCalculateAmortizationSchedule(formData);

  const rows = useMemo(
    () =>
      amortizedData.map((row) => ({
        month: row.month,
        principal: getFormatCurrency(row.principal, "INR"),
        interest: getFormatCurrency(row.interest, "INR"),
        balance: getFormatCurrency(row.balance, "INR"),
      })),
    [amortizedData]
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const principal = formdata.get("principal");
    const interestRate = formdata.get("interestRate");
    const years = formdata.get("years");
    setFormData({ principal, interestRate, years });
  };

  return (
    <>
      <h1
        style={{
          padding: 0,
          marginBottom: 0,
        }}
      >
        Loan Calculator Dashboard
      </h1>
      <div>
        <form
          style={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
            flexDirection: "column",
            gap: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: "20px",
            }}
          >
            {fields.map((field) => {
              return (
                <TextField
                  key={field.slug}
                  id="outlined-basic"
                  name={field.slug}
                  label={field.label}
                  variant="outlined"
                  required={true}
                />
              );
            })}
          </div>
          <div>
            <Button type="submit" variant="contained">
              Calculate
            </Button>
          </div>
        </form>
      </div>
      {!!calculatedEMI && (
        <>
          <div>
            <h2>Monthly EMI : {getFormatCurrency(calculatedEMI, "INR")} </h2>
          </div>
          <div>
            <Table
              columns={["Month", "Principal", "Interest", "Remaining Balance"]}
              rows={rows}
              tableName="Amortization Schedule"
              uniqueKey="month"
            />
          </div>
        </>
      )}
    </>
  );
};

export default LoanCalculatorDashboard;

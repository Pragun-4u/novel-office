import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useCalculateEMI from "../hooks/useCalculateEMI";
import getFormatCurrency from "../hooks/getFormatCurrency";
import useCalculateAmortizationSchedule from "../hooks/useAmortizationSchedule";
import AmortizationTable from "./AmortizationTable";

const LoanCalculatorDashboard = () => {
  const [formData, setFormData] = useState({});
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

  const calculatedEMI = useCalculateEMI(formData);
  const amortizedData = useCalculateAmortizationSchedule(formData);

  console.log({ calculatedEMI });
  const handleSubmit = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    const principal = formdata.get("principal");
    const interestRate = formdata.get("interestRate");
    const years = formdata.get("years");
    console.log(principal, interestRate, years);
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
            <AmortizationTable data={amortizedData} currency="INR" />
          </div>
        </>
      )}
    </>
  );
};

export default LoanCalculatorDashboard;

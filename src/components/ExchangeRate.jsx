import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import Dropdown from "./ui/Dropdown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import CheckIcon from "@mui/icons-material/Check";
import getConvertCurrency from "../hooks/getConvertCurrency";
import getFormatCurrency from "../hooks/getFormatCurrency";
import Table from "./Table";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import httpClient from "../api/httpClient";
import Loader from "./Loader";

const ExchangeRate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState({});
  const [conversionData, setConversionData] = useState({
    conversion_rates: {},
  });
  const conversion_rates = useMemo(() => {
    return Object.keys(conversionData?.conversion_rates)?.map((key) => ({
      label: key,
      value: key,
    }));
  }, [conversionData]);

  const convertedAmount = getConvertCurrency(data);

  const rows = useMemo(() => {
    return Object.keys(conversionData?.conversion_rates)
      ?.filter((currency) => currency !== data?.to)
      ?.map((currency) => {
        return {
          currency,
          amount: getFormatCurrency(
            getConvertCurrency({
              from: data?.from,
              to: currency,
              amount: data?.amount,
            }),
            currency
          ),
        };
      });
  }, [data, convertedAmount]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    const from = formdata.get("from");
    const to = formdata.get("to");
    const amount = formdata.get("amount");
    setData({ from, to, amount });
  };

  const fetchData = async () => {
    const data = await httpClient({
      method: "GET",
      url: `https://v6.exchangerate-api.com/v6/${
        import.meta.env.VITE_EXCHANGE_RATE_API_KEY
      }/latest/USD`,
    });

    setConversionData(data);
  };

  useEffect(() => {
    try {
      setIsLoading(true);
      fetchData();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <h1>Something went wrong</h1>;
  }

  return (
    <div>
      <h2>Exchange Rate</h2>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          <Dropdown name={"from"} label={"From"} options={conversion_rates} />
          <TextField
            id="outlined-basic"
            name={"amount"}
            label={"Enter amount"}
            variant="outlined"
            required={true}
            sx={{
              width: { xs: "100%", md: "20%" },
            }}
          />
          <KeyboardArrowRightIcon
            sx={{ fontSize: "40px", display: { xs: "none", md: "block" } }}
          />
          <ArrowDownwardIcon
            sx={{
              fontSize: "20px",
              display: { xs: "block", md: "none" },
            }}
          />
          <Dropdown name={"to"} label={"To"} options={conversion_rates} />
          <Button
            sx={{
              height: "40px",
              width: "40px",
            }}
            type="submit"
            variant="contained"
          >
            <CheckIcon />
          </Button>
        </Box>
      </form>

      {!!convertedAmount && (
        <>
          <h3>
            {getFormatCurrency(data?.amount, data?.from)} ≈{" "}
            {getFormatCurrency(convertedAmount, data?.to)}
          </h3>
          {!!conversionData?.time_last_update_utc && (
            <h5>
              Last updated:{" "}
              {new Date(conversionData?.time_last_update_utc).toDateString()}
            </h5>
          )}
          {!!rows?.length && (
            <Table
              rows={rows || []}
              columns={["Currency", "Amount"]}
              tableName={`All other conversions for ${getFormatCurrency(
                data?.amount,
                data?.from
              )}`}
              uniqueKey={"currency"}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ExchangeRate;

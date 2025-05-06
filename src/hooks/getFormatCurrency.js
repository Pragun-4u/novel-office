const getFormatCurrency = (value, currency = "INR") => {
  return new Intl.NumberFormat(undefined, {
    style: "currency",
    currency,
  }).format(value);
};

export default getFormatCurrency;

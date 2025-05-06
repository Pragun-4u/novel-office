function useCalculateAmortizationSchedule({ principal, interestRate, years }) {
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = years * 12;

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let balance = principal;
  const schedule = [];

  for (let month = 1; month <= totalMonths; month++) {
    const interest = balance * monthlyRate;
    const principalPayment = emi - interest;
    balance -= principalPayment;

    if (balance < 0) balance = 0;

    schedule.push({
      month,
      principal: principalPayment,
      interest,
      balance,
    });
  }

  return schedule;
}
export default useCalculateAmortizationSchedule;

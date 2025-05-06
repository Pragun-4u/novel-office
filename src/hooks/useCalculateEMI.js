const useCalculateEMI = ({ principal, interestRate, years }) => {
  const monthlyRate = interestRate / 12 / 100;
  const months = years * 12;
  const factor = Math.pow(1 + monthlyRate, months);

  const emiValue = (principal * monthlyRate * factor) / (factor - 1);

  return emiValue;
};

export default useCalculateEMI;

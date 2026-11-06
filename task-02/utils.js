export const calculateSum = (numbers) =>
  numbers.reduce((total, number) => total + number, 0);

export const calculateAverage = (numbers) => {
  if (numbers.length === 0) {
    return 0;
  }

  return calculateSum(numbers) / numbers.length;
};

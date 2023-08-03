const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const showPercentage = (percentage: number) => {
  return Math.trunc(percentage * 100) + " %";
};

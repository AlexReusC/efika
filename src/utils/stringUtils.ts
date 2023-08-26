const capitalize = (word: string) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

export const showPercentage = (percentage: number) => {
  return Math.trunc(percentage * 100) + " %";
};

export const toMinuteAndSeconds = (time: number) => {
  const minutes = Math.trunc(time / 60).toString();
  let seconds = (time % 60).toString();
  if (seconds.length == 1) {
    seconds = "0" + seconds;
  }
  return minutes + ":" + seconds;
};

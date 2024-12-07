import moment from "moment";

export const trialPeriod = (dateToCheck) => {
  if (!dateToCheck) {
    return {
      isTrialPeriod: false,
      daysLeft: 0,
    }
  }
  const daysLeft = 7 - moment().diff(moment(dateToCheck), 'days');
  return {
    isTrialPeriod: daysLeft > 0,
    daysLeft,
  }
}

export const formatNumber = (num=0) => {
  if (num >= 1_000_000) {
    // Convert to millions and show one decimal place only if the number is below 100
    return (num / 1_000_000 < 100 ? (num / 1_000_000).toFixed(1) : Math.round(num / 1_000_000)) + 'M';
  } else if (num >= 1_000) {
    // Convert to thousands and show one decimal place only if the number is below 100
    return (num / 1_000 < 100 ? (num / 1_000).toFixed(1) : Math.round(num / 1_000)) + 'K';
  } else {
    // No conversion needed, just return the number
    return num.toString();
  }
};
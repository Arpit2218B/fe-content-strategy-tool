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
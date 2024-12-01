import { SET_SUBSCRIPTION_DATA, SET_SUBSCRIPTION_STEP } from "./constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";

const initialState = {
  subscription: {
    isSubscribed: false,
    freeTrial: {
      daysLeft: 0,
      active: false,
    },
    step: SUBSCRIPTION_STEP.CLOSED,
  },
};

export const reducer = (state=initialState, action) => {
  switch (action.type) {
    case SET_SUBSCRIPTION_DATA:
      const data = action?.payload;
      return {
        ...state,
        subscription: {
          ...state?.subscription,
          isSubscribed: data?.isSubscribed,
          freeTrial: data?.freeTrial,
        },
      };
    case SET_SUBSCRIPTION_STEP:
      return {
        ...state,
        subscription: {
          ...state?.subscription,
          step: action?.payload,
        },
      }
    default:
      return state;
  }
}
import { SET_SUBSCRIPTION_DATA, SET_SUBSCRIPTION_STEP, SET_USER_DATA, UPDATE_RECENT_SEARCHES } from "./constants";
import { SUBSCRIPTION_STEP } from "@/utils/constants";

const initialState = {
  user: {},
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
    case SET_USER_DATA:
      return {
        ...state,
        user: action.payload,
      }
    case UPDATE_RECENT_SEARCHES:
      const recentSearches = state?.user?.recentSearches;
      console.log(recentSearches);
      const isDuplicate = recentSearches.some(item =>
        item.platform === action.payload.platform &&
        item.query === action.payload.query
      );
      console.log(isDuplicate);
      if (isDuplicate)
        return state;
      return {
        ...state,
        user: {
          ...state.user,
          recentSearches: [
            ...state?.user?.recentSearches,
            action.payload,
          ]
        }
      }
    default:
      return state;
  }
}
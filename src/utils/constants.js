export const SUBSCRIPTION_STEP = {
  FREE_TRIAL: 'FREE_TRIAL',
  NO_ACTIVE_SUBSCRIPTION: 'NO_ACTIVE_SUBSCRIPTION',
  PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
  PAYMENT_FAILURE: 'PAYMENT_FAILURE',
  MANUAL_PAYMENT: 'MANUAL_PAYMENT',
  CLOSED: 'CLOSED',
};

export const SORTER = [
  {
    label: 'VIEWS',
    value: 'viewCount',
  },
  {
    label: 'LIKES',
    value: 'likeCount',
  },
  {
    label: 'PLAYS',
    value: 'playCount',
  },
  {
    label: 'COMMENTS',
    value: 'commentCount',
  },
]

export const MEDIA_TYPES = [
  {value: 'reels', label: 'REELS'}, 
  {value: 'tiktok', label: 'TIKTOK', tag: 'upcoming'},
  {value: 'shorts', label: 'SHORTS', tag: 'upcoming'},
]
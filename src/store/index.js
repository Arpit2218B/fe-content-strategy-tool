import { compose, createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { config } from '@/utils/config';

const store = createStore(
  reducer,
  config.ENVIRONMENT === 'local' ? composeWithDevTools() : compose(),
);
export default store;
import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import bloginfo from './bloginfo';
import blogPosts from './posts';
import blogPages from './pages';
import blogMedia from './media';
import hotels from './hotels';
import weddingParty from './weddingParty';
import faq from './faqs';
import schedule from './schedule';

const rootReducer = combineReducers({
  bloginfo,
  blogPosts,
  blogPages,
  blogMedia,
  hotels,
  weddingParty,
  faq,
  schedule,
});
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { logger } = require('redux-logger');
  middlewares.push(logger);
}
export default createStore(rootReducer, applyMiddleware(...middlewares));

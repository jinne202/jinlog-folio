import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from '../reducers';

const configureStore = (context) => {
  console.log(context);
  const middlewares = [];
  const enhancer = composeWithDevTools(applyMiddleware(...middlewares))
  const store = createStore(rootReducer, enhancer);
  return store;
};

const wrapper = createWrapper(configureStore, {debug : true});

export default wrapper;
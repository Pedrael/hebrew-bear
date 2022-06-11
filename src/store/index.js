// here will be Redux store...

import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
//import createSagaMiddleware from "redux-saga";

//const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  binyanim: {
    'pa`al': 'פָּעַל',
    'hiph`il': 'הִפְעִיל',
    'pi`el': 'פִּעֵל',
    'hitpael': 'הִתְפַּעֵל'
  },
  verbs: [
    {root: 'פעל', translate: 'work'}
  ]
}

const ADD_VERB = "ADD_VERB";

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case ADD_VERB: {
      return {...state, verbs: [...state, action.payload] }
    }

    default: return state;
  }
}

export const addVerbAction = (payload) => ({type: ADD_VERB, payload});

// const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composeWithDevTools());
// sagaMiddleware.run(rootSaga);

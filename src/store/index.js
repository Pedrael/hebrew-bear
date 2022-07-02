// here will be Redux store...

import {createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
//import createSagaMiddleware from "redux-saga";

//const sagaMiddleware = createSagaMiddleware();

const defaultState = {
  binyanim: {
    'Pa`al': 'פָּעַל',
    'Hiph`il': 'הִפְעִיל',
    'Pi`el': 'פִּעֵל',
    'Hitpael': 'הִתְפַּעֵל', 
  },
  types: ['Pa`al', 'Hiph`il', 'Pi`el', 'Hitpael', 'Noun'],
  verbs: [
    {root: 'פעל', translate: 'work1', type: 'noun'},
    {root: 'מכר', translate: 'sell2', type: 'Pa`al'},
    {root: 'מכר', translate: 'sell3', type: 'Pi`el'},
    {root: 'מכר', translate: 'sell4', type: 'Hiph`il'},
    {root: 'מכר', translate: 'sell5', type: 'Hitpael'},
    {root: 'פעל', translate: 'work', type: 'Pa`al'}
  ],
  title: ['ROOT', 'TRANSLATE', 'TYPE', 'PRESENT', 'PAST', 'FUTURE']
}

const ADD_VERB = "ADD_VERB";
const REMOVE_VERB = "REMOVE_VERB";

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case ADD_VERB: {
      return {...state, verbs: [...state.verbs, action.payload] }
    }
    case REMOVE_VERB: {
      return {...state, verbs: state.verbs.filter((word, index) => index !== action.payload)}
    }

    default: return state;
  }
}

export const addVerbAction = (payload) => ({type: ADD_VERB, payload});
export const removeVerbAction = (payload) => ({type: REMOVE_VERB, payload});

// const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composeWithDevTools());
// sagaMiddleware.run(rootSaga);

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
  verbs: [
    {root: 'פעל', translate: 'work', type: 'noun'},
    {root: 'פעל', translate: 'work', type: 'notnoun'}
  ],
  types: ['Pa`al', 'Hiph`il', 'Pi`el', 'Hitpael', 'Noun'],
  title: ['ROOT', 'TRANSLATE', 'TYPE', 'PRESENT', 'PAST', 'FUTURE']
}

const ADD_VERB = "ADD_VERB";

const reducer = (state = defaultState, action) => {
  switch(action.type) {

    case ADD_VERB: {
      return {...state, verbs: [...state.verbs, action.payload] }
    }

    default: return state;
  }
}

export const addVerbAction = (payload) => ({type: ADD_VERB, payload});

// const composedEnchancer = compose(applyMiddleware(sagaMiddleware), composeWithDevTools());
// applyMiddleware should be first otherwise sagas won`t work
export const store = createStore(reducer, undefined, composeWithDevTools());
// sagaMiddleware.run(rootSaga);

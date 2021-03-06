import { createStore} from 'redux'

import {composeWithDevTools} from 'redux-devtools-extension'

import reducer from './reducer';

const enhancerCompose=composeWithDevTools()
const store=createStore(reducer,enhancerCompose)
export default store
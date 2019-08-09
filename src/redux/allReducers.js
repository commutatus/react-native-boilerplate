import { combineReducers } from 'redux'
import { sampleReducer } from './reducers/sampleReducer'

export const allReducers = combineReducers({
  sample: sampleReducer
})

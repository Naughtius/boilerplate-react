import { combineReducers } from 'redux'
// Reducers
import changeReducer from './changeReducer'

export default combineReducers({
  change: changeReducer,
})

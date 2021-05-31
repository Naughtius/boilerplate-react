import { CHANGE_ACTIVE } from '../actions/actionTypes'

const initialState = {
  active: false,
}

export default function changeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ACTIVE:
      return {
        ...state,
        active: !state.active,
      }
    default:
      return state
  }
}

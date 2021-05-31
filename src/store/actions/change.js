import { CHANGE_ACTIVE } from './actionTypes'

export function changeActiveHandler(active) {
  return (dispatch) => {
    dispatch(changeActive(active))
  }
}

export function changeActive(active) {
  return {
    type: CHANGE_ACTIVE,
    active,
  }
}

// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const TEXT_CHANGE = 'TEXT_CHANGE'

// ------------------------------------
// Actions
// ------------------------------------
export function increment (value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = () => {
  return (dispatch, getState) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dispatch(increment(getState().counter))
        resolve()
      }, 200)
    })
  }
}

export const onTextChange = (value) => {
  return {
    type: TEXT_CHANGE,
    payload: value
  }
}

export const actions = {
  increment,
  doubleAsync,
  onTextChange
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state, action) => {
    return { counter: state.counter + action.payload, text: state.text }
  },
  [TEXT_CHANGE]: (state, action) => {
    console.log(state);
    return { counter: state.counter, text: action.payload }
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { counter: 0, text: ''}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

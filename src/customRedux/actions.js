export function increment (dispatch, payload) {
  // action携带参数
  dispatch({ type: 'INCREMENT', payload })
}

export function decrement (dispatch) {
  // 异步
  setTimeout(() => {
    dispatch({ type: 'DECREMENT' })
  }, 1000)
}

export function toggleUser (dispatch) {
  dispatch({ type: 'TOGGLE_USER' })
}

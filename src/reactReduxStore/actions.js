export function increment (payload) {
  // action携带参数
  return { type: 'INCREMENT', payload }
}

export function decrement () {
  // 异步
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'DECREMENT',
      })
    }, 1000)
  }
}

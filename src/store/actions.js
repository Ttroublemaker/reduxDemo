export function increment () {
  return { type: 'INCREMENT' }
}

export function decrement () {
  // return { type: 'DECREMENT' }
  // setTimeout(() => {
  //   return { type: 'DECREMENT' }
  // })
  return dispatch => {
    setTimeout(() => {
      dispatch({
        type: 'DECREMENT',
      })
    }, 1000)
  }
}

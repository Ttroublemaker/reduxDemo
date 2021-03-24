// reducer必须是纯函数
function counterReducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      // action携带参数
      return state + action.payload
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default counterReducer
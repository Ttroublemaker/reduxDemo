// reducer必须是纯函数
export const initalState = { count: 0, user: '张三' }
function rootReducer (state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case 'INCREMENT':
      // action携带参数
      return { ...state, count: state.count + action.payload }
    case 'DECREMENT':
      return { ...state, count: state.count - 1 }
    case 'TOGGLE_USER':
      return { ...state, user: state.user === '张三' ? '李四' : '张三' }
    default:
      return state
  }
}

export default rootReducer
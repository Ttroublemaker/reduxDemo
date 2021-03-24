import React, { useContext, useReducer } from 'react'
import logo from './logo.svg';
import * as css from './App.module.scss';
import { Button } from 'antd-mobile';

import { increment, decrement, toggleUser } from './customRedux/actions'
import CustomContext from './customRedux/context'
import rootReducer, { initalState } from "./customRedux/reducer"

function CustomReduxWrapper () {
  const [state, dispatch] = useReducer(rootReducer, initalState);
  return (
    <CustomContext.Provider value={[state, dispatch]}>
      <CustomRedux />
    </CustomContext.Provider>
  )
}

function CustomRedux (props) {
  const [state, dispatch] = useContext(CustomContext)
  return (
    <div className={css.App}>
      <header className={css['App-header']}>
        <img src={logo} className={css['App-logo']} alt="logo" />
        CustomRedux Demo
      </header>
      <p className={css.count}>{state.count}</p>
      <Button onClick={() => increment(dispatch, 2)}>点击+2</Button>
      <Button onClick={() => decrement(dispatch)}>点击-1</Button>
      <p className={css.user}>用户：{state.user}</p>
      <Button onClick={() => toggleUser(dispatch)}>切换用户</Button>
    </div >
  );
}

export default CustomReduxWrapper;

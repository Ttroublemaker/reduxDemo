import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import * as css from './App.module.scss';
import { Button } from 'antd-mobile';

import store from './store/store'
import { increment, decrement } from './store/actions'

function ReduxDemo () {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // 设置count初始值
    setCount(store.getState())
    // 订阅store的变化，并在组件销毁时取消订阅
    const unsubscribe = store.subscribe(() => setCount(store.getState()))
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <div className={css.App}>
      <header className={css['App-header']}>
        <img src={logo} className={css['App-logo']} alt="logo" />
        Redux Demo
      </header>
      <p className={css.count}>
        {count}
      </p>
      <Button onClick={() => store.dispatch(increment())}>点击+1</Button>
      <Button onClick={() => store.dispatch(decrement())}>点击-1</Button>
    </div>
  );
}

export default ReduxDemo;

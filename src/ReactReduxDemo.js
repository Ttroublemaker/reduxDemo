import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import * as css from './App.module.scss';
import { Button } from 'antd-mobile';
import { connect } from 'react-redux' // 将组件与redux连接起来
import * as counterActions from './reactReduxStore/actions'
import { bindActionCreators } from 'redux' // 合并多个actions

function ReactReduxDemo (props) {
  const { counterActions: { increment, decrement }, count } = props
  return (
    <div className={css.App}>
      <header className={css['App-header']}>
        <img src={logo} className={css['App-logo']} alt="logo" />
        ReactRedux Demo
      </header>
      <p className={css.count}>
        {count}
      </p>
      <Button onClick={() => increment(2)}>点击：同步+2</Button>
      <Button onClick={() => decrement()}>点击：异步-1</Button>
    </div>
  );
}
// 将state合入组件的props中
const mapStateToProps = (state) => {
  return {
    count: state
  }
}
// action 较少时的写法
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => { dispatch(increment()) },
//     decrement: () => { dispatch(decrement()) }
//   }
// }

// action较多时的写法
// 将dispatch合入props中
const mapDispatchToProps = (dispatch) => {
  return {
    counterActions: bindActionCreators(counterActions, dispatch)
  }
}

// mapStateToProps, mapDispatchToProps先后顺序不能颠倒
// connect 利用高阶组件，将state及dispatch合入组件中
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxDemo)
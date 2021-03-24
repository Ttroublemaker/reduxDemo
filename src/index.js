import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import ReduxDemo from './ReduxDemo';
// import ReactReduxDemo from './ReactReduxDemo';
// import { Provider } from "react-redux"
// import store from './reactReduxStore/store'

import CustomReduxWrapper from './CustomRedux'

ReactDOM.render(
  <React.StrictMode>
    {/* <ReduxDemo /> */}
    {/* <Provider store={store}>
      <ReactReduxDemo />
    </Provider> */}
    <CustomReduxWrapper />
  </React.StrictMode>,
  document.getElementById('root')
);

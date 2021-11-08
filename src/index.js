import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoContainer from './components/TodoContainer'
import { Provider } from 'react-redux';
import store from './redux-toolkit/store';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <TodoContainer />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

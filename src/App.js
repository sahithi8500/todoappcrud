import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Todo from './components/Todo';


const App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
);

export default App;

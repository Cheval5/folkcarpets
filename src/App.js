import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Admin from './Screens/Admin';
import HomeScreen from './Screens/User';
import './App.scss';

import store from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className='grid-container'>
            <Route path="/admin" component={Admin} />
            <Route path="/" component={HomeScreen} exact />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
};

export default App;
import React, { Component } from 'react';
import store from './store'
import {Provider} from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
        <Router basename={'/pizzahomework'}>
          <Route path={`${process.env.PUBLIC_URL}/`} exact component={Home} />
        </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

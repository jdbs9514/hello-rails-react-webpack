import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from '../components/Greeting';
import store from '../store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <switch>
          <Route exact path="/" component={Greeting} />
        </switch>
      </Router>
    </Provider>
  );
};

export default App;

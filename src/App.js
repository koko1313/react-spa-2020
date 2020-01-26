import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import Profile from './pages/Profile';
import Users from './pages/Users';
import Navbar from './components/Navbar';

// redux
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/index';
import { Provider } from 'react-redux';

import thunk from 'redux-thunk';

// може да подаваме middlewares, които да обработят dispatch-натите данни, преди да отидат в reducer-а
// npm install redux-thunk е такъв middleware
const store = createStore(reducers, applyMiddleware(thunk));

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className="container mt-5">
        {props.children}
      </div>
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <FunctionalComponent count={1} step={2} />
        <FunctionalComponent count={7} step={1} /> */}

        <Switch>
          <Route path="/" exact>
            <Layout>
              <Home />
            </Layout>
          </Route>
          <Route path="/profile" exact>
            <Layout>
              <Profile />
            </Layout>
          </Route>
          <Route path="/users" exact>
            <Layout>
              <Users />
            </Layout>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;

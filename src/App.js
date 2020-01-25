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
import FunctionalComponent from './components/FunctionalComponent';

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
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// bring in our pages
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <Route exact path="/" component={LoginPage} />
      <Route path="/register" component={RegisterPage} />
      <PrivateRoute path="/admin" component={Dashboard} />
    </Router>
  );
}


const isLoggedIn = true;

const PrivateRoute = ({ component: Component, ...rest }) =>(
  <Route
    {...rest}
    render={props =>{
      return isLoggedIn? <Component {...props} />:  <Redirect to="/" />
    }}
  />
)



export default App;

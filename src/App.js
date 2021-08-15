//COMPONENTS
import Landing from './main/Landing'
import Login from './main/Login'
import Register from './main/Register'
import Dashboard from './main/Dashboard'
import NotFound from './main/NotFound'

//CSS
import './main/static/CSS/App.css';

//REACT
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

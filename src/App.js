import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LocationsPage from './pages/LocationsPage';
import OneLocationPage from './pages/OneLocationPage'

function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/locations" component={LocationsPage} />
        <Route path="/admin/locations/id" component={OneLocationPage} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

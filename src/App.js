import React, { useState } from 'react'
import { Navbar, Register, Login, UserPage, NotFound, AuthRoute } from './components/root.index'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import signIn from './utils/auth';
import LocationsPage from './pages/LocationsPage';
import OneLocationPage from './pages/OneLocationPage';
import AdminPage from './pages/AdminPage';
import CreateLocationPage from './pages/CreateLocationPage';
import EditLocationPage from './pages/EditLocationPage';

function App() {
  const [user, setUser] = useState(null);
  const isAuth = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} logout={logout} />
        <Switch>
          <Route exact path="/" component={LocationsPage} />
          <Route exact path="/admin" component={AdminPage} />
          <Route exact path="/admin/create" component={CreateLocationPage} />
          <Route exact path="/admin/edit/:id" component={EditLocationPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route exact path="/locations/:id" component={OneLocationPage} />
          <Route path="/register" component={Register} />
          <Route
            path="/login"
            render={props => (
              <Login isAuth={isAuth} login={login} {...props} />
            )}
          />
          <AuthRoute
            isAuth={isAuth}
            path="/user"
            render={props => <UserPage user={user} {...props} />}
          />          
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

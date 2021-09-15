import React, { useState } from 'react'
import { Navbar, Register, Login, UserPage, AdminPanel, NotFound, AuthRoute } from './components/root.index'
import { LocationsPage, OneLocationPage, CreateLocationPage, EditLocationPage } from './components/locations.index'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import signIn from './utils/auth';
import isAdmin from './utils/admin';

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const isAuth = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  const checkAdmin = ({ email, password }) => setAdmin(isAdmin({ email, password }));

  return (
    <div className="App">
      <Router>
        <Navbar isAuth={isAuth} isAdmin={admin} logout={logout} />
        <Switch>
          <Route exact path="/" component={LocationsPage} />
          <Route exact path="/locations" component={LocationsPage} />
          <Route exact path="/locations/:id" component={OneLocationPage} />
          <Route path="/register" component={Register} />
          <Route
            path="/login"
            render={props => (
              <Login isAuth={isAuth} login={login} checkAdmin={checkAdmin} {...props} />
            )}
          />
          <AuthRoute
            isAuth={isAuth}
            path="/user"
            render={props => <UserPage user={user} {...props} />}
          />
          <Route
            path="/admin"
            render={props => <AdminPanel isAuth={isAuth} isAdmin={admin} user={user} {...props} />} />
          <Route path="/admin/create" component={CreateLocationPage} />
          <Route path="/admin/edit/:id" component={EditLocationPage} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

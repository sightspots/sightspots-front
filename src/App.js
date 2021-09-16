import React, { useState } from 'react'
import { Navbar, Register, Login, UserPage, AdminPanel, NotFound, AuthRoute } from './components/root.index'
import { LocationsPage, OneLocationPage, CreateLocationPage, EditLocationPage } from './components/locations.index'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);
  const isAuth = user != null;

  const logout = () => setUser(null);

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
              <Login isAuth={isAuth} setUser={setUser} setAdmin={setAdmin} {...props} />
            )}
          />
          <AuthRoute
            isAuth={isAuth}
            path="/user"
            render={props => <UserPage user={user} {...props} />}
          />
          <Route
            exact path="/admin"
            render={props => <AdminPanel isAuth={isAuth} isAdmin={admin} user={user} {...props} />} />
          <Route
            exact path="/admin/create"
            render={props => <CreateLocationPage isAuth={isAuth} isAdmin={admin} user={user} {...props} />} />
          <Route
            exact path="/admin/edit/:id"
            render={props => <EditLocationPage isAuth={isAuth} isAdmin={admin} user={user} {...props} />} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import { Navbar, Register, Login, UserPage, AdminPanel, NotFound, AuthRoute, MapPage } from './components/root.index'
import { LocationsPage, OneLocationPage, CreateLocationPage, EditLocationPage  } from './components/locations.index'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Footer from './components/core/Footer';

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
          <Route exact path="/map" component={MapPage} />
          {/* <Route exact path="/locations/:id" component={OneLocationPage} /> */}
          <Route exact path="/locations/:id" render={(props) => (<OneLocationPage user={user} {...props} />)}/>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login
                isAuth={isAuth}
                setUser={setUser}
                setAdmin={setAdmin}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/register"
            render={(props) => (
              <Register isAuth={isAuth} setUser={setUser} {...props} />
            )}
          />
          <AuthRoute
            isAuth={isAuth}
            exact
            path="/user"
            render={(props) => <UserPage user={user} {...props} />}
          />
          <Route
            exact
            path="/admin"
            render={(props) => (
              <AdminPanel isAdmin={admin} user={user} {...props} />
            )}
          />
          <Route
            exact
            path="/admin/create"
            render={(props) => (
              <CreateLocationPage isAdmin={admin} {...props} />
            )}
          />
          <Route
            exact
            path="/admin/edit/:id"
            render={(props) => <EditLocationPage isAdmin={admin} {...props} />}
          />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

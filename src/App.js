import React, { useState } from 'react'
import { Navbar, Home, Register, Login, UserPage, NotFound, AuthRoute } from './components'
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import signIn from './utils/auth';

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
          <Route exact path="/" component={Home} />
          <Route exact path="/locations" component={Home} />
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

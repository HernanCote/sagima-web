import React, { useState } from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import styled from 'styled-components';

import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Customers from './pages/Customers';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AuthIndex from './pages/Auth';

import AuthContext from './context/auth-context';
import Projects from './pages/Projects';



const AppRoot = styled.main`
  margin-top: 5rem;
`;

function App() {
  const [token, setToken] = useState(null);
  const [userId, setUserId] = useState(null);

  const login = (token, userId, expiration) => {
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
  };

  return (
    <BrowserRouter>
      <>
        <AuthContext.Provider value={{ token, userId, login, logout }}>
          <Navbar />
          <AppRoot>
            <Switch>
              <Redirect from="/" to="/home" exact />
              {token && <Redirect from="/auth" to="/home" exact />}
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/customers" component={Customers} />
              <Route path="/portfolio" component={Portfolio} />
              {!token && <Route path="/auth" component={AuthIndex} />}
              {token && <Route path="/projects" component={Projects} />}
              {!token && <Redirect to="/auth" />}
            </Switch>
          </AppRoot>
        </AuthContext.Provider>
      </>
    </BrowserRouter>
  );
}

export default App;

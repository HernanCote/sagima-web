import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Allies from './pages/Allies';
import Services from './pages/Services';

import { GlobalStyle } from './components/Foundation';

import 'react-toastify/dist/ReactToastify.css';

const AppMain = styled.main`
  position: relative;
`;
const AppRoot = styled.div`
  max-width: 1680px;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoot>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <Navbar />
          <AppMain>
            <Switch>
              <Redirect from="/" to="/home" exact />
              <Route path="/home" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/allies" component={Allies} />
              <Route path="/services" component={Services} />
            </Switch>
          </AppMain>
        </AppRoot>
      </BrowserRouter>
    </>
  );
}

export default App;

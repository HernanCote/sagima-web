import React, { useState } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import styled from 'styled-components';

import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Allies from './pages/Allies';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import AuthIndex from './pages/Auth';
import Projects from './pages/Projects';

import AuthContext from './context/auth-context';

const AppMain = styled.main`
	position: relative;
`;
const AppRoot = styled.div`
	max-width: 1680px;
	margin: 0 auto;
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
			<AppRoot>
				<AuthContext.Provider value={{ token, userId, login, logout }}>
					<Navbar />
					<AppMain>
						<Switch>
							<Redirect from="/" to="/home" exact />
							{token && <Redirect from="/auth" to="/home" exact />}
							<Route path="/home" component={Home} />
							<Route path="/about" component={About} />
							<Route path="/contact" component={Contact} />
							<Route path="/allies" component={Allies} />
							<Route path="/portfolio" component={Portfolio} />
							{!token && <Route path="/auth" component={AuthIndex} />}
							{token && <Route path="/projects" component={Projects} />}
							{!token && <Redirect to="/auth" />}
						</Switch>
					</AppMain>
				</AuthContext.Provider>
			</AppRoot>
		</BrowserRouter>
	);
}

export default App;

import React from 'react';
import './App.css';

import {
	BrowserRouter as Router,
	Switch,
	Route,
  } from "react-router-dom";

import QuestionCard from "./QuestionCard"
import Home from "./Home"
import { Grid } from '@material-ui/core';

function App() {
	return (
		<div className="App">
			<header className="App-header">
			<Router>
				<h1 id="title">Not Equivalent</h1>
				<Switch>
					<Route path="/Cherry-Picking">
						<Grid container justify="center">
						<QuestionCard name="Cherry picking" />
						</Grid>
					</Route>
					<Route path="/Post-hoc-propter-hoc">
						<Grid container justify="center">
						<QuestionCard name="Post hoc ergo propter hoc" />
						</Grid>
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
			</header>
		</div>
	);
}

export default App;

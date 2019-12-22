import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/CardList.component';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(response =>
			response.json().then(users => this.setState({ monsters: users }))
		);
	}

	render() {
		return (
			<CardList>
				{this.state.monsters.map(monster => (
					<h2 key={monster.id}>{monster.name}</h2>
				))}
			</CardList>
		);
	}
}
export default App;

import React from 'react';

import './CardList.styles.css';

export const CardList = props => {
	return (
		<div className='card-list'>
			{props.monsters.map(monster => (
				<h2 key={monster.id}>{monster.name}</h2>
			))}
		</div>
	);
};

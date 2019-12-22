import React from 'react';

import './CardList.styles.css';
import { Card } from './Card.component';

export const CardList = props => {
	return (
		<div className='card-list'>
			{props.monsters.map(monster => (
				<Card key={monster.id} monster={monster}>
					{monster.name}
				</Card>
			))}
		</div>
	);
};

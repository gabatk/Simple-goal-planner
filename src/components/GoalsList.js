import React from 'react';
import GoalItem from './GoalItem';

const GoalsList = props => {
	return (
		<div>
			<ul>
				{props.items.map(item => (
					<GoalItem key={item.id} id={item.id}>
						{item.text}
					</GoalItem>
				))}
			</ul>
		</div>
	);
};

export default GoalsList;

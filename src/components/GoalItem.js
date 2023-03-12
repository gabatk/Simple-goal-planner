import React from 'react';
import './GoalItem.css';

const GoalItem = props => {
	return (
		<li className='goal-item' id={props.id}>
			{props.children}
		</li>
	);
};

export default GoalItem;

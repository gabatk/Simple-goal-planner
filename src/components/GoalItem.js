import React from 'react';
import './GoalItem.css';

const GoalItem = props => {
	const deleteItem = () => {
		props.onDelete(props.id);
	};

	return (
		<li className='goal-item' id={props.id} onClick={deleteItem}>
			{props.children}
		</li>
	);
};

export default GoalItem;

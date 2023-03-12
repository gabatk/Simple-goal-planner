import React from 'react';
import './GoalBtn.css';

const GoalBtn = props => {
	return (
		<button className='button' type='submit' onClick={props.submitBtn}>
			Add Goal
		</button>
	);
};

export default GoalBtn;

import React from 'react';
import GoalBtn from './GoalBtn';
import './GoalForm.css';

const GoalForm = () => {
	return (
		<form>
			<div className='form-control'>
				<label className='form-control__label'>Course Goal</label>
				<input
					className='form-control__input'
					type={'text'}
					placeholder='Type your goal'></input>
			</div>
			<GoalBtn />
		</form>
	);
};

export default GoalForm;

import React, { useState } from 'react';
import GoalBtn from './GoalBtn';
import './GoalForm.css';

const GoalForm = () => {
    const [inputValue, setInputValue] = useState('');

const changeInputValue = (event) => {
    setInputValue(event.target.value)    
}

    const submitBtnHandler = (event) => {
        event.preventDefault();
        props.onAddGoal(inputValue);
	}

	return (
		<form>
			<div className='form-control'>
				<label className='form-control__label'>Course Goal</label>
				<input
					className='form-control__input'
					type={'text'}
					placeholder='Type your goal' onChange={changeInputValue}></input>
			</div>
			<GoalBtn submitBtn={submitBtnHandler}/>
		</form>
	);
};

export default GoalForm;

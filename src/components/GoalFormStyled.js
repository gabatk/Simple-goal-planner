import React, { useState } from 'react';
import GoalBtn from './GoalBtn';
import './GoalForm.css';

import styled from 'styled-components';

const FormControl = styled.div`
	margin: 0.5rem 0;

	&__label {
		font-weight: bold;
		display: block;
		margin-bottom: 0.5rem;
	}

	&__input {
		display: block;
		width: 100%;
		border: 1px solid #ccc;
		font: inherit;
		line-height: 1.5rem;
		padding: 0 0.25rem;
	}

	&__input:focus {
		outline: none;
		background: #fad0ec;
		border-color: #8b005d;
	}

	&.invalid input {
		border-color: red;
		background-color: rgb(241, 188, 188);
	}

	&.invalid label {
		color: red;
	}
`;

const GoalForm = props => {
	const [inputValue, setInputValue] = useState('');
	const [isValid, setIsValid] = useState(true);

	const changeInputValue = event => {
		if (event.target.value.trim().length > 0) {
			setIsValid(true);
		}
		setInputValue(event.target.value);
	};

	const submitBtnHandler = event => {
		event.preventDefault();
		if (inputValue.trim().length === 0) {
			setIsValid(false);
			return;
		}
		props.onAddGoal(inputValue);
	};

	return (
		<form>
			<FormControl className={!isValid && 'invalid'}>
				<label className='form-control__label'>Course Goal</label>
				<input
					className='form-control__input'
					type={'text'}
					placeholder='Type your goal'
					onChange={changeInputValue}></input>
			</FormControl>
			<GoalBtn submitBtn={submitBtnHandler} />
		</form>
	);
};

export default GoalForm;

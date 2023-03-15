import React from 'react';
// import './GoalBtn.css';
import styles from './GoalBtn.module.css';

const GoalBtn = props => {
	return (
		// <button className='button' type='submit' onClick={props.submitBtn}>
		/* Media queries dla CSS Modules (poniżej) */
		<button type='submit' className={styles.button} onClick={props.submitBtn}>
			Add Goal
		</button>
	);
};

export default GoalBtn;

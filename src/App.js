import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalsList from './components/GoalsList';
import './App.css';

const App = () => {
	const [goals, setGoals] = useState([
		{ text: 'Feed the dog', id: 'e1' },
		{ text: 'Pay bills', id: 'e2' },
		{ text: 'Send the package', id: 'e3' },
	]);

	const addGoal = insertedValue => {
		setGoals(prevGoals => {
			const newItem = {
				text: insertedValue,
				id: Math.floor(Math.random() * 100).toString(),
			};
			const updatedGoals = [...prevGoals, newItem];
			return updatedGoals;
		});
	};

	const deleteGoalHandler = elementToDelete => {
		setGoals(prevGoals => {
			return prevGoals.filter(element => element.id !== elementToDelete);
		});
	};

	return (
		<div>
			<section id='goal-form'>
				<GoalForm onAddGoal={addGoal} />
			</section>
			<section id='goals'>
				<GoalsList items={goals} onDeleteItem={deleteGoalHandler} />
			</section>
		</div>
	);
};

export default App;

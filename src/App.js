import React, { useState } from 'react';
import GoalForm from './components/GoalForm';
import GoalsList from './components/GoalsList';
import './App.css';

const App = () => {
	const [goals, setGoals] = useState([
		{ text: 'Feed the dog', id: 1 },
		{ text: 'Pay bills', id: 2 },
		{ text: 'Send the package', id: 3 },
	]);
	return (
		<div>
			<section id='goal-form'>
				<GoalForm />
			</section>
			<section id='goals'>
				<GoalsList />
			</section>
		</div>
	);
};

export default App;

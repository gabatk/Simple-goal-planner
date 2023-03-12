import React from 'react';
import GoalForm from './components/GoalForm';
import GoalsList from './components/GoalsList';
import './App.css';

const App = () => {
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

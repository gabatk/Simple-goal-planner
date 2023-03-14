import React from 'react';
import styles from './Button2.module.css'; //Sposób importu styli przy użyciu CSS modules

const Button = props => {
	return (
		<button type={props.type} className={styles.button} onClick={props.onClick}>
			{props.children}
		</button>
	);
};

export default Button;

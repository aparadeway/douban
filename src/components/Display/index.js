import React from 'react';
import './style.css';
import Title from './components/Title';
import Sliders from '../../common/Sliders';
import WorkSlider from './components/WorkSlider';

const Display = (props) => {
	const { icon, category, description, works } = props.displayInfo;

	return (
		<div className="display-container">
			<Title
				icon={icon}
				category={category}
				description={description} 
			/>
			<WorkSlider data={works} settings={props.settings} />
		</div>
	);
}

export default Display;
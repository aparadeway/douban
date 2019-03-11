import React from 'react';
import './style.css';
import SliderWrapper from './components/SliderWrapper';

const Sliders = (props) => {
	const { settings, data } = props;
	
	return (
		<div className="sliders-container">
			<SliderWrapper settings={settings} data={data} />
		</div>
	);
};

export default Sliders;
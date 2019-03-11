import React from 'react';
import './style.css';
import WorkItem from './components/WorkItem';
import Sliders from '../../../../common/Sliders';


const WorkSlider = (props) => {
	const { data, settings } = props;

	const datas = data.map((item) => {
		return <WorkItem info={item} key={item.id} mode={settings.mode} />
	})

	return (
		<div>
			<Sliders settings={settings} data={datas} />
		</div>
	)
}

export default WorkSlider;
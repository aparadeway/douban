import React from 'react';

const WorkItem = (props) => {
	const { info, mode } = props;

	return (
		<div className={mode === 'row' ?  'work-item-warpper work-item-row' : 'work-item-warpper work-item-column'}>
			<div className="work-item-pic">
				<img className="work-item-pic-img" src={info.pic} alt={info.title} />
			</div>
			<div className="work-item-info">
				<h4 className="work-item-title">{info.title}</h4>
				<div className="work-item-author">{info.author}</div>
				<div className="work-item-resume multi-line-ellipsis">
					{info.resume}
				</div>
				<div className="work-item-extra">
					<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10">
						<path fill="#fa595f" d="M6.688 3.125l3.37.694-2.345 2.619L8.14 10 5.03 8.475 1.923 10l.428-3.563L0 3.82l3.37-.694L5.028 0z"></path>
					</svg>
					<span className="work-item-score">{info.score}</span>
					<span className="separator"></span>
					<span className="work-item-category">{info.type}</span>
				</div>
			</div> 
		</div>
	);
}

export default WorkItem;
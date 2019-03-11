import React from 'react';
import './style.css';

const Title = (props) => {
	const { icon, category, description } = props;
console.log(icon)
	return (
		<div className="title-container">
			<h2 className="title-content">
				{icon ? 
				<span className="title-icon">
					<img src={icon} />	
				</span> : null}
				<span className="title-text">
					{category}
				</span>
				<span className="title-description">
					{description}
				</span>
			</h2>
			<div className="btn-more">查看更多</div>
		</div>
	);
}

export default Title;
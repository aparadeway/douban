import React from 'react';

const SliderItem = (props) => {
	const { item, size, numsPerSlide } = props;
	return (
		<div 
			className="slider-item-wrapper" 
			style={{width: size + 'px'}}
		>
			{item.map((i, idx) => (
				<div 
					key={idx}
					style={{display: 'inline-block', width: size / numsPerSlide + 'px'}}
				>
					{i}
				</div>
			))}
		</div>
	);
}

export default SliderItem;
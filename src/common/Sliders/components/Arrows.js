import React, { Fragment } from 'react';

const Arrows = (props) => {
	const { prev, next } = props;

	return (
		<Fragment>
			<div className="arrow arrow-prev" onClick={prev}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14">
					<path d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
				</svg>
			</div>
			<div className="arrow arrow-next" onClick={next}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6 11" width="7" height="14" style={{transform: 'scale(-1)'}}>
					<path d="M4.894 10.986l1.1-.92-4.096-4.573L5.993.92 4.893 0 0 5.473l4.894 5.513z"></path>
				</svg>
			</div>
		</Fragment>
	);
}

export default Arrows;
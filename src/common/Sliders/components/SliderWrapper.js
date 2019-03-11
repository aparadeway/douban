import React, { Fragment, Component } from 'react';
import Arrows from './Arrows';
import SliderItem from './SliderItem';

class SliderWrapper extends Component {
	constructor(props) {
		super(props);

		const { numsPerSlide, size } = props.settings;
		const { data } = props;

		this.state = {
			size: 0, //视口尺寸
			numsPerSlide: 0, //每张幻灯片包含的项目数量
			trans: true, //是否应用过渡效果
			translate: 0, //幻灯片组偏移量
			index: 1, //当前幻灯片
			counts: 1, //幻灯片总数
			data: [], //幻灯片内容组
			sliders: [] //幻灯片组
		};

		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.transitionend = this.transitionend.bind(this);
	}

	static getDerivedStateFromProps(nextProps, prevState) {
		const { settings, data } = nextProps;
		const { size, numsPerSlide } = settings;
		var newState = {};
		// 数据变动时生成新的幻灯片组
		if(data !== prevState.data) {
			var sliders = createGroups(settings, data);

			newState = {
				sliders,
				size,
				numsPerSlide,
				data,
				counts: sliders.length,
				translate: sliders.length > 1 ? -size : 0
			};
		}

		return newState;
	}

	render() {
		const { size, counts, translate, trans, sliders, numsPerSlide } = this.state;
		return (
			<Fragment>
				{sliders.length > 1 ? <Arrows prev={this.prev} next={this.next} /> : null}
				<div className="slider-wrapper" style={{width: size + 'px'}}>
					<div 
						style={{
							width: counts * size + 'px',
							transform: 'translate3d(' + translate + 'px, 0, 0)'
						}}
						className={trans ? 'trans-on' : 'trans-off'}
						onTransitionEnd={this.transitionend}
					>
					{sliders}
					</div>
				</div>
			</Fragment>
		)

	}

	// 修改过渡
	transitionend() {
		const { index, counts, size } = this.state;

		if(index === counts - 1) {
			this.setState({
				index: 1,
				translate: -size,
				trans: false
			});
	  }
	  else if(index === 0) {
	  	const temp = counts - 2;
			this.setState({
				index: temp,
				translate: - (temp * size),
				trans: false
			});
	  }
	}

	prev() {
		const { translate, size, index, trans, countes } = this.state;
		console.log(translate,size)
		this.setState({
			trans: index !== countes - 1 ? true : trans,
			translate: translate + size,
			index: index - 1
		})
	}

	next() {
		const { translate, size, index, trans, countes } = this.state;

		this.setState({
			trans: index !== countes - 1 ? true : trans,
			translate: translate - size,
			index: index + 1
		})
	}
}

// 根据元素数量生成幻灯片
function createGroups(settings, data) {
	const { numsPerSlide, size } = settings;
	
	var groups = [];//幻灯片组
	var pointer = 0;//指针
	while(data[pointer]) {
		groups.push(data.slice(pointer, pointer + numsPerSlide));
		pointer += numsPerSlide;
	}

	const len = groups.length; //幻灯片数量
	var translate = len > 1 ? - {size} : 0;
	if(len > 1) {
		groups = [groups[len - 1]].concat(groups, [groups[0]]);
	}

	return renderSliders(groups, size, numsPerSlide);
}

// 渲染每张幻灯片的内容
function renderSliders(groups, size, numsPerSlide) {
	return groups.map((item, index) => (
		<SliderItem 
			key={index}
			item={item} 
			size={size} 
			numsPerSlide={numsPerSlide} 
		/>
	));
}

export default SliderWrapper
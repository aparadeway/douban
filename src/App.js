import React from 'react';
import Display from './components/Display';
import { connect } from 'react-redux';

const settings1 = {
	size: 1098,
	numsPerSlide: 5,
	mode: 'column'
}

const settings2 = {
	size: 1098,
	numsPerSlide: 3,
	mode: 'row'
}

const App = (props) => {
  return (
    <div className="App">
    	<Display displayInfo={props.displayInfo} settings={settings1} />
    	<Display displayInfo={props.displayInfo} settings={settings2} />
    </div>
  );
}

const mapStateToProps = (state) => {
	return {
		displayInfo: state 
	}
}

export default connect(mapStateToProps)(App);

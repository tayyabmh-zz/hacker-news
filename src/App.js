import React, { Component } from 'react';
import NavComponent from './components/Navigation';
import Body from './components/body.js';






export default class App extends Component {
	
	render() {
    	return (
			<div>
				<NavComponent />
				<Body />
			</div>
   		);
  }
}






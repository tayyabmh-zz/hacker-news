import React from 'react';
import FinalBrowser from '../containers/browserContainer.js';
import FinalNewsList from '../containers/newsListContainer.js';
import './body.css';

const Body = () => (
	<div id='container'>
		<FinalNewsList />
		<FinalBrowser />
	</div>
);

export default Body;
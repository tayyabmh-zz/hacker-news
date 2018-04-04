import React from 'react';
import './browserFrame.css';



const Browser = ({url}) => (

	<div className="browser-content">
		<iframe 
			src={url} 
			title='browser'
			frameBorder='0'
		/>
	</div>
);


export default Browser;
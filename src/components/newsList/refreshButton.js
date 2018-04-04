import React from 'react';
import './list_component.css'



const RefreshButton = ({onRefreshClick}) => (
	<div className='refresh-div'>
		<button className="refresh" onClick={() => onRefreshClick()}>
			Refresh
		</button>
	</div>
	);


export default RefreshButton;
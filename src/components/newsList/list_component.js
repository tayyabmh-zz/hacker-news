import React from 'react';
import './list_component.css';
import { BarLoader } from 'react-spinners';
import FinalRefreshButton from '../../containers/refreshContainer.js';


const ListComponent = ({posts, onLinkClick, loading}) => (
	<div className="list-container">
		{posts.map(function(content){
			return (
				<div key={content.id} className='list-content' href={content.url}> 
					<h4>
						<p href={content.url} onClick={() => onLinkClick(content.id, content.url)}>{content.id}. {content.title} </p>
					</h4>
					<p>
						{content.score} by person 4 hours ago | hide | 300 comments
					</p>
				</div>
			);
		})}
		<div className='spinner'>
			<BarLoader
				color={"#3FEDB9"}
				loading={loading}
			/>
		</div>
		<FinalRefreshButton />
	</div>
	);

export default ListComponent;


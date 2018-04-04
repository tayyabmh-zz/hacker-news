import React from 'react';
import { CircleLoader } from 'react-spinners';


const Spinner = () => (
	<div>
		<CircleLoader
			color={"#000"}
			loading={true}
		/>
	</div>

);

export default Spinner;
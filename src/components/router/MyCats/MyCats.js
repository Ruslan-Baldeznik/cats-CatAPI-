import React from 'react';
import "./MyCats.scss"
import { useSelector } from 'react-redux';
import Cat from '../../Cat/Cat';


const MyCats = (props) => {
	const myCats = useSelector(state=>state.myCats)
	return (
		<div className='my-cats'>
			{myCats.map(cat=>{
					return (
						<Cat cat={cat} key={cat.id + Math.random()}/>
					)
				})}
		</div>
	);
};

export default MyCats;
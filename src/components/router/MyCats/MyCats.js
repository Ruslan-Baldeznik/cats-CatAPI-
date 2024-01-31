import React from 'react';
import "./MyCats.scss"
import { useSelector } from 'react-redux';
import Cat from '../../Cat/Cat';


const MyCats = (props) => {
	const myCats = useSelector(state=>state.myCats)
	return (
		<div className='my-cats'>
			<div className="my-cats__container">
				{myCats.map(cat=>{
						return (
							<Cat cat={cat} key={cat.id + Math.random()}/>
						)
				})}
			</div>
		</div>
	);
};

export default MyCats;
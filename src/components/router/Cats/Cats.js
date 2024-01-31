import React from 'react';
import "./Cats.scss"
import { useDispatch, useSelector } from 'react-redux';
import Cat from '../../Cat/Cat';
import InfiniteScroll from 'react-infinite-scroll-component';
import { addCatsToTheStoreAction } from '../../../store';
// [{
// 	"id":"ebv",
// 	"url":"https://cdn2.thecatapi.com/images/ebv.jpg",
// 	"width":176,"height":540,
// 	"breeds":[],
// 	"favourite":{}
// }]

// [{
// 	"id":"0XYvRd7oD",
// 	"width":1204,"height":1445,
// 	"url":"https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
// 	"breeds":[{
// 		"weight":{"imperial":"7  -  10","metric":"3 - 5"},
// 		"id":"abys","name":"Abyssinian",
// 		"temperament":"Active, Energetic, Independent, Intelligent, Gentle",
// 		"origin":"Egypt",
// 		"country_codes":"EG",
// 		"country_code":"EG",
// 		"life_span":"14 - 15",
// 		"wikipedia_url":"https://en.wikipedia.org/wiki/Abyssinian_(cat)"
// }]

const Cats = (props) => {
	const cats = useSelector(state=>state.cats)
	const dispatch = useDispatch();

	const [hasMore, setHasMore] = React.useState(true);
	const [chunkNumber, setChunkNumber] = React.useState(1);

	const headers = new Headers({
		"Content-Type": "application/json",
		"x-api-key": "live_g27iJiQigFj7ZkJVMdrLqhWoI1PPxn0cQVQsmT1leeaLCQb0M7swly6AUHqa1w9n"
	}); 
	const handleAddData = async () =>{
		const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=30", requestOptions)
		const data = await response.json();
		dispatch(addCatsToTheStoreAction(data));
		setChunkNumber(chunkNumber + 1);
		if (chunkNumber >= 100)
			setHasMore(false);
	}
	const requestOptions = {
		method: 'GET',
		headers,
		redirect: 'follow'
	};
	return (
		<React.Fragment>
		<div className='all-cats'>
			<div className="all-cats__container">
				<InfiniteScroll 
					dataLength={cats.length}
					next={handleAddData}
					hasMore={hasMore}
				/>
				{cats.map(cat=>{
					return (
						<Cat cat={cat} key={cat.id + Math.random()}/>
					)
				})}
			</div>
		</div>
		</React.Fragment>
	);
};

export default Cats;
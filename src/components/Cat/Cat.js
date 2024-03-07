import React, { useEffect, useRef } from 'react';
import "./Cat.scss"
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
import { addMyCatToTheStoreAction, deleteMyCatFromTheStoreAction } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
const Cat = (props) => {

	const catLike = useRef();
	const dispatch = useDispatch();
	const myCats = useSelector(state=>state.myCats)
	const checkCat = myCats.find(cat=>{
		return cat.id === props.cat.id
	})
	const buttonRef = useRef()
	const handleToggle = () => {
		if (checkCat)
			dispatch(deleteMyCatFromTheStoreAction(props.cat))
		else
			dispatch(addMyCatToTheStoreAction(props.cat))
	}
	useEffect(()=>{
		if (checkCat) {
			buttonRef.current.classList.add("added-to-my-cats")
			catLike.current.classList.add("liked")
		} else {
			buttonRef.current.classList.remove("added-to-my-cats")
			catLike.current.classList.remove("liked")
		}
	})
	return (
		<div ref={catLike} className='cat'>
			<div className="cat-container">
				<img src={props.cat.url} alt="" className="cat-img" />
				<button ref={buttonRef} onClick={handleToggle} className="add-to-my-cats"></button>
			</div>
		</div>
	);
};

export default Cat;
import { legacy_createStore as createStore, combineReducers } from "redux";

//MYCATS:
export const ADD_MY_CAT_TO_THE_STORE = "ADD_MY_CAT_TO_THE_STORE"
export const DELETE_MY_CAT_FROM_THE_STORE = "DELETE_MY_CAT_FROM_THE_STORE"

export function addMyCatToTheStoreAction(kitten) {
	return ({
		type: ADD_MY_CAT_TO_THE_STORE,
		kitten
	})
}

export function deleteMyCatFromTheStoreAction(kitten) {
	return ({
		type: DELETE_MY_CAT_FROM_THE_STORE,
		kitten
	})
}

export function myCatsReducer(state = [], action) {
	switch (action.type) {
		case ADD_MY_CAT_TO_THE_STORE :
			return	[...state, action.kitten]
		case DELETE_MY_CAT_FROM_THE_STORE :
			return state.filter(cat=>{
				if (action.kitten.id === cat.id)
					return false;
				return true
			})
	default :
		return state
	}
}


//CATS:
export const ADD_CATS_TO_THE_STORE = "ADD_CATS_TO_THE_STORE"

export function addCatsToTheStoreAction(kittens) {
	return ({
		type: ADD_CATS_TO_THE_STORE,
		kittens
	})
}

export function catsReducer(state = [], action) {
	switch (action.type) {
		case ADD_CATS_TO_THE_STORE :
			return	[...state, ...action.kittens]
	default :
		return state
	}
}



export const store = createStore(combineReducers({
		myCats : myCatsReducer,
		cats : catsReducer
}));

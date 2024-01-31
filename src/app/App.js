import './App.scss';
import Header from '../components/Header/Header';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Cats from '../components/router/Cats/Cats';
import MyCats from '../components/router/MyCats/MyCats';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCatsToTheStoreAction } from '../store';

function App() {
	const dispatch = useDispatch();
  const [catsScroll, setCatsScroll] = useState(0);
  const [myCatsScroll, setMyCatsScroll] = useState(0);

  React.useEffect(()=>{
		const headers = new Headers({
			"Content-Type": "application/json",
			"x-api-key": "live_g27iJiQigFj7ZkJVMdrLqhWoI1PPxn0cQVQsmT1leeaLCQb0M7swly6AUHqa1w9n"
		}); 
		const handleInitializeData = async () =>{
			const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=30", requestOptions)
			const data = await response.json();
			dispatch(addCatsToTheStoreAction(data));
		}
		const requestOptions = {
			method: 'GET',
			headers,
			redirect: 'follow'
		};
		handleInitializeData();
	})
  return (
    <div className="App">
      <BrowserRouter>
        <Header catsScroll={catsScroll} myCatsScroll={myCatsScroll} setScroll={setCatsScroll} setMyScroll={setMyCatsScroll}/>
        <Routes>
          <Route path="/" element={<Cats scroll={catsScroll} setScroll={setCatsScroll}/>}/>
          <Route path="/my-cats" element={<MyCats scroll={myCatsScroll} setScroll={setMyCatsScroll}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

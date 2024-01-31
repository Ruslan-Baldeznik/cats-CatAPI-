import React from 'react';
import "./Header.scss"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = (props) => {
	const loaction = useLocation();
	const saveMyCatsScroll = () => {
		props.setMyScroll(window.scrollY);
		console.log(props.myCatsScroll);
	}
	const saveCatsScroll = () => {
		props.setScroll(window.scrollY);
		console.log(props.catsScroll);
	}
	React.useEffect(()=>{
		const allCats = document.querySelector(".header-button_cats")
		const myCats = document.querySelector(".header-button_my-cats")

		if(loaction.pathname === "/my-cats") {
			window.scrollTo(0, props.MyCatsScroll);
			myCats.classList.add("header-button_active")
			allCats.classList.remove("header-button_active")
		}
		if(loaction.pathname === "/") {
			window.scrollTo(0, props.catsScroll);
			allCats.classList.add("header-button_active")
			myCats.classList.remove("header-button_active")
		}
	}, [loaction.pathname, props])
	return (
		<header className='header'>
			<div className="header-container">
				<Link to="/" onClick={saveMyCatsScroll} className="header-button_cats">Все Котики</Link>
				<Link to="/my-cats" onClick={saveCatsScroll} className="header-button_my-cats">Любимые Котики</Link>
			</div>
		</header>
	);
};

export default Header;
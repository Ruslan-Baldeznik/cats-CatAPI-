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
		if(loaction.pathname === "/my-cats")
			window.scrollTo(0, props.MyCatsScroll);
		if(loaction.pathname === "/")
			window.scrollTo(0, props.catsScroll);
	}, [loaction.pathname, props])
	return (
		<header className='header'>
			<div className="header-container">
				<Link to="/" onClick={saveMyCatsScroll} className="header-button">Все Котики</Link>
				<Link to="/my-cats" onClick={saveCatsScroll} className="header-button">Любимые Котики</Link>
			</div>
		</header>
	);
};

export default Header;
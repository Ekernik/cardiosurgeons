import React from 'react';

import logo from '../assets/images/logo_1.png';

function Header() {
    return(
        <header className='header'>
            <div className='container'>
                <nav className='header__nav'>
                    <img className='logo' src={logo} alt=''/>
                    <ul className='header__menu'>
                        <li><a href="#landing-greeting" className='menu__item'>главная</a></li>
                        <li><a href="#landing-about-us" className='menu__item'>о нас</a></li>
                        <li><a href="#landing-our-team" className='menu__item'>команда</a></li>
                        <li><a href="#landing-services" className='menu__item'>услуги</a></li>
                        <li><a href="#landing-contacts" className='menu__item'>контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
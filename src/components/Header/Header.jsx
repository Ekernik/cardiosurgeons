import React from 'react';
import './scroll.scss';
import './index.scss';
import './scroll.js';

import logo from '../../assets/images/logo_1.png';
import listenToScroll from './scroll.js';

function Header() {
    let handleClick = () => {
        const headerBurger = document.querySelector('.header__menu-burger');
        const headerMenu = document.querySelector('.header__burger-nav');
        const body = document.querySelector('body');
        body.classList.toggle('fixed-page');
        headerMenu.classList.toggle('menu--opened');
        headerBurger.classList.toggle('menu--opened');
    };

    return(
        <header className='header' onLoad={listenToScroll}>
            <div className='container header__container'>
                <nav className='header__navbar'>
                    <div className='header__brand'>
                        <img className='brand__logo' role='presentation' src={logo} alt=''/>
                        <p className='brand__name'>Центр кардиохирургии и интервенционной кардиологии</p>
                    </div>
                    <ul className='header__menu'>
                        <li className='menu__item'><a href="#landing-greeting" className='menu__link'>главная</a></li>
                        <li className='menu__item'><a href="#landing-about-us" className='menu__link'>о нас</a></li>
                        <li className='menu__item'><a href="#landing-services" className='menu__link'>услуги</a></li>
                        <li className='menu__item'><a href="#landing-our-team" className='menu__link'>команда</a></li>
                        <li className='menu__item'><a href="#landing-contacts" className='menu__link'>контакты</a></li>
                    </ul>
                </nav>
                <div onClick={handleClick} className='header__burger'>
                    <div className="header__menu-burger">
                        <span></span>
                    </div>
                </div>
                <nav className='header__burger-nav'>
                    <ul className='burger__menu'>
                        <li className='menu__item'><a href="#landing-greeting" className='menu__link'>главная</a></li>
                        <li className='menu__item'><a href="#landing-about-us" className='menu__link'>о нас</a></li>
                        <li className='menu__item'><a href="#landing-services" className='menu__link'>услуги</a></li>
                        <li className='menu__item'><a href="#landing-our-team" className='menu__link'>команда</a></li>
                        <li className='menu__item'><a href="#landing-contacts" className='menu__link'>контакты</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;
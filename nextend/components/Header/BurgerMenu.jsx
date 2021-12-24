import LinkItem from './LinkItem';

const handleClick = () => {
  const headerBurger = document.querySelector('.header__menu-burger');
  const headerMenu = document.querySelector('.header__burger-nav');
  const body = document.querySelector('body');
  body.classList.toggle('fixed-page');
  headerMenu.classList.toggle('menu--opened');
  headerBurger.classList.toggle('menu--opened');
};

const handleClose = () => {
  const body = document.querySelector('body');
  body.classList.remove('fixed-page');
};

const handleScroll = () => {
  const menu = document.querySelector('.burger__menu');
  menu.classList.toggle('menu__scroll-down');
  menu.classList.toggle('menu__scroll-up');
}

export default function BurgerMenu() {
  return (
    <>
      <div onClick={handleClick} className="header__burger">
        <div className="header__menu-burger">
          <span></span>
        </div>
      </div>
      <nav className="header__burger-nav">
        <ul className="burger__menu menu__scroll-up">
          <LinkItem click={handleClose} link="/" text="Главная" />
          <p className='menu__link' onClick={handleScroll}>О нас</p>
          <LinkItem click={handleClose} link="/treatment" text="Лечение" />
          <LinkItem
            click={handleClose}
            link="/diagnostics"
            text="Диагностика"
          />
          <LinkItem click={handleClose} link="/team" text="Команда" />
          <LinkItem click={handleClose} link="/contacts" text="Контакты" />
          <LinkItem click={handleClose} link="/feedback" text="Отзывы" />
        </ul>
        <ul className="burger__menu">
          <p className='menu__link' onClick={handleScroll}>Назад</p>
          <LinkItem click={handleClose} link="/about-us" text="О клинике" />
          <LinkItem
            click={handleClose}
            link="/structure"
            text="Структура центра"
          />
          <LinkItem
            click={handleClose}
            link="/regions"
            text="Приемы врачей в регионах"
          />
          <LinkItem click={handleClose} link="/feedback" text="Отзывы" />
        </ul>
      </nav>
    </>
  );
}

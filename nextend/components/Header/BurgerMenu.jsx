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

export default function BurgerMenu() {
  return (
    <>
      <div onClick={handleClick} className="header__burger">
        <div className="header__menu-burger">
          <span></span>
        </div>
      </div>
      <nav className="header__burger-nav">
        <ul className="burger__menu">
          <LinkItem click={handleClose} link="/" text="Главная" />
          <LinkItem click={handleClose} link="/about-us" text="О клинике" />
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
      </nav>
    </>
  );
}

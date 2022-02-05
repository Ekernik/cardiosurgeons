import LinkItem from './LinkItem';

const handleClick = () => {
  const headerBurger = document.querySelector('.header__menu-burger');
  const headerMenu = document.querySelector('.header__burger-nav');
  const menus = document.querySelectorAll('.burger__menu');
  console.log(headerMenu.classList.contains('menu--opened'));
  if (headerMenu.classList.contains('menu--opened')) {
    menus[0].classList.remove('active');
    menus[1].classList.remove('active');
    menus[2].classList.remove('active');
  }
  if (!headerMenu.classList.contains('menu--opened')) {
    menus[0].classList.add('active');
  }
  const body = document.querySelector('body');
  body.classList.toggle('fixed-page');
  headerBurger.classList.toggle('menu--opened');
  headerMenu.classList.toggle('menu--opened');
};

const handleClose = () => {
  const body = document.querySelector('body');
  body.classList.remove('fixed-page');
};

const handleScroll = position => {
  const menus = document.querySelectorAll('.burger__menu');
  switch (position) {
    case 'top':
      menus[0].classList.add('active');
      menus[1].classList.remove('active');
      menus[2].classList.remove('active');
      break;

    case 'middle':
      menus[0].classList.remove('active');
      menus[1].classList.add('active');
      menus[2].classList.remove('active');
      break;

    case 'bottom':
      menus[0].classList.remove('active');
      menus[1].classList.remove('active');
      menus[2].classList.add('active');
      break;

    default:
      break;
  }
};

export default function BurgerMenu() {
  return (
    <>
      <div onClick={handleClick} className='header__burger'>
        <div className='header__menu-burger'>
          <span></span>
        </div>
      </div>
      <nav className='header__burger-nav'>
        <ul className='burger__menu'>
          <LinkItem click={handleClose} link='/' text='Главная' />
          <p className='menu__link' onClick={() => handleScroll('middle')}>
            О нас
          </p>
          <LinkItem click={handleClose} link='/treatment' text='Операции' />
          <LinkItem
            click={handleClose}
            link='/diagnostics'
            text='Диагностика'
          />
          <LinkItem click={handleClose} link='/team' text='Команда' />
          <LinkItem click={handleClose} link='/contacts' text='Контакты' />
        </ul>
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('top')}>
            Назад
          </p>
          <LinkItem click={handleClose} link='/about-us' text='О клинике' />
          <LinkItem
            click={handleClose}
            link='/structure'
            text='Структура центра'
          />
          <LinkItem
            click={handleClose}
            link='/regions'
            text='Приемы врачей в регионах'
          />
          <p className='menu__link' onClick={() => handleScroll('bottom')}>
            Информация для пациентов
          </p>
          <LinkItem click={handleClose} link='/feedback' text='Отзывы' />
        </ul>
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('middle')}>
            Назад
          </p>
          <LinkItem
            click={handleClose}
            link='/besplatnoe-lechenie-po-kvotam'
            text='Бесплатное лечение по квотам'
          />
          <LinkItem
            click={handleClose}
            link='/operacii-na-serdce'
            text='Операции на сердце'
          />
          <LinkItem
            click={handleClose}
            link='/kak-zapisatsya-k-kardiohirurgu'
            text='Как записаться к кардиохирургу'
          />
          <LinkItem
            click={handleClose}
            link='/protezirovanie-klapanov-chto-nuzhno-znat'
            text='Протезирование клапанов: что нужно знать'
          />
        </ul>
      </nav>
    </>
  );
}

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
  menus.forEach(menu => menu.classList.remove('active'));
  if (position === 'top') menus[0].classList.add('active');
  if (position === 'middle') menus[1].classList.add('active');
  if (position === 'bottom') menus[2].classList.add('active');
  if (position === 'diseases') menus[3].classList.add('active');
  if (position === 'heart-diseases') menus[4].classList.add('active');
  if (position === 'heart-rythm') menus[5].classList.add('active');
  if (position === 'diagnostics') menus[6].classList.add('active');
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
        {/* Главная */}
        <ul className='burger__menu'>
          <LinkItem click={handleClose} link='/' text='Главная' />
          <p className='menu__link' onClick={() => handleScroll('middle')}>
            О нас
          </p>
          <p className='menu__link' onClick={() => handleScroll('diseases')}>
            Заболевания
          </p>
          <p className='menu__link' onClick={() => handleScroll('diagnostics')}>
            Диагностика
          </p>
          <LinkItem click={handleClose} link='/treatment' text='Операции' />
          <LinkItem click={handleClose} link='/team' text='Команда' />
          <LinkItem click={handleClose} link='/contacts' text='Контакты' />
        </ul>

        {/* О нас */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('top')}>
            <b>Назад</b>
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

        {/* Информация для пациента */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('middle')}>
            <b>Назад</b>
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

        {/* Заболевания */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('top')}>
            <b>Назад</b>
          </p>
          <p
            className='menu__link'
            onClick={() => handleScroll('heart-diseases')}
          >
            Болезни сердца
          </p>
          <p className='menu__link' onClick={() => handleScroll('heart-rythm')}>
            Нарушения ритма сердца
          </p>
        </ul>

        {/* Болезни сердца */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('diseases')}>
            <b>Назад</b>
          </p>
          <LinkItem
            click={handleClose}
            link='/diagnostics/ateroskleros'
            text='Атеросклероз'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/ishemicheskaya-bolezn-serdca'
            text='Ишемическая болезнь сердца (ИБС)'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/stenoz-vnutrennei-sonnoi-arterii'
            text='Стеноз внутренней сонной артерии'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/anevrizma-i-rassloenie-aorti'
            text='Аневризма и расслоение аорты'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/poroki-serdca'
            text='Пороки сердца'
          />
        </ul>

        {/* Нарушения ритма сердца */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('diseases')}>
            <b>Назад</b>
          </p>
          <LinkItem
            click={handleClose}
            link='/diseases/sindrom-wpw'
            text='Синдром Вольфа–Паркинсона–Уайта'
            style={{ textAlign: 'center' }}
          />
          <LinkItem
            click={handleClose}
            link='/diseases/avurt'
            text='Атриовентрикулярная узловая реципрокная тахикардия (АВУРТ)'
            style={{ textAlign: 'center' }}
          />
          <LinkItem
            click={handleClose}
            link='/diseases/fibrilyaciya-predcerdiy'
            text='Фибрилляция предсердий (ФП)'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/zheludochkovaya-tahikardiya'
            text='Желудочковая тахикардия (ЖТ)'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/trepetanie-predserdiy'
            text='Трепетание предсердий'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/ekstrasistoliya'
            text='Экстрасистолия'
          />
          <LinkItem
            click={handleClose}
            link='/diseases/vnezapnaya-serdechnaya-smert'
            text='Внезапная сердечная смерть (ВСС)'
            style={{ textAlign: 'center' }}
          />
        </ul>

        {/* Диагностика */}
        <ul className='burger__menu'>
          <p className='menu__link' onClick={() => handleScroll('top')}>
            <b>Назад</b>
          </p>
          <LinkItem
            click={handleClose}
            link='/diagnostics/coronarographia'
            text='Коронарография'
          />
          <LinkItem
            click={handleClose}
            link='/diagnostics/computer-tomography'
            text='Компьютерная томография'
          />
        </ul>
      </nav>
    </>
  );
}

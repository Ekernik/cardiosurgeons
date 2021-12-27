import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Я - Вааг Ирма Фридрихвна хочу сказать огромное спасибо{' '}
        <Link href='/team/doctor_zubarev'>
          <a onClick={onClose} className='article__link'>
            Зубареву Евгению Игоревичу
          </a>
        </Link>{' '}
        за его талант оперировать больных. Мне он тоже сделал 07.12.21 г.
        (сделал мне) операцию и&nbsp;тем самым продлил мне жизнь, как говорят,
        на&nbsp;10&nbsp;лет.
      </p>
      <p className='article__p'>
        Я просто счастлива. Мне сейчас 73 года +&nbsp;10 лет. Этого вполне
        достаточно.
      </p>
      <p className='article__p'>
        Спасибо, Евгений Игоревич, за&nbsp;мое спасение. У&nbsp;него отличная
        команда, которая работает четко и&nbsp;слажено. Евгений Игоревич! Спаси
        Вас Бог от&nbsp;всякого ненастья.
      </p>
      <p className='article__p'>Спасибо Всем, Всем, Всем.</p>
    </div>
  );
}

import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Выражаю искреннюю благодарность всем сотрудникам кардиохирургического
        отделения.
      </p>
      <p className='article__p'>
        Особенно врачу-кардиологу{' '}
        <Link href='/team/doctor_suhanova'>
          <a onClick={onClose} className='article__link'>
            Сухановой Ольге Викторовне
          </a>
        </Link>
        , м/с&nbsp;Лебедовой&nbsp;М.В., м/с&nbsp;Юшиной&nbsp;Т.А.,
        м/с&nbsp;Михайловской&nbsp;Ю.В., врачу{' '}
        <Link href='/team/doctor_suhanova'>
          <a onClick={onClose} className='article__link'>
            Сорокину Андрею Александровичу
          </a>
        </Link>
        .
      </p>
      <p className='article__p'>
        Желаю всем сотрудникам отделения: здоровья, счастья, успехов
        в&nbsp;титаническом труде.
      </p>
    </div>
  );
}

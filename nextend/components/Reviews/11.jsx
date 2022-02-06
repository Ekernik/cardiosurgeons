import Link from '@/components/Link';

export default function Review({ onClose }) {
  return (
    <article>
      <p className='article__p'>
        Выражаю искреннюю благодарность всем сотрудникам кардиохирургического
        отделения.
      </p>
      <p className='article__p'>
        Особенно врачу-кардиологу{' '}
        <Link
          href='/team/doctor_suhanova'
          text='Сухановой Ольге Викторовне'
          onClick={onClose}
        />
        , м/с&nbsp;Лебедовой&nbsp;М.В., м/с&nbsp;Юшиной&nbsp;Т.А.,
        м/с&nbsp;Михайловской&nbsp;Ю.В., врачу{' '}
        <Link
          href='/team/doctor_suhanova'
          text='Сорокину Андрею Александровичу'
          onClick={onClose}
        />
        .
      </p>
      <p className='article__p'>
        Желаю всем сотрудникам отделения: здоровья, счастья, успехов
        в&nbsp;титаническом труде.
      </p>
    </article>
  );
}

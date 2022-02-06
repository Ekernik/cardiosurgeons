import Link from '@/components/Link';

export default function Review({ onClose }) {
  return (
    <article>
      <p className='article__p'>
        Мне операцию сделали два врача{' '}
        <Link
          href='/team/doctor_kamenskih'
          text='Каменских М.С.'
          onClick={onClose}
        />{' '}
        и{' '}
        <Link
          href='/team/doctor_shmatov'
          text='Шматов Д.В.'
          onClick={onClose}
        />
      </p>
      <p className='article__p'>
        Я благодаря этим двум врачам и всем остальным, которые выполняют свой
        нелегкий труд. Это очень благородная Ваша профессия, когда вы
        вытаскиваете людей из трудной болезни.
      </p>
      <p className='article__p'>
        Всех сестер я не могу перечислить, но девочки медицинские работники
        очень хорошие, внимательные, уважительные. Младший персонал довольно
        внимательные и хорошо относятся к больным.
      </p>
    </article>
  );
}

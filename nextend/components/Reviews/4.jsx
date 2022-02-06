import Link from '@/components/Link';

export default function Review({ onClose }) {
  return (
    <article>
      <p className='article__p'>
        Я хочу выразить благодарность нашим Российским хирургам{' '}
        <Link
          href='/team/doctor_sheremet'
          text='Шеремету Антону Андреевичу'
          onClick={onClose}
        />{' '}
        и{' '}
        <Link
          href='/team/doctor_zubarev'
          text='Зубареву Андрею Игоревичу'
          onClick={onClose}
        />{' '}
        свою благодарность за свою преданность своему врачебному долгу и заботе
        о самом простом народе.
      </p>
      <p className='article__p'>
        И большая благодарность всем медсестрам и всему младшему персоналу за их
        заботу о нас, когда мы находимся в непростой жизненной ситуации.
      </p>
    </article>
  );
}

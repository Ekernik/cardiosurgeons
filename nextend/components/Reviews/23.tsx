import Link from '@/components/Link';

const Review: React.FC = () => (
  <article>
    <p className='article__p'>
      Выражаю особую благодарность хирургу{' '}
      <Link href='/team/doctor_pyagai' text='Пягай Виктору Александровичу' />, который наблюдал за
      мной в послеоперационный период. Отношения чуткие и внимательные.
    </p>
    <p className='article__p'>
      Я также благодарен администратору Марине Анатольевне Андриановой, которая
      чутко относилась в моим телефонным звонкам.
    </p>
  </article>
);

export default Review;

import Link from '@/components/Link';

type PropsType = {
  onClose: () => void;
};

const Review: React.FC<PropsType> = props => (
  <article>
    <p className='article__p'>
      Выражаю особую благодарность хирургу{' '}
      <Link
        href='/team/doctor_pyagai'
        text='Пягай Виктору Александровичу'
        onClick={props.onClose}
      />
      , который наблюдал за мной в послеоперационный период. Отношения чуткие и
      внимательные.
    </p>
    <p className='article__p'>
      Я также благодарен администратору Марине Анатольевне Андриановой, которая
      чутко относилась в моим телефонным звонкам.
    </p>
  </article>
);

export default Review;

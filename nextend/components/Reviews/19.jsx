import Link from '@/components/Link';

const Review = ({ onClose }) => (
  <article>
    <p className='article__p'>
      Уважаемые сотрудники кардиохирургического центра им. Н.И.Пирогова. Хочу
      выразить Вам глубокую благодарность за Ваш нелегкий труд, за лечение
      многих сердец и спасенные жизни. Дай бог Вами Вашим близким здоровья,
      счастья и удачи.
    </p>
    <p className='article__p'>
      Отдельно хочу поблагодарить{' '}
      <Link
        href='/team/doctor_balahonov'
        text='Балахонова В.В.'
        onClick={onClose}
      />{' '}
      ,{' '}
      <Link
        href='/team/doctor_starosockaya'
        text='Старосоцкую М.В.'
        onClick={onClose}
      />{' '}
      , врача кардиохирурга{' '}
      <Link
        href='/team/doctor_sheremet'
        text='Шеремет А.А.'
        onClick={onClose}
      />{' '}
      , который делал мне РЧА.
    </p>
    <p className='article__p'>
      От всего сердца огромное спасибо всему медицинскому персоналу центра
      кардиохирургическим и интервенционной кардиологии. Так держать! Поменьше
      тяжелых пациентов!
    </p>
  </article>
);

export default Review;

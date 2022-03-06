import Link from '@/components/Link';

const Review = ({ onClose }) => {
  return (
    <article>
      <p className='article__p'>
        Глубокоуважаемые сотрудники кардиохирургического отделения им Н.И.
        Пирогова.
      </p>
      <p className='article__p'>
        От всей души выражаю искреннюю благодарность и крепкого здоровья. Вы
        вернули мне надежду на жизнь, на будущее.
      </p>
      <p className='article__p'>
        Ваш профессионализм, отношение к людям восхищает! Честь и уважение
        заведующему кардиохирургического отделения{' '}
        <Link
          href='/team/doctor_stolyarov'
          text='Столярову М.С.'
          onClick={onClose}
        />
        , моему лечащему врачу кардиологу{' '}
        <Link
          href='/team/doctor_povarenkina'
          text='Поваренкиной В.В.'
          onClick={onClose}
        />{' '}
        и всему коллективу прекрасных врачей. Храни Вас Бог!
      </p>
      <p className='article__p'>
        Огромное спасибо врачу-кардиологу Калининой Елене Сергеевне, которая
        направила меня на операцию в ваше прекрасное заведение.
      </p>
    </article>
  );
};

export default Review;

import Link from '@/components/Link';

const Review = ({ onClose }) => (
  <article>
    <p className='article__p'>
      Я приехала очень в тяжелом состоянии 4.02, 7.02 меня прооперировали врачи
      Шматов Д.В., Капушев Р.Ю. и Пягай В.А.
    </p>
    <p className='article__p'>
      Операция прошла хорошо, я хочу поблагодарить врачей, что меня вернули к
      жизни. Врачи, которые здесь работают уникальны, это их подвиги каждый
      день.
    </p>
    <p className='article__p'>
      Хочется отдать должное лечащему врачу{' '}
      <Link
        href='/team/doctor_asadullin'
        text='Асадуллину И.Ш.'
        onClick={onClose}
      />
      , который с большим вниманием относится к пациентам, желаю продвижения ему
      в медицине.
    </p>
    <p className='article__p'>
      Большая благодарность сестрам в реанимации, очень знают свою работу и
      очень помогают пациентам после операций, а также милым девочкам, которые
      стоят сутками на своем посту, за их заботу.
    </p>
    <p className='article__p'>
      Очень хочется, чтобы были такие центры и врачи по всей России и даже в
      Костроме. Дай вам бог всегда быть здоровыми, улыбающимися. Храни Вас
      Господь.
    </p>
  </article>
);

export default Review;

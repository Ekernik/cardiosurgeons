import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Центр кардиохирургии и&nbsp;инновационной кардиологии очень понравился.
      </p>
      <p className='article__p'>
        Чистые, светлые палаты, удобные кровати и&nbsp;тумбочки.
      </p>{' '}
      <p className='article__p'>
        Но&nbsp;самое главное: здесь прекрасные специалисты, знающие свое дело
        и&nbsp;переживающие за&nbsp;своих пациентов.
      </p>
      <p className='article__p'>
        Особенно хочется отметить работу кардиолога{' '}
        <Link href='/team/doctor_kotova'>
          <a onClick={onClose} className='article__link'>
            Котовой Анны Сергеевны
          </a>
        </Link>
        , хирурга Алиева Сергея Васильевича и&nbsp;медицинской сестры
        Михайловской Юлии Викторовны.
      </p>
      <p className='article__p'>
        Этим людям не&nbsp;страшно доверить свою жизнь, они сделают все чтобы
        помочь пациенту. Огромное им спасибо и&nbsp;низкий поклон.
      </p>
      <p className='article__p'>
        Если&nbsp;бы по&nbsp;всей стране были такие клиники и&nbsp;врачи,
        то&nbsp;население страны было бы в&nbsp;два раза больше.
      </p>
    </div>
  );
}

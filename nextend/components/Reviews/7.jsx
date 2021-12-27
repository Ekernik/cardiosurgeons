import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Очень благодарна врачу{' '}
        <Link href='/team/doctor_sorokin'>
          <a onClick={onClose} className='article__link'>
            Сорокину Андрею Александровичу
          </a>
        </Link>{' '}
        за его чуткость, внимательность к пациентам.
      </p>
      <p className='article__p'>
        Хочу также поблагодарить медсестер и врачей гемодиализного отделения за
        доброту и поддержку пациентов.
      </p>
      <p className='article__p'>
        И еще большое спасибо медперсоналу всего отделения за очень хорошее
        отношение к больным. Спасибо всем большое!
      </p>
    </div>
  );
}

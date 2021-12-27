import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Выражаем огромную благодарность всем сотрудникам кардиохирургического
        отделения: кардиохирургам{' '}
        <Link href='/team/doctor_vasilev'>
          <a onClick={onClose} className='article__link'>
            Васильеву&nbsp;А.С.
          </a>
        </Link>
        ,{' '}
        <Link href='/team/doctor_sorokin'>
          <a onClick={onClose} className='article__link'>
            Сорокину&nbsp;А.Л.
          </a>
        </Link>
        , всем операционным медсестрам, анестезиологам, заведующему{' '}
        <Link href='/team/doctor_stolyarov'>
          <a onClick={onClose} className='article__link'>
            Столярову М.С.
          </a>
        </Link>
        , всем постовым медсестрам, кухонным рабочим, санитаркам, процедурным
        медсестрам, врачам функциональной диагностике, а&nbsp;также всем
        врачам-кардиологам отделения, особенно{' '}
        <Link href='/team/doctor_stolyarov'>
          <a onClick={onClose} className='article__link'>
            Котовой А.С.
          </a>
        </Link>{' '}
        и&nbsp;
        <Link href='/team/doctor_stolyarov'>
          <a onClick={onClose} className='article__link'>
            Поваренкиной В.В.
          </a>
        </Link>
      </p>
      <p className='article__p'>
        Спасибо за&nbsp;этот нелегкий труд, за&nbsp;спасение человеческих сердец
        и&nbsp;жизней, за&nbsp;высокий профессионализм! И,&nbsp;конечно,
        благодарных и&nbsp;послушных, и&nbsp;как можно меньше тяжелых пациентов!
      </p>
    </div>
  );
}

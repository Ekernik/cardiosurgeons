import Link from 'next/link';

export default function Review({ onClose }) {
  return (
    <div>
      <p className='article__p'>
        Выражаем огромную благодарность сотрудникам отделения кардиохирургии:
        кардиохирургу{' '}
        <Link href='/team/doctor_zubarev'>
          <a onClick={onClose} className='article__link'>
            Зубареву Евгению Игоревичу
          </a>
        </Link>
        ;{' '}
        <Link href='/team/doctor_sheremet'>
          <a onClick={onClose} className='article__link'>
            Шереметову Антону Андреевичу
          </a>
        </Link>
        ;{' '}
        <Link href='/team/doctor_vasilev'>
          <a onClick={onClose} className='article__link'>
            Васильеву Алексею Сергеевичу
          </a>
        </Link>
        ;{' '}
        <Link href='/team/doctor_stolyarov'>
          <a onClick={onClose} className='article__link'>
            Столярову Максиму Станиславовичу
          </a>
        </Link>
        ; координатору Давыдовой Светлане Федоровне; кардиологу отделения{' '}
        <Link href='/team/doctor_starosockaya'>
          <a onClick={onClose} className='article__link'>
            Старосоцкой Марии Владимировне
          </a>
        </Link>
        ; всем операционным медсестрам; медсестрам отделения: Шаламовой А.В.;
        Михайловской Ю.В; Юшкиной Т.; Мироненко Анастасии; санитарке Ивлевой
        Валентине; сотрудникам кухни: Горелыщивой Елене Николаевне; врача
        кардиолога{' '}
        <Link href='/team/doctor_suhanova'>
          <a onClick={onClose} className='article__link'>
            Суханова Ольга Викторовна
          </a>
        </Link>
        .
      </p>
      <p className='article__p'>
        За высокий профессионализм всех докторов, внимательное и
        доброжелательное отношение. Стремление помочь пациентам. Создание уюта и
        домашней обстановки, что очень способствовало скорейшему выздоровлению
        пациентов.
      </p>
      <p className='article__p'>
        Желаем всем сотрудникам отделения мира, здоровья, процветания
        благополучия во всех сферах жизни. С Уважением благодарные и любовью
        пациенты 11п. Киныгина Елена Александровна, Калинаичева Татьяна
        Александровна, Чугунова Наталья Александровна, Васильева Мария и
        Максимова Оксана Николаевна
      </p>
    </div>
  );
}

import Link from '@/components/Link';

export default function Review({ onClose }) {
  return (
    <article>
      <p className='article__p'>
        Выражаем огромную благодарность всем сотрудникам кардиохирургического
        отделения: кардиохирургам{' '}
        <Link
          href='/team/doctor_vasilev'
          text='Васильеву&nbsp;А.С.'
          onClick={onClose}
        />
        ,{' '}
        <Link
          href='/team/doctor_sorokin'
          text='Сорокину&nbsp;А.Л.'
          onClick={onClose}
        />
        , всем операционным медсестрам, анестезиологам, заведующему{' '}
        <Link
          href='/team/doctor_stolyarov'
          text='Столярову М.С.'
          onClick={onClose}
        />
        , всем постовым медсестрам, кухонным рабочим, санитаркам, процедурным
        медсестрам, врачам функциональной диагностике, а&nbsp;также всем
        врачам-кардиологам отделения, особенно{' '}
        <Link
          href='/team/doctor_kotova'
          text='Котовой А.С.'
          onClick={onClose}
        />{' '}
        и&nbsp;
        <Link
          href='/team/doctor_povarenkina'
          text='Поваренкиной В.В.'
          onClick={onClose}
        />
      </p>
      <p className='article__p'>
        Спасибо за&nbsp;этот нелегкий труд, за&nbsp;спасение человеческих сердец
        и&nbsp;жизней, за&nbsp;высокий профессионализм! И,&nbsp;конечно,
        благодарных и&nbsp;послушных, и&nbsp;как можно меньше тяжелых пациентов!
      </p>
    </article>
  );
}

import Link from 'next/link';

export default function Review() {
  return (
    <div>
      <p className="article__p">
        Спасибо из&nbsp;Мурманска всему персоналу, кардио-хирургическому
        отделению, приезжал устанавливать фистулу из&nbsp;Мурманска.
      </p>
      <p className="article__p">
        Очень отзывчивый персонал, все чисто, четко, отлажено, много можно
        говорить, но&nbsp;главное это&nbsp;делать. Всем этим люди делают добро
        для&nbsp;других людей, большое спасибо!
      </p>
      <p className="article__p">
        Огромное спасибо кардиохирургу{' '}
        <Link href="/team/doctor_sorokin">
          <a className="article__link">Сорокину Андрею Александрович</a>
        </Link>
        , врач от&nbsp;Бога! Любви, удачи и&nbsp;счастья!
      </p>
    </div>
  );
}

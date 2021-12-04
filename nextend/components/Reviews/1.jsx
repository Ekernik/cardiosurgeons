import Link from 'next/link';

export default function Review() {
  return (
    <div>
      <p className="article__p">
        Мне операцию сделали два врача{' '}
        <Link href="https://heartteamspb.com/team/doctor_kamenskih">
          <a className="article__link">Каменских М.С.</a>
        </Link>{' '}
        и{' '}
        <Link href="https://heartteamspb.com/team/doctor_shmatov">
          <a className="article__link">Шматов Д.В.</a>
        </Link>
      </p>
      <p className="article__p">
        Я благодаря этим двум врачам и всем остальным, которые выполняют свой
        нелегкий труд. Это очень благородная Ваша профессия, когда вы
        вытаскиваете людей из трудной болезни.
      </p>
      <p className="article__p">
        Всех сестер я не могу перечислить, но девочки медицинские работники
        очень хорошие, внимательные, уважительные. Младший персонал довольно
        внимательные и хорошо относятся к больным.
      </p>
    </div>
  );
}

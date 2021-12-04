import Link from 'next/link';

export default function Review() {
  return (
    <div>
      <p className="article__p">
        Очень внимательный персонал, вежливые и отзывчивые. Всегда поддерживается
        идеальная чистота.
      </p>
      <p className="article__p">
        Профессиональные врачи с большим опытом работы. Хирурги поражают своим
        мастерством. Все на высшем уровне.
      </p>
      <p className="article__p">
        Огромное спасибо за оказанную помощь. Самый замечательный лечащий врач{' '}
        <Link href="https://heartteamspb.com/team/doctor_kotova">
          <a className="article__link">Котова Анна Сергеевна</a>
        </Link>
      </p>
    </div>
  );
}

import Link from "next/link";

export default function Review({ onClose }) {
  return (
    <div>
      <p className="article__p">
        Очень внимательный персонал, вежливые и отзывчивые. Всегда
        поддерживается идеальная чистота.
      </p>
      <p className="article__p">
        Профессиональные врачи с большим опытом работы. Хирурги поражают своим
        мастерством. Все на высшем уровне.
      </p>
      <p className="article__p">
        Огромное спасибо за оказанную помощь. Самый замечательный лечащий врач{" "}
        <Link href="/team/doctor_kotova">
          <a onClick={onClose} className="article__link">
            Котова Анна Сергеевна
          </a>
        </Link>
      </p>
    </div>
  );
}

import Link from "next/link";

export default function Review({ onClose }) {
  return (
    <div>
      <p className="article__p">
        Я хочу выразить благодарность нашим Российским хирургам{" "}
        <Link href="/team/doctor_sheremet">
          <a onClick={onClose} className="article__link">
            Шеремету Антону Андреевичу
          </a>
        </Link>{" "}
        и{" "}
        <Link href="/team/doctor_zubarev">
          <a onClick={onClose} className="article__link">
            Зубареву Андрею Игоревичу
          </a>
        </Link>{" "}
        свою благодарность за свою преданность своему врачебному долгу и заботе
        о самом простом народе.
      </p>
      <p className="article__p">
        И большая благодарность всем медсестрам и всему младшему персоналу за их
        заботу о нас, когда мы находимся в непростой жизненной ситуации.
      </p>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";

export default function DoctorCard(props) {
  const btnMore = (props) => {
    if (props.showMore) {
      return (
        <div className="doc-card__about-link">
          <Link href={props.link}>
            <a>читать подробнее</a>
          </Link>
        </div>
      );
    }
  };
  return (
    <div className={`doc-card__doctor ${props.className}`}>
      <Link href={props.link || "#TODO"}>
        <a>
          <Image
            className="doc-card__img"
            src={props.imgSrc}
            alt={props.imgAlt}
          />
        </a>
      </Link>
      <div className="doc-card__title">
        <Link href={props.link || "#TODO"}>
          <a>
            <h2>{props.title}</h2>
          </a>
        </Link>
      </div>

      <h3 className="doc-card__subtitle">{props.subtitle}</h3>
      {btnMore(props)}
    </div>
  );
}

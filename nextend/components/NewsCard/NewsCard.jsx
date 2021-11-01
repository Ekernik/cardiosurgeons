import Link from "next/link";
import styles from "./index.module.scss";

export default function NewsCard(props) {
  let titleColor = props.hot ? { color: "#b30404", fontWeight: "600" } : {};

  return (
    <div className={styles.card__container}>
      <div className={styles.card__news}>
        <div style={{}}>
          <p style={titleColor} className={styles.card__text}>
            {props.title}
          </p>
          <p className={styles.card__text}>
            <strong>{props.subtitle}</strong>
          </p>
        </div>
        <Link href={props.link}>
          <a className={styles.card__read_more}>читать подробнее</a>
        </Link>
      </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import lost from "../public/static/svg/lost.svg";

export default function PageNotFound() {
  return (
    <>
      <Head>
        <title>Ошибка 404</title>
        <meta
          name="description"
          content="Очень жаль, но мы не можем найту данную страницу."
        />
      </Head>
      <main className="page__page-not-found">
        <div className="container">
          <section className="section__page-not-found">
            <Image src={lost} alt="" width={250} height={250} />
            <h1>404</h1>
            <div>
              <p>Такой страницы не существует</p>
              <p>Предлагаем Вам вернуться на главную страницу сайта</p>
            </div>
            <Link href="/">
              <a>Вернуться на главную</a>
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}

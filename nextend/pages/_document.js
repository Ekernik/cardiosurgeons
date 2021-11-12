import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon shortcut" href="/favicon120x120.png" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
            rel="stylesheet"
          />
          <meta name="yandex-verification" content="3934e55935fc3382" />
          {/* Search Engine Breadcrumbs */}
          {/* <script type="application/ld+json">
            {{
              "@context": "http://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "О нас",
                  item: "https://heartteamspb.com/about-us",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Лечение",
                  item: "https://heartteamspb.com/treatment",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Стентирование коронарных артерий",
                  item: "https://heartteamspb.com/treatment/stentirovanie-koronarnih-arteriy",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Аорто-коронарное шунтирование",
                  item: "https://heartteamspb.com/treatment/aorto-koronarnoe-shuntirovanie",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Миниинвизивное протезирование клапанов",
                  item: "https://heartteamspb.com/treatment/miniinvisivnoe-protezirovanie-klapanov",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Имплантация кардиостимуляторов",
                  item: "https://heartteamspb.com/treatment/implantacia-kardiostimulyatorov",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Каротидная эндартерэктомия",
                  item: "https://heartteamspb.com/treatment/karotidnaya-endarterektomiya",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Радиочастотная абляция",
                  item: "https://heartteamspb.com/treatment/radiochastotnaya-ablyaciya",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Транскатетерная имплантация аортального клапана",
                  item: "https://heartteamspb.com/treatment/transkatetornaya-implantaciya-aortalnogo-klapana",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Опухоли сердца",
                  item: "https://heartteamspb.com/treatment/opuholi-serdca",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Протезирование аорты",
                  item: "https://heartteamspb.com/treatment/protezirovanie-aorti",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Диагностика",
                  item: "https://heartteamspb.com/diagnostics",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Коронарография",
                  item: "https://heartteamspb.com/diagnostics/coronarographia",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Атеросклероз",
                  item: "https://heartteamspb.com/diagnostics/ateroskleros",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Команда",
                  item: "https://heartteamspb.com/team",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Контакты",
                  item: "https://heartteamspb.com/contacts",
                },
              ],
            }}
          </script> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Yandex.Metrika counter --> */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{ __html: process.env.yandexMetrika }}
          ></script>
          <noscript>
            <div>
              <Image
                src="https://mc.yandex.ru/watch/83857552"
                className="yandex__img"
                alt=""
                width={0}
                height={0}
              />
            </div>
          </noscript>
          {/* <!-- /Yandex.Metrika counter --> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;

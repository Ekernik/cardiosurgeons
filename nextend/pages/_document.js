import Document, { Html, Head, Main, NextScript } from "next/document";

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
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Yandex.Metrika counter --> */}
          <script type="text/javascript">
            {(function (m, e, t, r, i, k, a) {
              m[i] =
                m[i] ||
                function () {
                  (m[i].a = m[i].a || []).push(arguments);
                };
              m[i].l = 1 * new Date();
              (k = e.createElement(t)),
                (a = e.getElementsByTagName(t)[0]),
                (k.async = 1),
                (k.src = r),
                a.parentNode.insertBefore(k, a);
            })(
              window,
              document,
              "script",
              "https://mc.yandex.ru/metrika/tag.js",
              "ym"
            )}

            {ym(83857552, "init", {
              clickmap: true,
              trackLinks: true,
              accurateTrackBounce: true,
              webvisor: true,
            })}
          </script>
          <noscript>
            <div>
              <img
                src="https://mc.yandex.ru/watch/83857552"
                style="position: absolute; left: -9999px"
                alt=""
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

import Document, { Html, Head, Main, NextScript } from 'next/document';
import Image from 'next/image';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link rel='icon' type='image/png' href='/favicon.png' />
          <link
            href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap'
            rel='stylesheet'
          />
          <meta name='yandex-verification' content='3934e55935fc3382' />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* <!-- Yandex.Metrika counter --> */}
          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{ __html: process.env.yandexMetrika }}
          ></script>
          <noscript>
            <div>
              <Image
                src='https://mc.yandex.ru/watch/83857552'
                className='yandex__img'
                alt=''
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

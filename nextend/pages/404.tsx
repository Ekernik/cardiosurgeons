import Image from 'next/image';
import Head from 'next/head';
import Link from '@/components/Link';
import lost from '@/public/static/svg/lost.svg';
import { NextPage } from 'next';

const PageNotFound: NextPage = () => (
  <>
    <Head>
      <title>Ошибка 404 | страница не найдена</title>
      <meta
        name='description'
        content='Очень жаль, но мы не можем найту данную страницу.'
      />
    </Head>
    <main className='page__page-not-found'>
      <div className='container'>
        <section className='section__page-not-found'>
          <Image src={lost} alt='' width={250} height={250} />
          <h1>404</h1>
          <div>
            <p>Такой страницы не существует</p>
            <p>Предлагаем Вам вернуться на главную страницу сайта</p>
          </div>
          <Link href='/' text='Вернуться на главную' />
        </section>
      </div>
    </main>
  </>
);

export default PageNotFound;

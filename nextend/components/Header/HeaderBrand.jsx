import NextLink from 'next/link';
import Image from 'next/image';
import Link from '@/components/Link';
import logo from '@/public/static/images/logo_1.png';

export default function HeaderBrand() {
  return (
    <div className='header__brand'>
      <NextLink href='/'>
        <a className='brand__logo'>
          <Image
            src={logo}
            alt='Логотип Центра кардиохирургии и интервенционной кардиологии'
            height={40}
            width={40}
            layout='intrinsic'
          />
        </a>
      </NextLink>
      <Link
        href='/'
        text='Центр кардиохирургии и&nbsp;интервенционной кардиологии 
          клиники&nbsp;ВМТ&nbsp;им.&nbsp;Н.И.Пирогова&nbsp;СПбГУ'
        classes='brand__name'
      />
    </div>
  );
}

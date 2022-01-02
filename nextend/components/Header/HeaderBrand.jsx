import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/static/images/logo_1.png';

export default function HeaderBrand() {
  return (
    <div className="header__brand">
      <Link href="/">
        <a>
          <div className="brand__logo">
            <Image
              src={logo}
              alt="Логотип Центра кардиохирургии и интервенционной кардиологии"
              height={40}
              width={40}
              layout="intrinsic"
            />
          </div>
        </a>
      </Link>
      <Link href="/">
        <a className="brand__name">
          Центр кардиохирургии и&nbsp;интервенционной кардиологии <br />
          клиники ВМТ им.&nbsp;Н.И.Пирогова&nbsp;СПбГУ
        </a>
      </Link>
    </div>
  );
}

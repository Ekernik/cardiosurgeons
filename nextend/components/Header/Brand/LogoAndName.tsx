import Image from 'next/image';
import Link from '@/components/Link';
import logo from '@/public/static/images/logo_1.png';
import styles from './brand.module.scss';

const LogoAndName: React.FC = () => {
  return (
    <div className={styles.logoAndName}>
      <Link href='/' classes={styles.logo}>
        <Image
          src={logo}
          alt='Логотип Центра кардиохирургии и интервенционной кардиологии'
          height={40}
          width={40}
          layout='intrinsic'
        />
      </Link>
      <Link
        href='/'
        text='Центр кардиохирургии и&nbsp;интервенционной кардиологии 
          клиники&nbsp;ВМТ&nbsp;им.&nbsp;Н.И.Пирогова&nbsp;СПбГУ'
        classes={styles.name}
      />
    </div>
  );
};

export default LogoAndName;

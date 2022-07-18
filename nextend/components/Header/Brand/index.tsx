import Button from '@/components/ButtonCTA';
import LogoAndName from './LogoAndName';
import styles from './brand.module.scss';
import PhoneLink from '@/components/PhoneLink';

const Brand: React.FC = () => {
  return (
    <div className={styles.brand}>
      <LogoAndName />
      <PhoneLink text_classes={styles.phone_p} link_classes={styles.phone} />
      <Button styling={styles.cta} text='Записаться&nbsp;на&nbsp;прием' />
    </div>
  );
};

export default Brand;

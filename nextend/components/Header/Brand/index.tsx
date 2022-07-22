import Button from '@/components/ButtonCTA';
import LogoAndName from './LogoAndName';
import styles from './brand.module.scss';
import PhoneLink from '@/components/PhoneLink';

type PropTypes = {
  openFormModal: () => void;
};

const Brand: React.FC<PropTypes> = props => {
  return (
    <div className={styles.brand}>
      <LogoAndName />
      <PhoneLink text_classes={styles.phone_p} link_classes={styles.phone} />
      <Button
        styling={styles.cta}
        text='Записаться&nbsp;на&nbsp;прием'
        onClick={props.openFormModal}
      />
    </div>
  );
};

export default Brand;

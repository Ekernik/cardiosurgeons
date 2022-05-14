import { openFloatingForm } from '@/helpers/cta_opener';
import styles from './styles.module.scss'

type ButtonProps = {
  text: string;
  styling?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  text,
  styling,
  onClick = openFloatingForm,
}) => {
  return (
    <button className={`${styles.cta} ${styling}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

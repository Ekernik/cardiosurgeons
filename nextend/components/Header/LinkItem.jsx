import Link from '@/components/Link';
import { showFullHeader } from './watchScroll';

export default function LinkItem({ link, text, click }) {
  const handleClick = () => {
    try {
      showFullHeader();
      click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className='menu__item' onClick={handleClick}>
      <Link href={link} text={text} classes='menu__link' />
    </li>
  );
}

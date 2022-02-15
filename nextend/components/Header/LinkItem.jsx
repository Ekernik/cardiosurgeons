import Link from '@/components/Link';
import { showFullHeader } from './watchScroll';

export default function LinkItem({ link, text, click, style }) {
  const handleClick = () => {
    try {
      showFullHeader();
      click();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li className='menu__item' onClick={handleClick} style={{...style}}>
      <Link href={link} text={text} classes='menu__link' />
    </li>
  );
}

type PropsType = {
  text?: string;
  text_after?: string;
  phoneNumber: string;
  text_classes?: string;
};

const PhoneLink: React.FC<PropsType> = ({
  text,
  phoneNumber,
  text_after,
  text_classes = 'article__p',
}) => (
  <span className={text_classes}>
    <span>{text}</span>
    <a href={`tel:${phoneNumber}`} className='article__link'>
      {phoneNumber}
    </a>
    <span className={text_classes}>{text_after}</span>
  </span>
);

export default PhoneLink;

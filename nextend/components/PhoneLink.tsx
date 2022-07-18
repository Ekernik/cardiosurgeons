type PropsType = {
  text?: string;
  text_after?: string;
  phoneNumber?: string;
  text_classes?: string;
  link_classes?: string;
};

const PhoneLink: React.FC<PropsType> = ({
  text,
  phoneNumber,
  text_after,
  text_classes,
  link_classes,
}) => (
  <span className={text_classes}>
    {text}
    <a
      href={`tel:${phoneNumber || '+7(999)238-01-36'}`}
      className={'article__link' && link_classes}
    >
      {phoneNumber ? (
        phoneNumber
      ) : (
        <span>+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36</span>
      )}
    </a>
    {text_after}
  </span>
);

export default PhoneLink;

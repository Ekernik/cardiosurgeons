type PropsType = {
  text: string;
  phoneNumber: string;
};

const PhoneLink: React.FC<PropsType> = ({ text, phoneNumber }) => (
  <p className='article__p'>
    {text}
    <a href={`tel:${phoneNumber}`} className='article__link'>
      {phoneNumber}
    </a>
  </p>
);

export default PhoneLink;

import Button from '@/components/ButtonCTA';

type PropsType = {
  header: string & {
    title: string;
    pretitle: string;
  };
  subheader: string;
  buttonText: string;
};

const Greetings: React.FC<PropsType> = ({ header, subheader, buttonText }) => (
  <section className='greetings__section'>
    <div className='container'>
      <h1 className='greetings__header'>{header.title || header}</h1>
      <p className='greetings__text'>{header.pretitle}</p>
      <h3 className='greetings__subheader'>{subheader}</h3>
      <Button styling={`greetings__cta`} text={buttonText} />
    </div>
  </section>
);

export default Greetings;

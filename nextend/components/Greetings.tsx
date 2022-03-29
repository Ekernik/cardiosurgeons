import Button from '@/components/ButtonCTA';

type PropsType = {
  header:
    | string
    | {
        title: string;
        pretitle: string;
      };
  subheader?: string;
  buttonText: string;
};

const Greetings: React.FC<PropsType> = ({ header, subheader, buttonText }) => {
  const title = typeof header === 'string' ? header : header.title;
  const pretitle = typeof header === 'string' ? '' : header.pretitle;
  return (
    <section className='greetings__section'>
      <div className='container'>
        <h1 className='greetings__header'>{title}</h1>
        <p className='greetings__text'>{pretitle}</p>
        <h3 className='greetings__subheader'>{subheader}</h3>
        <Button styling={`greetings__cta`} text={buttonText} />
      </div>
    </section>
  );
};

export default Greetings;

import Button from "./ButtonCTA";

export default function Greetings({ settings, header, subheader, buttonText }) {
  let isHidden = () => {
    if (settings) {
      if (settings.noButton) return 'hidden';
    }
  };

  return (
    <section className="greetings__section">
      <div className='container'>
        <h1 className="greetings__header">{header.title || header}</h1>
        <p className="greetings__text">{header.pretitle}</p>
        <h3 className="greetings__subheader">{subheader}</h3>
        <Button styling={`greetings__cta ${isHidden()}`} text={buttonText} />
      </div>
    </section>
  );
}

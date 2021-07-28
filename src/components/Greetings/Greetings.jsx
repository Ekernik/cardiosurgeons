import React from 'react';
import './index.scss';

import Button from '../../atoms/ButtonCTA';

function Greetings(props) {
  return (
    <section id="greetings-section">
      <div className="container">
        <h1 className="greetings__header">{props.header}</h1>
        <h3 className="greetings__subheader">{props.subheader}</h3>
        <Button styling="greetings__cta" text={props.buttonText} />
      </div>
    </section>
  );
}

export default Greetings;

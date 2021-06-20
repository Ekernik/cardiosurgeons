import React from 'react';
import './index.scss';

function Greetings() {
    return(
        <section className='greetings-section'>
            <div className="container">
                <h1 className='greetings__header'>Центр кардиохирургии и интервенционной кардиологии</h1>
                <h3 className='greetings__subheader'>Медицина, доступная каждому</h3>
                <button className='greetings__cta'>Записаться на прием</button>
            </div>
        </section>
    )
}

export default Greetings;
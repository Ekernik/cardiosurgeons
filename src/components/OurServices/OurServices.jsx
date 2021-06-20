import React from 'react';

import './index.scss';

import diagnostics from '../../assets/databases/diagnostics';
import illnesses from '../../assets/databases/illnesses';

const toggleOurServiceButtons = (event) => {
    const buttons = document.querySelectorAll('.toggle__button');
    const lists = document.querySelectorAll('.list-container__list');
    buttons[0].classList.toggle('toggle__button--active');
    buttons[1].classList.toggle('toggle__button--active');
    lists[0].classList.toggle('list-container__list--hidden');
    lists[1].classList.toggle('list-container__list--hidden');
}

function OurServices() {
    return (
        <section className='our-services-section container flex-box'>
            <h2 className='section__header'>Наши услуги</h2>
            <div className='our-services__toggle'>
                <button onClick={(event) => toggleOurServiceButtons(event)} className='toggle__button'>Лечение</button>
                <button onClick={(event) => toggleOurServiceButtons(event)} className='toggle__button toggle__button--active'>Диагностика</button>
            </div>
            <div className='our-services__list-container'>
                <ul className='list-container__list'>
                    {diagnostics.map(diagnos => {
                        return diagnostics[diagnostics.length - 1] === diagnos ?
                            <div><li className='illness-list__item'>{diagnos}</li></div> :
                            <div><li className='illness-list__item'>{diagnos}</li><hr /></div>;
                    })}
                </ul>
                <ul className='list-container__list list-container__list--hidden'>
                    {illnesses.map(object => 
                        <div className='illness-subsection'>
                            <h3 className='illness-list__header'>{object.categoryName}</h3>
                            {object.illnesses.map(illness => {
                                return (object.illnesses[object.illnesses.length - 1]) === illness ? 
                                    <div><li className='illness-list__item'>{illness}</li></div> :
                                    <div><li className='illness-list__item'>{illness}</li><hr /></div>
                            })}
                        </div>
                    )}
                </ul>
            </div>
        </section>
    )
}

export default OurServices;
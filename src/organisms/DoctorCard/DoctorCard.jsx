import React from 'react'
import './index.scss';

export default function DoctorCard(props) {
    return(
        <div className='doc-card__doctor'>
            <img className='doc-card__img' src={props.imgSrc} alt={props.imgAlt} />
            <h2 className='doc-card__title'>{props.title}</h2>
            <h3 className='doc-card__subtitle'>{props.subtitle}</h3>
        </div>
    )
}
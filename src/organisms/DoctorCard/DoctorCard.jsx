import React from 'react'
import './index.scss';

export default function DoctorCard(props) {
    return(
        <div className='doc-card__doctor'>
            <a href='#TODO'><img className='doc-card__img' src={props.imgSrc} alt={props.imgAlt} /></a>
            <a href='#TODO' className='doc-card__title'><h2>{props.title}</h2></a>
            <h3 className='doc-card__subtitle'>{props.subtitle}</h3>
            <a href="#TODO" className="doc-card__about-link">читать подробнее</a>
        </div>
    )
}
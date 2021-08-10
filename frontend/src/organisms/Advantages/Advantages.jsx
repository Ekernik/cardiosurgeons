import React from 'react';
import './index.scss';
import doctors_2 from '../../assets/svg/doctors_2.svg';
import doctors_3 from '../../assets/svg/doctors_3.svg';
import doctors_4 from '../../assets/svg/doctors_4.svg';
import surgery_1 from '../../assets/svg/surgery.svg';


function Advantages() {
  return (
    <section className="advantages-section">
      <div className="container flex">
        <div className="adv__item">
          <img className="adv__img" src={doctors_2} alt="" />
          <div>
            <h4 className="adv__title">59 врачей</h4>
            <p className="adv__subtitle">Врачи разных специальностей</p>
          </div>
        </div>
        <div className="adv__item">
          <img className="adv__img" src={doctors_3} alt="" />
          <div>
            <h4 className="adv__title">15 докторов</h4>
            <p className="adv__subtitle">медицинских наук</p>
          </div>
        </div>
        <div className="adv__item">
          <img className="adv__img" src={doctors_4} alt="" />
          <div>
            <h4 className="adv__title">60 кандидатов</h4>
            <p className="adv__subtitle">медицинских наук</p>
          </div>
        </div>
        <div className="adv__item">
          <img className="adv__img" src={surgery_1} alt="" />
          <div>
            <h4 className="adv__title">18717 операции</h4>
            <p className="adv__subtitle">выполнено в 2020 г.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

import React from 'react';
import './index.scss';
import doctors_2 from '../../assets/svg/doctors_2.svg';
import doctors_3 from '../../assets/svg/doctors_3.svg';
import doctors_4 from '../../assets/svg/doctors_4.svg';


function Advantages() {
  return (
    <section className="advantages-section">
      <div className="container flex">
        <div className="adv__item">
          <img className="adv__img" src={doctors_2} alt="" />
          <div>
            <h4 className="adv__title">3800</h4>
            <p className="adv__subtitle">операций кардиохирургического профиля</p>
          </div>
        </div>
        <div className="adv__item">
          <img className="adv__img" src={doctors_3} alt="" />
          <div>
            <h4 className="adv__title">900+</h4>
            <p className="adv__subtitle">операций на открытом сердце</p>
          </div>
        </div>
        <div className="adv__item">
          <img className="adv__img" src={doctors_4} alt="" />
          <div>
            <h4 className="adv__title">1600</h4>
            <p className="adv__subtitle">рентгенхирургических вмешательств</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

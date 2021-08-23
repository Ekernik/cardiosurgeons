import React from 'react';
import './index.scss';

import svg_building from '../../assets/svg/building_1.svg';
import svg_doctors from '../../assets/svg/doctors_1.svg';
import svg_tech from '../../assets/svg/tech_1.svg';

function WhyUs() {
  return (
    <section className="section__why-us container">
      <h2 className="section__header">Почему люди выбирают нас</h2>
      <div className="why-us__flex-main">
        <p className="why-us__p">
          Наш центр представляет собой уникальное сочетание кардиологии,
          кардиохирургии, сосудистой хирургии, аритмологии, рентгенхирургии,
          кардиоанестезиологии, работающих как единое целое, позволяя проводить
          процесс лечения и последующего наблюдения пациентов в едином блоке
        </p>
        <img className="why-us__img" src={svg_doctors} loading="lazy" alt="" />
        <hr className="why-us__divider" />
      </div>
      <div className="why-us__flex-main--reversed">
        <p className="why-us__p">
          Отделение располагает комфортными одноместными, двух- и трехместными палатами со всеми
          удобствами
        </p>
        <img className="why-us__img" src={svg_building} loading="lazy" alt="" />
        <hr className="why-us__divider" />
      </div>
      <div className="why-us__flex-main">
        <p className="why-us__p">
          Мы оказываем высокотехнологичную медицинскую помощь
        </p>
        <img className="why-us__img" src={svg_tech} loading="lazy" alt="" />
      </div>
    </section>
  );
}

export default WhyUs;
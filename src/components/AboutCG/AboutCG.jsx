import React from 'react';
import './index.scss';

import svg_research from '../../assets/svg/research_1.svg';
import svg_doctors from '../../assets/svg/doctors_1.svg';
import svg_care from '../../assets/svg/care_1.svg';

function AboutCG() {
  return (
    <section className="About-CG-section container">
      <h2 className="section__header">О процедуре</h2>
      <div className="why-us__reason">
        <p className="reason__title">
          Коронарография - исследование сердечных сосудов, занимает не более
          двадцати-тридцати минут. Она проводится без наркоза и не вызывает
          болевых ощущений у пациента. При помощи рентгеновских лучей можно
          безошибочно определить участок и степень сужения просвета коронарной
          артерии и выбрать подходящую тактику лечения.
        </p>
        <img className="reason__img" src={svg_research} loading="lazy" alt="" />
        <hr className="reason__divider" />
      </div>
      <div className="why-us__reason">
        <p className="reason__title">
          Коронография выполняется только в условиях стационара. Показания к
          выполнению исследования устанавливаются либо кардиологом либо
          сердечно-сосудистым хирургом.
        </p>
        <img className="reason__img" src={svg_care} loading="lazy" alt="" />
        <hr className="reason__divider" />
      </div>
      <div className="why-us__reason">
        <p className="reason__title">
          Во время вмешательства используется местная анестезия. Катетер
          проходит через бедренную артерию и аорты, а затем попадает в просвет
          коронарной артерии. Потом через катетер вводят специальное
          рентгеноконтрастное вещество, которое вместе с током крови разносится
          по всем коронарным сосудам и делает их хорошо различимыми. По
          прохождению контраста хирургами проводится оценка состояния коронарных
          артерий.
        </p>
        <img className="reason__img" src={svg_doctors} loading="lazy" alt="" />
      </div>
    </section>
  );
}

export default AboutCG;

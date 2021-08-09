import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Contacts from '../../components/Contacts';

import './index.scss';

export default function Treatment() {
  return (
    <main className="page__services">
      <Header />
      <div className="container container__services">
        <h1 className="services__header">Лечение</h1>
        <div className="services__list">
          <a className="services__link" href="/treatment/coronarographia">
            Коронарография
          </a>
          <a className="services__link" href="/treatment/stentirovanie-koronarnih-arteriy">
            Стентирование коронарных артерий
          </a>
          <a className="services__link" href="/treatment/aorto-koronarnoe-shuntirovanie">
            Аорто-коронарное шунтирование
          </a>
          {/* <a className="services__link" href="/treatment/plastika-mitralnogo-klapana">
            Пластика митрального клапана
          </a> */}
          {/* <a className="services__link" href="/treatment/miniinvisivnoe-protezirovanie-klapanov">
            Миниинвизивное протезирование клапанов
          </a> */}
          {/* <a className="services__link" href="/treatment/protezirovanie-aorti">
            Протезирование аорты
          </a> */}
          <a className="services__link" href="/treatment/karotidnaya-endarterektomiya">
            Каротидная эндартерэктомия
          </a>
          <a className="services__link" href="/treatment/radiochastotnaya-ablyaciya">
            Радиочастотная абляция
          </a>
        </div>
      </div>
      <Contacts />
      <Footer />
    </main>
  );
}

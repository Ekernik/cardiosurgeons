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
          <a className="services__link" href="/hot/coronarography">
            Коронарография
          </a>
          <a className="services__link" href="/hot/operation_02">
            Стентирование коронарных артерий
          </a>
          <a className="services__link" href="/hot/operation_03">
            Аорто-коронарное шунтирование
          </a>
          <a className="services__link" href="/hot/operation_04">
            Пластика митрального клапана
          </a>
          <a className="services__link" href="/hot/miniinvisiv">
            Миниинвизивное протезирование клапанов
          </a>
          <a className="services__link" href="/hot/protezirovanie">
            Протезирование аорты
          </a>
          <a className="services__link" href="/hot/operation_07">
            Каротидная эндартерэктомия
          </a>
          <a className="services__link" href="/hot/operation_08">
            Радиочастотная абляция
          </a>
        </div>
      </div>
      <Contacts />
      <Footer />
    </main>
  );
}

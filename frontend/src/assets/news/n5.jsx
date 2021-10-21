import React from 'react';
import {
  YMaps,
  Map,
  Placemark,
  FullscreenControl,
  ZoomControl,
} from 'react-yandex-maps';
import DoctorCard from '../../organisms/DoctorCard/DoctorCard';
import img_doctor from '../images/doctors/doctor_Sorokin.jpg';
import ButtonCTA from '../../atoms/ButtonCTA';

import './index.scss';

export default function NewsArticle(props) {
  // Старый Оскол - 16 ноября 2021
  return (
    <section className="section__news-article">
      <div className="container container__news-article">
        <h6 className="news__date">{props.date}</h6>
        <h2 className="news__title">
          16 ноября 2021 г. в&nbsp;МДЦ «Медтест» проводится отбор
          на&nbsp;бесплатное <strong>хирургическое лечение</strong>{' '}
          в&nbsp;Санкт-Петербурге пациентов с&nbsp;заболеваниями:
        </h2>
        <div className="flex">
          <div style={{ flex: 1 }}>
            <ul className="news__list">
              <li className="news__list-item">— ИБС</li>
              <li className="news__list-item">— Аневризма аорты</li>
              <li className="news__list-item">
                — Окклюзии и&nbsp;стенозы магистральных артерий
              </li>
              <li className="news__list-item">— Иная артериальная патология</li>
            </ul>
            <p className="news__p">На прием пациенты должны взять с собой:</p>
            <ul className="news__list">
              <li className="news__list-item">— паспорт</li>
              <li className="news__list-item">— полис ОМС</li>
              <li className="news__list-item">— СНИЛС</li>
              <li className="news__list-item">
                — имеющиеся медицинские документы.
              </li>
            </ul>
            <p className="news__p">
              Стоимость приёма <strong>2000 рублей</strong>.
            </p>
            <ButtonCTA
              styling="greetings__cta news__cta"
              text="Записаться на прием"
            />
            <div className="marked-container">
              <p className="news__p">
                Большинство операций в Клинике ВМТ им.&nbsp;Н.И.Пирогова
                выполняются бесплатно в&nbsp;рамках федеральных квот
                на&nbsp;высокотехнологичную медицинскую помощь, а&nbsp;также
                по&nbsp;ОМС.
              </p>
            </div>
          </div>
          <div className="news__help-flex">
            <p className="news__p" style={{ textAlign: 'center' }}>
              принимает специалист Центра <br />
              <a href="/team/doctor_sorokin" target="_blank">
                Сорокин Андрей Александрович
              </a>
            </p>
            <DoctorCard
              className="news__doctor-card"
              imgSrc={img_doctor}
              imgAlt={'Доктор Сорокин Андрей Александрович'}
              title={'Сорокин Андрей Александрович'}
              subtitle={
                'Врач сердечно-сосудистый хирург, интервенционный радиолог'
              }
              link={'/team/doctor_sorokin'}
              showMore={true}
            />
          </div>
        </div>
        <hr />
        <div className="news__main-flex">
          <div className="news__help-flex">
            <p className="news__p">
              Прием будет проводиться:{' '}
              <strong>16&#160;ноября&#160;2021&#160;г</strong>
            </p>
            <p className="news__p">
              По адресу:{' '}
              <a
                href="https://yandex.ru/maps/-/CCUmI8TC~D"
                target="_blank"
                rel="noreferrer"
              >
                г.&nbsp;Старый Оскол, микрорайон Макаренко, д.&nbsp;4В
              </a>
            </p>
            <YMaps query={{ lang: 'ru_RU' }}>
              <Map
                width={'100%'}
                height={'30vh'}
                defaultState={{
                  center: [51.318761, 37.887184],
                  zoom: 15,
                  behaviors: ['default', 'scrollZoom'],
                  controls: [],
                }}
              >
                <Placemark defaultGeometry={[51.318761, 37.887184]} />
                <FullscreenControl />
                <ZoomControl />
              </Map>
            </YMaps>
            <p className="news__p">
              тел. для записи:{' '}
              <a href="tel:+79992380136">
                8&nbsp;(999)&nbsp;238&#8209;01&#8209;36
              </a>
              <br />
              тел. МДЦ «Медтест»:{' '}
              <a href="tel:+74725452503">
                8&nbsp;(4725)&nbsp;45&#8209;25&#8209;03
              </a>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </section>
  );
}

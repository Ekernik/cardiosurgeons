import React from "react";
import "./index.scss";

export default function Operation08() {
  return (
    <section className="section__about-op-03 container">
      <h2 className="section__header text-center">О процедуре</h2>
      <div className="marked-container">
        <p className="operation__p">
          В основе этого метода лежит локальное (точечное) – воздействие
          электрическим током высокой частоты на «очаг» аритмии или участок цепи
          кругового движения импульса при тахикардиях
        </p>
      </div>
      <div className="operation__flex-main">
        <p className="operation__p">
          Непосредственно перед аблацией проводится инвазивное
          электрофизиологическое исследование сердца, чтобы определить механизм
          аритмии и ее локализацию. Оно осуществляется с помощью диагностических
          катетеров-электродов, вводимых через крупные вены (бедренная,
          подключичная) или артерии, и позволяющих точно определить локализацию
          «патологического очага» аритмии
        </p>
        <img className="operation__img" src={""} loading="lazy" alt="" />
        <hr className="operation__divider" />
      </div>

      <div className="operation__flex-main--reversed">
        <p className="operation__p">
          Предварительно под местной анестезией в эти крупные сосуды вводят
          гемостатические интродьюсеры («трубочки»), которые позволяют защитить
          сосуд. Электроды доставляют в сердце. Всю процедуру проводят под
          контролем рентгеноскопии. Затем с помощью специального «абляционного»
          электрода проводится «прижигание» очага аритмии.
        </p>
        <img className="operation__img" src={""} loading="lazy" alt="" />
        <hr className="operation__divider" />
      </div>
      <div className="operation__flex-main">
        <p className="operation__p">
          Операция в среднем длится около 1,5 часов. Как правило, на 1-2-е сутки
          пациент может быть выписан из стационара.
        </p>
        <img className="operation__img" src={""} loading="lazy" alt="" />
      </div>
      <div className="marked-container">
        <p className="operation__p">
          При обращении пациента на консультацию к кардиохирургу-аритмологу
          необходимо иметь электрокардиограмму, выполненную во время приступа
          тахикардии, или результаты суточного мониторирования ЭКГ с
          зарегистрированным приступом
        </p>
      </div>
      <h2 className="section__header">
        Симптомы, на которые следует обратить внимание
      </h2>
      <ul className="operation__list">
        <li className="operation__list-item">– перебои в работе сердца</li>
        <li className="operation__list-item">– приступы тахикардии</li>
        <li className="operation__list-item">
          – эпизоды слабости, головокружения, болей за грудиной на фоне приступа
          сердцебиения
        </li>
        <li className="operation__list-item">
          – потеря сознания на фоне приступа сердцебиения
        </li>
      </ul>
      <h2 className="section__header">
        Противопоказания к операции по шунтированию
      </h2>
      <ul className="operation__list">
        <li className="operation__list-item">
          – Множественное поражение дистального коронарного русла
        </li>
        <li className="operation__list-item">
          – Некорригируемая полиорганная недостаточность, обусловленная
          первичной сердечной недостаточностью
        </li>
        <li className="operation__list-item">
          – Терминальные онкологические заболевания, обострение системных
          заболеваний
        </li>
      </ul>
      <div className="marked-container">
        <p className="operation__p">
          Для проведения вмешательства пациенты госпитализируются в стационар.
          Перед операцией нужно выполнить ряд обследований и сдать перечень
          необходимых анализов. Операция выполняется в условиях
          рентгеноперационной под постоянным контролем врача-анестезиолога и
          мониторированием артериального давления и электрокардиограммы.
        </p>
      </div>
      <h2 className="section__header">
        Процедура (операция) катетерной абляции сердца при тахикардиях
      </h2>
      <p className="operation__p">
        Радиочастотная абляция, как правило, не требует проведения общего
        обезболивания (наркоза). Непосредственно перед аблацией проводится
        инвазивное электрофизиологическое исследование сердца, чтобы определить
        механизм аритмии и ее локализацию. Оно осуществляется с помощью
        диагностических катетеров-электродов, вводимых через крупные вены
        (бедренная, подключичная) или артерии, и позволяющих точно определить
        локализацию «патологического очага» аритмии. Предварительно под местной
        анестезией в эти крупные сосуды вводят гемостатические интродьюсеры
        («трубочки»), которые позволяют защитить сосуд. Электроды доставляют в
        сердце. Всю процедуру проводят под контролем рентгеноскопии. Затем с
        помощью специального «абляционного» электрода проводится «прижигание»
        очага аритмии. Операция в среднем длится около 1,5 часов. Как правило,
        на 1-2-е сутки пациент может быть выписан из стационара.
      </p>
      <h2 className="section__header">
        Радиочастотная абляция аритмогенной зоны способна радикально излечить:
      </h2>
      <ul className="operation__list">
        <li className="operation__list-item">
          – Пароксизмальную атриовентрикулярную узловую re-entry тахикардию
        </li>
        <li className="operation__list-item">
          – Пароксизмальную атриовентрикулярную реципрокную тахикардию с
          участием дополнительного пути проведения (синдром WPW)
        </li>
        <li className="operation__list-item">
          – Пароксизмальную форму типичного, атипичного трепетания предсердий
        </li>
        <li className="operation__list-item">
          – Пароксизмальную, персистирующую, длительно-существующую
          персистирующую форму фибрилляции предсердий (ФП) при отсутствии
          эффекта от проводимой антиаритмической терапии
        </li>
        <li className="operation__list-item">
          – Пароксизмальную предсердную тахикардию
        </li>
        <li className="operation__list-item">– Желудочковую тахикардию</li>
        <li className="operation__list-item">
          – Желудочковые экстрасистолы с клинической симптоматикой
        </li>
      </ul>
      <div className="marked-container text-start">
        <p className="operation__p">
          При выполнении катетерной абляции сердца при аритмиях частота
          осложнений не превышает 1%. С целью профилактики последних проводятся
          все необходимые мероприятия на всех этапах диагностики и лечения.
        </p>
        <br />
        <p className="operation__p">
          Плюсами данного метода является его малотравматичность. Как правило,
          госпитализация не занимает более 3 дней, пациенты достаточно быстро
          возвращаются к обычному образу жизни, и реабилитация не занимает более
          недели. Операции являются высокотехнологичными, для их выполнения
          используются современные дорогостоящие расходные материалы.
        </p>
      </div>
    </section>
  );
}

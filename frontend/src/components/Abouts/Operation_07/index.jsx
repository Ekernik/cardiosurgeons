import React from "react";
import "./index.scss";
import skleroz from "../../../assets/images/ateroskleroz.jpg";

export default function Operation07() {
  return (
    <section className="section__about-op-03 container">
      <h2 className="section__header text-center">О болезни</h2>
      <p className="operation__p">
        <strong>Атеросклероз</strong> - хроническое заболевание артерий
        эластического и мышечно-эластического типа, возникающее вследствие
        нарушения липидного обмена и сопровождающееся отложением холестерина и
        некоторых фракций липопротеидов в интиме сосудов. Отложения формируются
        в виде атероматозных бляшек. Последующее разрастание в них
        соединительной ткани (склероз), и кальционоз стенки сосуда приводят к
        деформации и сужению просвета вплоть до облитерации (закупорки).
        Невозможно назвать одну единственную причину, приводящую к
        атеросклеротической перестройке стенки артерии и формированию
        атеросклеротических бляшек.
      </p>
      <img
        className="operation__img"
        src={skleroz}
        alt="отложения холестерина и некоторых фракций липопротеидов в интиме сосудов."
      />
      <p className="operation__p">
        Большинство исследователей согласны с тем фактом, что в основе
        атеросклероза лежит нарушение обмена жиров (точнее эфиров холестерина)
        на уровне генетической предрасположенности. Известны заболевания
        семейной гиперхолестеринемии (СГ). Это заболевание, вызванное снижением
        скорости удаления липопротеинов низкой плотности (ЛНП) из кровотока
        вследствие мутаций в гене специфического рецептора ЛНП. Семейная
        гиперхолестеринемия, является наиболее распространенным генетическим
        заболеванием вследствие мутации одного гена (моногенное заболевание).
        Современное медицинское научное сообщество, на основании многочисленных
        исследований, считает главными пусковыми механизмами прогрессирования
        атеросклероза (увеличение размера и количества бляшек) факторы риска.
      </p>
      <h2 className="section__header">Факторы риска</h2>
      <ul className='operation__list'>
        <li className='operation__list-item'>– курение (наиболее опасный фактор)</li>
        <li className='operation__list-item'>
          – гиперлипопротеинемия (общий холестерин &gt; 5 ммоль/л, ЛПНП &gt; 3
          ммоль/л, ЛП(a) &gt; 50 мг/дл)
        </li>
        <li className='operation__list-item'>
          – артериальная гипертензия (повышенное артериальное
          давление)(систолическое АД &gt; 140 мм рт.ст. диастолическое АД &gt;
          90 мм рт.ст.)
        </li>
        <li className='operation__list-item'>– сахарный диабет</li>
        <li className='operation__list-item'>– ожирение</li>
        <li className='operation__list-item'>– гиподинамия (малоподвижный образ жизни)</li>
      </ul>
      <div className="marked-container">
        <p className="operation__p">
          К сожалению, пока не существует лекарств, способных «растворить» или
          ликвидировать бляшки в сосудах. Современные препараты могут лишь
          приостановить рост атеросклеротических бляшек и уменьшить вероятность
          образования тромбов. Основным и единственным эффективным методом
          лечения сужений артерий является операция. Многочисленные
          исследования, объединявшие много стран, неоспоримо доказали
          эффективность профилактических хирургических методов в предупреждении
          инсульта. Важно понимать, что хирургическое вмешательство выполняется
          при наличии строгих показаний к операции, и не заменяет собой лечение
          системного атеросклероза.
        </p>
      </div>
      <h2 className="section__header">
        Одним из способов устранения стеноза внутренней сонной артерии является
        операция эверсионной каротидной эндартерэктомии.
      </h2>
      <ul className='operation__list'>
        <li className='operation__list-item'>
          – Под наиболее безопасной анестезией (как правило, это проводниковая
          анестезия местным анестетиком) на шее в области сонной артерии
          производится небольшой разрез (4-6 см)
        </li>
        <li className='operation__list-item'>
          – Под трехкратным увеличением, при помощи специальных инструментов
          артерии отделяются от окружающих структур (нервы, вены)
        </li>
        <li className='operation__list-item'>
          – Производится проверка устойчивости головного мозга ко временному
          пережатию сонной артерии при помощи нескольких методик. Если есть
          малейшее подозрение, что мозг не сможет перенести пережатие сонной
          артерии - устанавливается специальный временный шунт, обеспечивающий
          кровоснабжение бассейна оперируемой артерии. Артерии пережимаются
        </li>
        <li className='operation__list-item'>
          – Внутренняя сонная артерия рассекается поперечно и наружный слой
          артерии выворачивается с бляшки подобно снятию чулка с ноги, после
          чего атеросклеротическая бляшка извлекается из сосуда вместе с
          внутренним слоем
        </li>
        <li className='operation__list-item'>
          – Тщательно удаляются все свободно лежащие в просвете сосуда остатки
          бляшки и наружный слой артерии возвращается в прежнее положение
        </li>
        <li className='operation__list-item'>
          – Целостность сосуда восстанавливается непрерывным швом. Нити,
          используемые для швов, тоньше 1/10 мм, не рассасывающиеся
        </li>
        <li className='operation__list-item'>
          – После завершения наложения шва из артерии выпускается воздух и
          кровоток восстанавливается. После проверки швов на герметичность и
          отсутствии источников кровотечения производится послойное ушивание
          раны косметическим швом
        </li>
      </ul>
      <p className="operation__p">
        На протяжении всей операции пациент остается в сознании, обязательно
        поддерживается речевой и зрительный контакт. Продолжительность всей
        операции 1-2 часа, в послеоперационном периоде длительного наблюдения и
        лечения в отделении реанимации не требуется. Периоперационный протокол в
        нашем учреждении позволяет выписывать пациентов на следующий день после
        операции, что благоприятно сказывается на ранней реабилитации и
        препятствует появлению инфекционных осложнений.
      </p>
      <h2 className="section__header">
        Как получить услугу эверсионной каротидной эндартерэктомии (удаление
        бляшек сонной артерии)
      </h2>
      <p className="operation__p">
        Показания к хирургическому лечению атеросклероза внутренних сонных
        артерий определяет врач сердечно-сосудистый хирург, однако, для
        успешного выполнения операции и минимизации риска осложнений, необходимо
        слаженное взаимодействие невролога, кардиолога, анестезиолога. В нашем
        учреждении работает именно такая команда профессионалов, готовых помочь
        каждому пациенту в борьбе с сердечно-сосудистыми заболеваниями.
        Записавшись на прием к сердечно-сосудистому хирургу клиники вы получите
        исчерпывающую информацию о методах современной диагностики и лечения
        заболеваний сонных артерий, определите необходимость и сроки
        хирургического вмешательства. Применяемые современные технологии, опыт
        наших специалистов помогут в избавлении от сужения сонных артерий,
        профилактике инсультов и сохранении активной и полноценной жизни.{" "}
      </p>
    </section>
  );
}

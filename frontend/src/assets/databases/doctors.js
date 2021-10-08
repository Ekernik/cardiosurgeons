// Фотографии заглушки
import img_doctor_woman from "../svg/doctor_woman.svg";

// Фотографии докторов
import img_Shmatov from "../images/doctors/doctor_Shmatov.jpg";
import img_Stolyarov from "../images/doctors/doctor_Stolyarov.jpg";
import img_Kamenskih from "../images/doctors/doctor_Kamenskih.jpg";
import img_Balahonov from "../images/doctors/doctor_Balahonov.jpg";
import img_Kim from "../images/doctors/doctor_Kim.jpg";
import img_Vasilev from "../images/doctors/doctor_Vasilev.jpg";
import img_Sorokin from "../images/doctors/doctor_Sorokin.jpg";
import img_Kappushev from "../images/doctors/doctor_Kappushev.jpg";
import img_Zubarev from "../images/doctors/doctor_Zubarev.jpg";
import img_Sheremet from "../images/doctors/doctor_Sheremet.jpg";

const doctors = [
  {
    id: "d_1",
    name: "Шматов Дмитрий Викторович",
    title:
      "Руководитель Центра кардиохирургии и интервенционной кардиологии, заместитель директора по медицинской части (кардиохирургия), д.м.н.",
    img: img_Shmatov,
    alt: "Доктор Шматов Дмитрий Викторович",
    link: "/team/doctor_shmatov",
  },
  {
    id: "d_2",
    name: "Столяров Максим Станиславович",
    title: "Заведующий кардиохирургическим отделением, к.м.н.",
    img: img_Stolyarov,
    alt: "Доктор Столяров Максим Станиславович",
    link: "/team/doctor_stolyarov",
  },
  {
    id: "d_3",
    name: "Каменских Максим Сергеевич",
    title: "Врач кардиохирург",
    img: img_Kamenskih,
    alt: "Доктор Каменских Максим Сергеевич",
    link: "/team/doctor_kamenskih",
  },
  {
    id: "d_4",
    name: "Балахонов Василий Васильевич",
    title: "Врач сердечно-сосудистый хирург, к.м.н.",
    img: img_Balahonov,
    alt: "Доктор Балахонов Василий Васильевич",
    link: "/team/doctor_balahonov",
  },
  {
    id: "d_5",
    name: "Ким Глеб Ирламович",
    title: "Врач сердечно-сосудистый хирург, к.м.н.",
    img: img_Kim,
    alt: "Доктор Ким Глеб Ирламович",
    personaLinks: [
      "Направление деятельности",
      "Профессиональный опыт",
      "Врачебная деятельность",
      "Образование",
      "Повышение квалификации",
      "Сертификаты",
    ],
    personaDetails: [
      [
        "Реконструктивная хирургия аорты, клапаносберегающие операции.",
        "Реконструктивная хирургия митрального клапана.",
        "Механическая поддержка кровообращения и трансплантация сердца.",
        "Мини-инвазивная хирургия.",
        "Базы данных, регистры и разработка экспертных систем.",
        "Экспериментальная медицина.",
      ],
      [
        "Член рабочей группы в рамках мультицентрового исследования «EuroSCORE 2010», 2009 - 2010 гг.",
        "Руководитель инновационного научно-технического проекта «Разработка нового синтетического корня аорты» в рамках программы «У.М.Н.И.К.», научный руководитель: к.м.н. Болдырев С.Ю.",
        "Руководитель комитета по спортивной работе и консультант комитета молодых ученых при Совете обучающихся и молодых ученых ФГБУ «НМИЦ им. В. А. Алмазова».",
        "Самостоятельное выполнение стернотомий и остеосинтезов грудины, выделение магистральных и периферических сосудов для канюляции, подключение и отключение аппарата искусственного кровообращения, выделение аутографтов для шунтирования (ЛВГА и ПВГА, лучевые артерии, БПВ, включая эндоскопические и мини-инвазивные методики), выполнение рестернотомий, фенестраций перикарда, установка вакуумно-аспирационных систем дренирования гнойных ран.",
        "Работа в качестве I и II ассистента на плановых и экстренных кардиохирургических операциях:МКШ/АКШ на ИК или на работающем сердце из стандартных и мини-доступов, эндартерэктомия и шунт-пластика; Операция Dor и линейная пластика при аневризмах ЛЖ; Первичные и повторные, плановые и экстренные: протезирование аортального клапана, пластика и протезирование митрального клапана, пластика и протезирование трикуспидального клапана, многоклапанная коррекция +/- редукция - ремоделирование предсердий, из стандартного и мини-доступов;Эксплантация и имплантация сердца донора; Установка ВАБК, левожелудочкового обхода, ЭКМО;",
        "Плановые и экстренные вмешательства на восходящем отделе и дуге аорты: операция David (различные модификации), операция Bentall - De Bono, супракоронарное протезирование восходящей аорты, операция Wolfe, раздельное протезирование АК и ВА, аорторафия или экзопротезирование, протезирование дуги по типу hemiarch и total arch (+/-elephant trunk);",
        "Миксомэктомия; Радикальная коррекция ВПС: ЧАДЛВ, ДМПП, ОАП;",
        "Симультанные операции (совместно с сосудистыми или торакальными операциями);",
        "Работа в качестве I и II ассистента на операциях: каротидная ЭАЭ, ЭАЭ из артерий нижних конечностей, АББШ, БПШ, флебэктомия из стандартных и  мини-доступов; открытых и эндоскопических, плановых и экстренных торакальных, абдоминальных, урологических (включая трансплантацию почек) и травматологических/ортопедических операциях, плановых и экстренных операциях в гнойной хирургии (включая ампутации конечностей) и амбулаторной хирургии.",
        "Предоперационный осмотр и послеоперационное ведение пациентов с сердечно-сосудистой патологией и смежными заболеваниями в плановом и экстренном порядке. Консультации пациентов в послеоперационном периоде и анализ результатов работы отделения.",
        "Работа в качестве дежурного хирурга и кардиохирурга. Дежурства в ПИТ, реанимационные мероприятия.",
        "Представление научных работ на конференциях и публикации в периодических изданиях.",
      ],
      [
        "С 2018 г. по настоящее время - Врач-сердечно-сосудистый хирург Центра кардиохирургии и интервенционной кардиологии.",
        "2016 - 2018 гг. - Врач-сердечно-сосудистый хирург отделения сердечно-сосудистой хирургии, ФГБУ  «Национальный медицинский исследовательский центр им. В.А. Алмазова», г. Санкт-Петербург.",
        "2015-2016 гг. - Врач-сердечно-сосудистый хирург НИИ хирургии и неотложной медицины, ПСПбГМУ им. акад. И. П. Павлова, г. Санкт-Петербург.",
      ],
      [
        "С 2015 г. по настоящее время - Аспирантура. ФГБУ «Национальный медицинский исследовательский центр им. В. А. Алмазова». Специальность «Сердечно-сосудистая хирургия». Тема диссертации: «Сохранение аортального клапана при хирургическом лечении расслоения восходящего отдела аорты».",
        "2012 - 2014 гг. - Клиническая ординатура. Кубанский государственный медицинский университет, г. Краснодар. Специальность «Сердечно-сосудистая хирургия».",
        "2011 - 2012 гг. - Интернатура. Санкт-Петербургский государственный университет. Медицинский факультет, г. Санкт-Петербург. Специальность «Хирургия».",
        "2005 -2011 гг. -  Высшее профессиональное образование: Санкт-Петербургский государственный университет. Медицинский факультет. Квалификация: врач. Специальность: лечебное дело.",
      ],
      [
        "2014 г. - СЗГМУ им. И. И. Мечникова, г. Санкт-Петербург, «Лечебная и адаптивная физическая культура в среднем и пожилом возрасте».",
        "2018 г. - ФГБУ «НМИЦ им. В. А. Алмазова», г. Санкт-Петербург, направление «Клиническая эхокардиография».",
      ],
      [
        "Сердечно-сосудистая хирургия. Годен до 02.10.2024. Выдан: СЗГМУ им. И. И. Мечникова.",
      ],
    ],
  },
  {
    id: "d_6",
    name: "Васильев Алексей Сергеевич",
    title:
      "Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения",
    img: img_Vasilev,
    alt: "Доктор Васильев Алексей Сергеевич",
    personaLinks: [],
    personaDetails: [],
  },
  {
    id: "d_7",
    name: "Сорокин Андрей Александрович",
    title:
      "Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения",
    img: img_Sorokin,
    alt: "Доктор Сорокин Андрей Александрович",
    link: "/team/doctor_sorokin",
    personaLinks: [],
    personaDetails: [],
  },
  {
    id: "d_8",
    name: "Каппушев Руслан Юсуфович",
    title:
      "Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения",
    img: img_Kappushev,
    alt: "Доктор Каппушев Руслан Юсуфович",
    personaLinks: [],
    personaDetails: [],
  },
  {
    id: "d_9",
    name: "Зубарев Евгений Игоревич",
    title: "Врач сердечно-сосудистый хирург, аритмолог, к.м.н.",
    img: img_Zubarev,
    alt: "Доктор Зубарев Евгений Игоревич",
    personaLinks: [
      "Направление деятельности",
      "Врачебная деятельность",
      "Образование",
      "Повышение квалификации",
      "Сертификат",
      "Членство",
    ],
    personaDetails: [
      [
        "Интервенционное лечение нарушений ритма сердца и проводимости:",
        "Катетерная аблация, в том числе в условиях 3D навигационного картирования,  при нарушениях ритма сердца,",
        "синдром WPW,",
        "предсердная тахикардия,",
        "ПРАВУТ,",
        "пароксизмальная/персистирующая фибрилляция предсердий,",
        "трепетание предсердий,",
        "инцизионные тахикардии,",
        "желудочковые аритмии (желудочковая экстрасистолия, желудочковая тахикардия).",
        "имплантация электрокардиостимуляторов, кардиовертеров-дефибрилляторов (ИКД), систем кардиоресинхронизирующей терапии (CRT-P, CRT-D) систем кардиомодулирующей терапии (CCM), устройств длительного мониторирования ЭКГ.",
      ],
      [
        "2018 г. по настоящее время - Сердечно-сосудистый хирург кардиохирургического отделения с кабинетом рентген-эндоваскулярной диагностики и лечения.",
        "2009-2018 гг. - Сердечно-сосудистый хирург - Национальный Медицинский Исследовательский Центр им. В. А. Алмазова. Отделение рентгенохирургического лечения сложных нарушений ритма сердца и электрокардиостимуляции.",
        "2007-2009 гг. - Врач скорой помощи.Городская поликлиника № 114 (СПб).Отделение скорой и неотложной медицинской помощи.",
      ],
      [
        "2009-2012 гг. - Аспирантура по специальности «сердечно-сосудистая хирургия». Федеральный Центр Сердца, Крови и Эндокринологии им. В. А. Алмазова.  Кандидат медицинских наук,тема диссертационного исследования: «Оптимизация интервенционного лечения больных с хронической сердечной недостаточностью».",
        "2007-2009 гг. - Ординатура. Федеральный Центр Сердца, Крови и Эндокринологии им. В. А. Алмазова. Отделение рентген-хирургии аритмий и электрокардиостимуляции. Специальность «сердечно-сосудистая хирургия»",
        "2006-2007 гг. - Интернатура по специальности «хирургия». Санкт-Петербургский Государственный Медицинский Университет им.акад. И. П. Павлова. Кафедра госпитальной хирургии № 2.",
        "2000-2006 гг. - Высшее профессиональное образование: Санкт-Петербургский Государственный Медицинский Университет им.акад. И. П. Павлова. Квалификация: врач. Специальность:лечебное дело.",
      ],
      [
        "2016 г. - ФГБУ «Северо-Западный Федеральный Медицинский Исследовательский Центр им.В. А. Алмазова». Good Clinical Practice.",
        "2016 г. - ФГБУ «Северо-Западный Федеральный Медицинский Исследовательский Центр им. В. А. Алмазова». Радиационная безопасность при лучевых исследованиях (повышение квалификации).",
        "2015 г. – Medtronic. Преодоление трудностей при программировании ИКД.",
        "2014 г. - ФГБУ «Федеральный Медицинский Исследовательский Центр им.В. А. Алмазова».Избранные вопросы сердечно-сосудистой хирургии (повышение квалификации).",
        "2012 г. - Союз Педиатров России, Научный центр здоровья детей РАМН. Научное планирование, статистическая обработка данных и представление результатов клинических исследований.",
        "2010 г. - Biotronik (Germany) «CRT-Follow-UP».",
        "2010 г. – Medtronic. Сердечная ресинхронизирующая терапия для имплантирующих врачей.",
        "2009 г. – Medtronic. Имплантируемые кардиовертеры-дефибрилляторы компании Medtronic: базовый курс для врачей.",
        "2007 г. - Научный Центр Сердечно-сосудистой Хирургии им. А. Н. Бакулева. Российская школа-семинар по клинической электрофизиологии, интервенционной и хирургической аритмологии.",
      ],
      [
        'Сердечно-сосудистая хирургия. Годен до 09.12.2024. Выдан: ФГБУ "ФМИЦ им В.А. Алмазова".',
      ],
      [
        "Член Европейской ассоциации ритма сердца (EHRA),",
        "Член Европейского общества кардиологов (ESC),",
        "Член Всероссийского общества специалистов по клинической электрофизиологии, интервенционной и хирургической аритмологии (ВНОА),",
        "Член Российского кардиологического общества (РКО)",
      ],
    ],
  },
  {
    id: "d_10",
    name: "Шеремет Антон Андреевич",
    title: "Врач сердечно-сосудистый хирург, аритмолог",
    img: img_Sheremet,
    alt: "Доктор Шеремет Антон Андреевич",
    personaLinks: [],
    personaDetails: [],
  },
  {
    id: "d_11",
    name: "Котова Анна Сергеевна",
    title: "Врач-кардиолог Центра кардиохирургии и интервенционной кардиологии",
    img: img_doctor_woman,
    alt: "Доктор Котова Анна Сергеевна",
    link: "/team/doctor_kotova",
    personaLinks: ["Врачебная деятельность"],
    personaDetails: [],
  },

  // id: 4,
  // name: 'Михеева Ксения Юрьевна',
  // title: 'Врач-кардиолог Центра кардиохирургии и интервенционной кардиологии',
  // img: img_Miheeva,
  // alt: 'Доктор Михеева Ксения Юрьевна',
  // personaLinks: [],
  // personaDetails: [[],[]],
];

export default doctors;

// Фотографии заглушки
import img_doctor_woman from '../svg/doctor_woman.svg';

// Фотографии докторов
import img_Shmatov from '../images/doctors/doctor_Shmatov.jpg';
import img_Stolyarov from '../images/doctors/doctor_Stolyarov.jpg';
import img_Kamenskih from '../images/doctors/doctor_Kamenskih.jpg';
import img_Balahonov from '../images/doctors/doctor_Balahonov.jpg';
import img_Kim from '../images/doctors/doctor_Kim.jpg';
import img_Vasilev from '../images/doctors/doctor_Vasilev.jpg';
import img_Sorokin from '../images/doctors/doctor_Sorokin.jpg';
import img_Kappushev from '../images/doctors/doctor_Kappushev.jpg';
import img_Zubarev from '../images/doctors/doctor_Zubarev.jpg';
import img_Sheremet from '../images/doctors/doctor_Sheremet.jpg';
import img_Pyagai from '../images/doctors/doctor_Pyagai.jpg';
import img_Asadullin from '../images/doctors/doctor_Asadullin.jpg';
import img_Starosockaya from '../images/doctors/doctor_Starosockaya.jpg';
import img_Suhanova from '../images/doctors/doctor_Suhanova.jpg';
import img_Povarenkina from '../images/doctors/doctor_Povarenkina.jpg';

export const doctorsArr = {
  shmatov: 0,
  stolyarov: 1,
  kamenskih: 2,
  balahonov: 3,
  kim: 4,
  vasilev: 5,
  sorokin: 6,
  kappushev: 7,
  zubarev: 8,
  sheremet: 9,
  pyagai: 10,
  asadullin: 11,
  starosockaya: 12,
  suhanova: 13,
  povarenkina: 14,
  kotova: 15,
};

export const doctors = [
  // Шматов Дмитрий Викторович
  {
    id: 'd_1',
    name: 'Шматов Дмитрий Викторович',
    name_about_who: 'Шматове Дмитрии Викторовиче',
    name_whos: 'Шматова Дмитрия Викторовича',
    shortname: 'shmatov',
    title: [
      'Руководитель Центра кардиохирургии и интервенционной кардиологии,',
      'заместитель директора по медицинской части (кардиохирургия),',
      'доктор медицинских наук',
    ],
    img: img_Shmatov,
    alt: 'Доктор Шматов Дмитрий Викторович',
    link: '/team/doctor_shmatov',
  },

  // Столяров Максим Станиславович
  {
    id: 'd_2',
    name: 'Столяров Максим Станиславович',
    name_about_who: 'Столярове Максиме Станиславовиче',
    name_whos: 'Столярова Максима Станиславовича',
    shortname: 'stolyarov',
    title: [
      'Заведующий кардиохирургическим отделением,',
      'кандидат медицинских наук',
    ],
    img: img_Stolyarov,
    alt: 'Доктор Столяров Максим Станиславович',
    link: '/team/doctor_stolyarov',
  },

  // Каменских Максим Сергеевич
  {
    id: 'd_3',
    name: 'Каменских Максим Сергеевич',
    name_about_who: 'Каменских Максиме Сергеевиче',
    name_whos: 'Каменских Максима Сергеевича',
    shortname: 'kamenskih',
    title: ['Кардиохирург'],
    img: img_Kamenskih,
    alt: 'Доктор Каменских Максим Сергеевич',
    link: '/team/doctor_kamenskih',
  },

  // Балаховнов Василий Васильевич
  {
    id: 'd_4',
    name: 'Балахонов Василий Васильевич',
    title: ['Сердечно-сосудистый хирург,', 'кандидат медицинских наук'],
    img: img_Balahonov,
    alt: 'Доктор Балахонов Василий Васильевич',
    link: '/team/doctor_balahonov',
  },

  // Ким Глеб Ирламович
  {
    id: 'd_5',
    name: 'Ким Глеб Ирламович',
    title: ['Сердечно-сосудистый хирург,', 'кандидат медицинских наук'],
    img: img_Kim,
    alt: 'Доктор Ким Глеб Ирламович',
    link: '/team/doctor_kim',
  },

  // Васильев Алексей Сергеевич
  {
    id: 'd_6',
    name: 'Васильев Алексей Сергеевич',
    name_about_who: 'Васильеве Алексее Сергеевиче',
    name_whos: 'Васильева Алексея Сергеевича',
    shortname: 'vasilev',
    title: [
      'Сердечно-сосудистый хирург,',
      'специалист по рентгенэндоваскулярным методам диагностики и лечения',
    ],
    img: img_Vasilev,
    alt: 'Доктор Васильев Алексей Сергеевич',
    link: '/team/doctor_vasilev',
  },

  // Сорокин Андрей Александрович
  {
    id: 'd_7',
    name: 'Сорокин Андрей Александрович',
    name_about_who: 'Сорокине Андрее Александровиче',
    name_whos: 'Сорокина Андрея Александровича',
    shortname: 'sorokin',
    title: ['Сердечно-сосудистый хирург,', 'интервенционный радиолог'],
    img: img_Sorokin,
    alt: 'Доктор Сорокин Андрей Александрович',
    link: '/team/doctor_sorokin',
  },

  // Каппушев Руслан Юсуфович
  {
    id: 'd_8',
    name: 'Каппушев Руслан Юсуфович',
    title: [
      'Сердечно-сосудистый хирург,',
      'специалист по рентгенэндоваскулярным методам диагностики и лечения',
    ],
    img: img_Kappushev,
    alt: 'Доктор Каппушев Руслан Юсуфович',
    link: '/team/doctor_kappushev',
  },

  // Зубарев Евгений Игоревич
  {
    id: 'd_9',
    name: 'Зубарев Евгений Игоревич',
    name_about_who: 'Зубареве Евгении Игоревиче',
    name_whos: 'Зубарева Евгения Игоревича',
    shortname: 'zubarev',
    title: [
      'Сердечно-сосудистый хирург,',
      'аритмолог,',
      'кандидат медицинских наук',
    ],
    img: img_Zubarev,
    alt: 'Доктор Зубарев Евгений Игоревич',
    link: '/team/doctor_zubarev',
  },

  // Шеремет Антон Андреевич
  {
    id: 'd_10',
    name: 'Шеремет Антон Андреевич',
    name_about_who: 'Шеремете Антоне Андреевиче',
    name_whos: 'Шеремета Антона Андреевича',
    shortname: 'sheremet',
    title: ['Сердечно-сосудистый хирург,', 'аритмолог'],
    img: img_Sheremet,
    alt: 'Доктор Шеремет Антон Андреевич',
    link: '/team/doctor_sheremet',
  },

  // Пягай Виктор Александрович
  {
    id: 'd_11',
    name: 'Пягай Виктор Александрович',
    title: ['Сердечно-сосудистый хирург'],
    img: img_Pyagai,
    alt: 'Доктор Пягай Виктор Александрович',
    link: '/team/doctor_pyagai',
  },

  // Асадуллин Ильшат Шамилевич
  {
    id: 'd_12',
    name: 'Асадуллин Ильшат Шамилевич',
    name_about_who: 'Асадуллине Ильшате Шамилевиче',
    name_whos: 'Асадуллина Ильшата Шамилевича',
    shortname: 'asadullin',
    title: ['Сердечно-сосудистый хирург'],
    img: img_Asadullin,
    alt: 'Доктор Асадуллин Ильшат Шамилевич',
    link: '/team/doctor_asadullin',
  },

  // Старосоцкая Мария Владимировна
  {
    id: 'd_13',
    name: 'Старосоцкая Мария Владимировна',
    name_about_who: 'Старосоцкой Марии Владимировне',
    name_whos: 'Старосоцкой Марии Владимировны',
    shortname: 'starosockaya',
    title: ['Кардиолог,', 'кандидат медицинских наук'],
    img: img_Starosockaya,
    alt: 'Доктор Старосоцкая Мария Владимировна',
    link: '/team/doctor_starosockaya',
  },

  // Суханова Ольга Викторовна
  {
    id: 'd_14',
    name: 'Суханова Ольга Викторовна',
    name_about_who: 'Сухановой Ольге Викторовне',
    name_whos: 'Сухановой Ольги Викторовны',
    shortname: 'suhanova',
    title: ['Кардиолог'],
    img: img_Suhanova,
    alt: 'Доктор Суханова Ольга Викторовна',
    link: '/team/doctor_suhanova',
  },

  // Поварёнкина Вера Валерьевна
  {
    id: 'd_15',
    name: 'Поварёнкина Вера Валерьевна',
    name_about_who: 'Поварёнкиной Вере Валерьевне',
    name_whos: 'Поварёнкиной Веры Валерьевны',
    shortname: 'povarenkina',
    title: ['Кардиолог'],
    img: img_Povarenkina,
    alt: 'Доктор Поварёнкина Вера Валерьевна',
    link: '/team/doctor_povarenkina',
  },
  {
    id: 'd_16',
    name: 'Котова Анна Сергеевна',
    name_about_who: 'Котове Анне Сергеевне',
    name_whos: 'Котовой Анны Сергеевны',
    shortname: 'kotova',
    title: ['Кардиолог'],
    img: img_doctor_woman,
    alt: 'Доктор Котова Анна Сергеевна',
    link: '/team/doctor_kotova',
    personaLinks: ['Врачебная деятельность'],
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

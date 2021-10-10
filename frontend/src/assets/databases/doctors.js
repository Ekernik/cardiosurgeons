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

const doctors = [
  { // Шматов Дмитрий Викторович 
    id: 'd_1',
    name: 'Шматов Дмитрий Викторович',
    title:
      'Руководитель Центра кардиохирургии и интервенционной кардиологии, заместитель директора по медицинской части (кардиохирургия), д.м.н.',
    img: img_Shmatov,
    alt: 'Доктор Шматов Дмитрий Викторович',
    link: '/team/doctor_shmatov',
  },
  { // Столяров Максим Станиславович
    
    id: 'd_2',
    name: 'Столяров Максим Станиславович',
    title: 'Заведующий кардиохирургическим отделением, к.м.н.',
    img: img_Stolyarov,
    alt: 'Доктор Столяров Максим Станиславович',
    link: '/team/doctor_stolyarov',
  },
  { // Каменских Максим Сергеевич
    id: 'd_3',
    name: 'Каменских Максим Сергеевич',
    title: 'Врач кардиохирург',
    img: img_Kamenskih,
    alt: 'Доктор Каменских Максим Сергеевич',
    link: '/team/doctor_kamenskih',
  },
  { // Балаховнов Василий Васильевич
    id: 'd_4',
    name: 'Балахонов Василий Васильевич',
    title: 'Врач сердечно-сосудистый хирург, к.м.н.',
    img: img_Balahonov,
    alt: 'Доктор Балахонов Василий Васильевич',
    link: '/team/doctor_balahonov',
  },
  { // Ким Глеб Ирламович
    id: 'd_5',
    name: 'Ким Глеб Ирламович',
    title: 'Врач сердечно-сосудистый хирург, к.м.н.',
    img: img_Kim,
    alt: 'Доктор Ким Глеб Ирламович',
    link: '/team/doctor_kim'
  },
  { // Васильев Алексей Сергеевич
    id: 'd_6',
    name: 'Васильев Алексей Сергеевич',
    title:
      'Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения',
    img: img_Vasilev,
    alt: 'Доктор Васильев Алексей Сергеевич',
    link: '/team/doctor_vasilev'
  },
  { // Сорокин Андрей Александрович
    id: 'd_7',
    name: 'Сорокин Андрей Александрович',
    title:
      'Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения',
    img: img_Sorokin,
    alt: 'Доктор Сорокин Андрей Александрович',
    link: '/team/doctor_sorokin',
  },
  { // Каппушев Руслан Юсуфович
    id: 'd_8',
    name: 'Каппушев Руслан Юсуфович',
    title:
      'Врач сердечно-сосудистый хирург, специалист по рентгенэндоваскулярным методам диагностики и лечения',
    img: img_Kappushev,
    alt: 'Доктор Каппушев Руслан Юсуфович',
    link: '/team/doctor_kappushev'
  },
  { // Зубарев Евгений Игоревич
    id: 'd_9',
    name: 'Зубарев Евгений Игоревич',
    title: 'Врач сердечно-сосудистый хирург, аритмолог, к.м.н.',
    img: img_Zubarev,
    alt: 'Доктор Зубарев Евгений Игоревич',
    link: '/team/doctor_zubarev'
  },
  {
    id: 'd_10',
    name: 'Шеремет Антон Андреевич',
    title: 'Врач сердечно-сосудистый хирург, аритмолог',
    img: img_Sheremet,
    alt: 'Доктор Шеремет Антон Андреевич',
    personaLinks: [],
    personaDetails: [],
  },
  {
    id: 'd_11',
    name: 'Котова Анна Сергеевна',
    title: 'Врач-кардиолог Центра кардиохирургии и интервенционной кардиологии',
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

export default doctors;

const REVIEWS = [
  {
    id: 1,
    author: 'Митина Анна',
    city: 'Брянская область, г. Карачев',
    doctors: ['kamenskih', 'shmatov'],
    message: [
      'Мне операцию сделали два врача Каменских М.С. и Шматов Д.В. Я благодаря этим двум врачам и всем остальным, которые выполняют свой нелегкий труд. Это очень благородная Ваша профессия, когда вы вытаскиваете людей из трудной болезни. Всех сестер я не могу перечислить, но девочки медицинские работники очень хорошие, внимательные, уважительные.Младший персонал довольно внимательные и хорошо относятся к больным',
    ],
    date: '',
    readmore: true,
  },

  {
    id: 2,
    author: 'Шалагин А.Л.',
    city: 'Тверская область, г. Калязин',
    doctors: [],
    message: [
      'Пребывание в стационаре было комфортным, лечение эффективным. Всем персоналом доволен.',
    ],
    date: '',
    readmore: false,
  },
  {
    id: 3,
    author: 'Иванов Владимир',
    city: 'г. Псков',
    doctors: ['kotova'],
    message: [
      'Очень внимательный персонал, вежливые и отзывчивые. Всегда поддерживается идеальная чистота. Профессиональные врачи с большим опытом работы. Хирурги поражают своим мастерством. Все на высшем уровне. Огромное спасибо за оказанную помощь. Самый замечательный лечащий врач Котова Анна Сергеевна',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 4,
    author: '',
    city: '-',
    doctors: ['sheremet', 'zubarev'],
    message: [
      'Я хочу выразить благодарность нашим Российским хирургам Шеремету Антону Андреевичу и Зубареву Андрею Игоревичу свою благодарность за свою преданность своему врачебному долгу и заботе о самом простом народе. И большая благодарность всем медсестрам и всему младшему персоналу за их заботу о нас, когда мы находимся в непростой жизненной ситуации.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 5,
    author: 'Чирков Виктор',
    city: 'г. Брянск',
    doctors: [],
    message: [
      'Все приемы проходили на высшем уровне, все медработники, в том числе младший персонал. Лечащий врач на обходе спрашивал о состоянии здоровья и делал необходимые выводы.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 6,
    author: 'Васицкая Н.Н.',
    city: 'Ульяновская область',
    doctors: ['shmatov'],
    message: [
      'Выражаю искреннюю благодарность руководству Клиники высоких медицинских технологий им. Н.И.Пирогова СПбГУ в лице заместителя директора, кардиохирурга д.м.н Шматова Дмитрия Викторовича, за профессионализм и высокий уровень организации лечебно-диагностического процесса Центра кардиохирургии',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 7,
    author: 'Олемская К.А.',
    city: 'г. Мурманск',
    doctors: ['sorokin'],
    message: [
      'Очень благодарна врачу Сорокину Андрею Александровичу за его чуткость, внимательность к пациентам. Хочу также поблагодарить медсестер и врачей гемодиализного отделения за доброту и поддержку пациентов. И еще большое спасибо медперсоналу всего отделения за очень хорошее отношение к больным. Спасибо всем большое!',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 8,
    author: 'Лабутина В.В.',
    city: 'г. Череповец',
    doctors: ['aliev', 'kotova'],
    message: [
      'Центр кардиохирургии и инновационной кардиологии очень понравился. Чистые, светлые палаты, удобные кровати и тумбочки. Но самое главное: здесь прекрасные специалисты, знающие свое дело и переживающие за своих пациентов. Особенно хочется отметить работу кардиолога Котовой Анны Сергеевны, хирурга Алиева Сергея Васильевича и медицинской сестры Михайловской Юлии Викторовны. Этим людям не страшно доверить свою жизнь, они сделают все чтобы помочь пациенту. Огромное им спасибо и низкий поклон. Если бы по всей стране были такие клиники и врачи, то население страны было бы в два раза больше.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 9,
    author: 'Захаров Н.Г.',
    city: 'г. Череповец',
    doctors: [],
    message: [
      'Отзывчивые и высококвалифицированные работники, желающие здоровья пациентам, служат в этом Центре. Хорошая организация лечения. Вере Васильевне - отдельное спасибо. С уважением, Захаров.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 10,
    author: 'Алфеева С.Ф.',
    city: 'г. Кострома',
    doctors: ['lebeda'],
    message: [
      'Спасибо всем сотрудникам кардиохирургического отделения за их заботу. Но особенно хочется поблагодарить Лебеду Марину Владимировну за добродушие, за понимание, за терпение. Здорово, когда любят свою работу! Марина Владимировна, здоровья вам, счастья и успехов в вашем нелегком труде. Низкий поклон вам, от всего сердца. Заслуженная артистка России - Алфеева С.Ф.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 11,
    author: 'Говорова М.Н.',
    city: 'г. Вологда',
    doctors: ['suhanova', 'sorokin'],
    message: [
      'Выражаю искреннюю благодарность всем сотрудникам кардиохирургического отделения. Особенно врача-кардиолога Суханову Ольгу Викторовну; м/с Лебедовой М.В.; м/с Юшиной Т.А.; м/с Михайловской Ю.В.; врача Сорокина Андрея Александровича. Желаю всем сотрудникам отделения: здоровья, счастья, успехов в титаническом труде.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 12,
    author: 'Чугунова Н.А и Пьянкова В.Ш.',
    city: '-',
    doctors: ['vasilev', 'sorokin', 'stolyarov', 'kotova', 'povarenkina'],
    message: [
      'Выражаем огромную благодарность всем сотрудникам кардиохирургического отделения: кардиохирургам Васильеву А.С., Сорокину А.Л., всем операционным медсестрам, анестезиологам, заведующему Столярову М.С., всем постовым медсестрам, кухонным рабочим, санитаркам, процедурным медсестрам, врачам функциональной диагностике,  а также всем врачам-кардиологам отделения, особенно Котовой А.С. и Поваренкиной В.В. Спасибо за этот нелегкий труд, за спасение человеческих сердец и жизней, за высокий профессионализм! И, конечно, благодарных и послушных, и как можно меньше тяжелых пациентов!',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 13,
    author: 'Пациенты 11 палаты',
    city: '-',
    doctors: [
      'zubarev',
      'sheremet',
      'vasilev',
      'stolyarov',
      'starosockaya',
      'suhanova',
    ],
    message: [
      'Выражаем огромную благодарность сотрудникам отделения кардиохирургии: кардиохирургу Зубареву Евгению Игоревичу; Шереметову Антону Андреевичу; Васильеву Алексею Сергеевичу; Столярову Максиму Станиславовичу',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 14,
    author: 'Христафор Д.',
    city: 'г. Мурманск',
    doctors: ['sorokin'],
    message: [
      'Спасибо из Мурманска всему персоналу, кардио-хирургическому отделению, приезжал устанавливать фистулу из Мурманска. Очень отзывчивый персонал, все чисто, четко, отлажено, много можно говорить, но главное это делать.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 15,
    author: 'Вааг И.Ф.',
    city: 'пос. Вырица, Ленинградская область',
    doctors: ['zubarev'],
    message: [
      'Я - Вааг Ирма Фридриховна хочу сказать огромное спасибо Зубареву Евгению Игоревичу за его талант оперировать больных. Мне он тоже сделал 07.12.21г (сделал мне) операцию и тем самым продлил мне жизнь, как говорят, на 10 лет. Я просто счастлива. Мне сейчас 73 года + 10 лет.',
    ],
    date: '',
    readmore: true,
  },
  {
    id: 16,
    author: 'Лебедев В.К.',
    city: 'Вологодская обл, г. Вологда',
    doctors: [],
    message: [
      'Хочу от всей души поблагодарить весь мед персонал. Я не знал, что так могут работать врачи. Это небо и земля. Все аккуратно, без суеты. Все расскажут, что спросишь. Очень доволен.',
    ],
    date: '28.01.22',
    readmore: true,
  },
  {
    id: 17,
    author: 'София Б.',
    city: 'п. Судиславль, Костромская область',
    doctors: ['asadullin'],
    message: [
      'От всего сердца благодарна бригаде хирургов, реаниматологов и кардиологов, спасших дважды меня от смерти. Работникам реанимации, медицинскому персоналу, интернам всем низкий поклон и большое человеческое спасибо.',
    ],
    date: '04.02.22',
    readmore: true,
  },
  {
    id: 18,
    author: 'Алевтина Д.',
    city: 'Ставропольский край',
    doctors: [],
    message: [
      'От всего сердца благодарна бригаде хирургов, реаниматологов и кардиологов, спасших дважды меня от смерти. Работникам реанимации, медицинскому персоналу, интернам всем низкий поклон и большое человеческое спасибо.',
    ],
    date: '23.02.22',
    readmore: true,
  },
];

export default REVIEWS;

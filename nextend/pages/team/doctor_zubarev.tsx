import Image from 'next/image';
import Link from '@/components/Link';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import img_doctor from '@/images/doctors/doctor_Zubarev.webp';
import Contacts from '@/components/Contacts';
import SEO from '@/components/SEO';

const Zubarev = () => {
  const SEODetails = {
    title: 'Сердечно-сосудистый хирург Зубарев Евгений Игоревич',
    description:
      'Кандидат медицинских наук. Деятельность: предсердная тахикардия, синдром WPW, пароксизмальная фибрилляция предсердий, инцизионные тахикардии, желудочковые аритмии.',
    pageLink: 'https://heartteamspb.com/team/doctor_zubarev',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <main className='page__doctor'>
        <section className='section__doctor container'>
          <div className='doctor__flex'>
            <div className='doctor__card'>
              <h1 className='article__header'>Зубарев Евгений Игоревич</h1>
              <Image
                className='doctor__image'
                src={img_doctor}
                alt='Доктор Зубарев Евгений Игоревич'
              />
              <div className='marked-container doctor__about'>
                <p className='doctor__position'>Сердечно-сосудистый хирург,</p>
                <p className='doctor__position'>Кандидат медицинских наук</p>
              </div>
              <Link
                href='/feedback/zubarev'
                text='отзывы о враче'
                classes='doctor__feedback'
              />
            </div>
            <div className='doctor__info'>
              <iframe
                width='100%'
                height='470px'
                src='https://www.youtube.com/embed/7Q29yqPRlS8'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <iframe
                width='100%'
                height='470px'
                src='https://www.youtube.com/embed/vfLySGUlBVY'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Направление деятельности</h3>
                <p className='article__p'>
                  — Катетерная аблация, в том числе в условиях 3D навигационного
                  картирования, при нарушениях ритма сердца
                </p>
                <p className='article__p'>— синдром WPW</p>
                <p className='article__p'>— предсердная тахикардия</p>
                <p className='article__p'>— ПРАВУТ</p>
                <p className='article__p'>
                  — пароксизмальная/персистирующая фибрилляция предсердий
                </p>
                <p className='article__p'>— трепетание предсердий</p>
                <p className='article__p'>— инцизионные тахикардии</p>
                <p className='article__p'>
                  — желудочковые аритмии (желудочковая экстрасистолия,
                  желудочковая тахикардия)
                </p>
                <p className='article__p'>
                  — имплантация электрокардиостимуляторов,
                  кардиовертеров-дефибрилляторов (ИКД), систем
                  кардиоресинхронизирующей терапии (CRT-P, CRT-D) систем
                  кардиомодулирующей терапии (CCM), устройств длительного
                  мониторирования ЭКГ
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Врачебная деятельность</h3>
                <p className='article__p'>
                  — 2018 г. по настоящее время - Сердечно-сосудистый хирург
                  кардиохирургического отделения с кабинетом
                  рентген-эндоваскулярной диагностики и лечения
                </p>
                <p className='article__p'>
                  — 2009-2018 гг. - Сердечно-сосудистый хирург - Национальный
                  Медицинский Исследовательский Центр им. В. А. Алмазова.
                  Отделение рентгенохирургического лечения сложных нарушений
                  ритма сердца и электрокардиостимуляции.
                </p>
                <p className='article__p'>
                  — 2007-2009 гг. - Врач скорой помощи.Городская поликлиника №
                  114 (СПб).Отделение скорой и неотложной медицинской помощи.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Образование</h3>
                <p className='article__p'>
                  — 2009-2012 гг. - Аспирантура по специальности
                  «сердечно-сосудистая хирургия». Федеральный Центр Сердца,
                  Крови и Эндокринологии им. В. А. Алмазова. Кандидат
                  медицинских наук,тема диссертационного исследования:
                  «Оптимизация интервенционного лечения больных с хронической
                  сердечной недостаточностью».
                </p>
                <p className='article__p'>
                  — 2007-2009 гг. - Ординатура. Федеральный Центр Сердца, Крови
                  и Эндокринологии им. В. А. Алмазова. Отделение
                  рентген-хирургии аритмий и электрокардиостимуляции.
                  Специальность «сердечно-сосудистая хирургия»
                </p>
                <p className='article__p'>
                  — 2006-2007 гг. - Интернатура по специальности «хирургия».
                  Санкт-Петербургский Государственный Медицинский Университет
                  им.акад. И. П. Павлова. Кафедра госпитальной хирургии № 2.
                </p>
                <p className='article__p'>
                  — 2000-2006 гг. - Высшее профессиональное образование:
                  Санкт-Петербургский Государственный Медицинский Университет
                  им.акад. И. П. Павлова. Квалификация: врач.
                  Специальность:лечебное дело.
                </p>
              </section>

              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Повышение квалификации</h3>
                <p className='article__p'>
                  — 2016 г. - ФГБУ «Северо-Западный Федеральный Медицинский
                  Исследовательский Центр им.В. А. Алмазова». Good Clinical
                  Practice.
                </p>
                <p className='article__p'>
                  — 2016 г. - ФГБУ «Северо-Западный Федеральный Медицинский
                  Исследовательский Центр им. В. А. Алмазова». Радиационная
                  безопасность при лучевых исследованиях (повышение
                  квалификации).
                </p>
                <p className='article__p'>
                  — 2015 г. – Medtronic. Преодоление трудностей при
                  программировании ИКД.
                </p>
                <p className='article__p'>
                  — 2014 г. - ФГБУ «Федеральный Медицинский Исследовательский
                  Центр им.В. А. Алмазова».Избранные вопросы сердечно-сосудистой
                  хирургии (повышение квалификации)
                </p>
                <p className='article__p'>
                  — 2012 г. - Союз Педиатров России, Научный центр здоровья
                  детей РАМН. Научное планирование, статистическая обработка
                  данных и представление результатов клинических исследований
                </p>
                <p className='article__p'>
                  — 2010 г. - Biotronik (Germany) «CRT-Follow-UP».
                </p>
                <p className='article__p'>
                  — 2010 г. – Medtronic. Сердечная ресинхронизирующая терапия
                  для имплантирующих врачей.
                </p>
                <p className='article__p'>
                  — 2009 г. – Medtronic. Имплантируемые
                  кардиовертеры-дефибрилляторы компании Medtronic: базовый курс
                  для врачей.
                </p>
                <p className='article__p'>
                  — 2007 г. - Научный Центр Сердечно-сосудистой Хирургии им. А.
                  Н. Бакулева. Российская школа-семинар по клинической
                  электрофизиологии, интервенционной и хирургической
                  аритмологии.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Сертификат</h3>
                <p className='article__p'>
                  — Сердечно-сосудистая хирургия. Годен до 09.12.2024. Выдан:
                  ФГБУ &quot;ФМИЦ им В.А. Алмазова&quot;.
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Членство</h3>
                <p className='article__p'>
                  — Член Европейской ассоциации ритма сердца (EHRA)
                </p>
                <p className='article__p'>
                  — Член Европейского общества кардиологов (ESC)
                </p>
                <p className='article__p'>
                  — Член Всероссийского общества специалистов по клинической
                  электрофизиологии, интервенционной и хирургической аритмологии
                  (ВНОА)
                </p>
                <p className='article__p'>
                  — Член Российского кардиологического общества (РКО)
                </p>
              </section>
              <section className='doctor__theme-section'>
                <h3 className='doctor__theme'>Участие в конференциях</h3>
                <p className='article__p'>
                  — II Санкт-Петербургский аритмологический форум, проходящий в
                  рамках Национального медицинского инновационного форума
                  «Медицина XXI века – интеграция знаний на перекрестке наук»
                  7-9 июня 2018, Санкт-Петербург.
                </p>
                <p className='article__p'>
                  — 21st Prague Workshop on Catheter Ablation, Congress Center,
                  Institute of Molecular Genetics of the ASCR, 21-24 April 2018,
                  Prague, Czech Republic.
                </p>
                <p className='article__p'>
                  — Научно-практический семинар «Острые вопросы аритмологии
                  Санкт-Петербурга» и 42-е заседание регионального отделения
                  ВНОА и Школы практической аритмологии, 1 Апреля 2017,
                  Санкт-Петербург.
                </p>
                <p className='article__p'>
                  — VI Санкт-Петербургская школа аритмологии, 11-13 сентября
                  2017: доклад «Трепетание предсердий и критерии успешной
                  аблации»; доклад «Ротационная ангиография в аритмологии».
                </p>
                <p className='article__p'>
                  — Санкт-Петербургский аритмологический форум, посвященный
                  30-летию службы аритмологии НИИ кардиологии — СЗФМИЦ им. В. А.
                  Алмазова, 22-25 июня 2016, Санкт-Петербург.
                </p>
                <p className='article__p'>
                  — V Всероссийская школа практической аритмологии, 14-16
                  сентября 2016, Санкт-Петербург.
                </p>
                <p className='article__p'>
                  — IV Всероссийская школа практической аритмологии, 3-9
                  сентября 2015: доклад «Показания к электрокардиостимуляции и
                  кардиоресинхронизирующей терапии».
                </p>
                <p className='article__p'>
                  — Юбилейная научная сессия «От трансляционных исследований — к
                  инновациям в медицине», посвященная 35-летию ФГБУ «СЗФМИЦ им.
                  В. А. Алмазова» Минздрава России, 28-30 октября 2015,
                  Санкт-Петербург.
                </p>
                <p className='article__p'>
                  — 13-th Atrial Fibrillation Symposium. 13-14 March 2014.
                  Prague, Czech Republic.
                </p>
                <p className='article__p'>
                  — XI Международный славянский Конгресс по электростимуляции и
                  клинической электрофизиологии сердца «Кардиостим», 27.02-1.03
                  2014, Санкт-Петербург: доклад «Ротационная ангиография – новый
                  метод визуализации при имплантации CRT»; доклад «Позиция
                  желудочковых электродов и отдаленные результаты
                  кардиоресинхронизирующей терапии».
                </p>
                <p className='article__p'>
                  — III Школа практической аритмологии, 15-19 сентября 2014,
                  Санкт-Петербург: доклад «Методы визуализации венозного русла
                  сердца при имплантации CRT».
                </p>
                <p className='article__p'>
                  — XVI International symposium on progress in clinical pacing,
                  December 2-5, 2014, Rome, Italy: доклад «Leads position does
                  not predict outcome in patients who underwent cardiac
                  resynchronization therapy»; доклад «Asymptomatic» right
                  ventricle perforation by ICD lead in a child».
                </p>
                <p className='article__p'>
                  — V Юбилейный Всероссийский съезд аритмологов, 13-15 июня
                  2013, Москва: доклад «Влияет ли позиция желудочковых
                  электродов на отдаленные результаты кардиоресинхронизирующей
                  терапии?»; доклад «3D венография при имплантации CRT».
                </p>
                <p className='article__p'>
                  — Всероссийский центр экстренной и радиационной медицины им.
                  А.М.Никифорова МЧС России, 18 апреля 2013: доклад
                  «Высокоскоростная ротационная ангиография и 3D реконструкция
                  коронарного синуса при имплантациях CRT систем».
                </p>
                <p className='article__p'>
                  — ESC Heart Failure 2012. 19-22 may 2012, Belgrad, Serbia.
                </p>
                <p className='article__p'>
                  — X Международный славянский конгресс по электростимуляции и
                  клинической электрофизиологии сердца «Кардиостим 2012», 16-18
                  февраля 2012, Санкт-Петербург: доклад «Возможности трехмерной
                  реконструкции коронарного синуса при имплантации
                  кардиоресинхронизирующих устройств».
                </p>
                <p className='article__p'>
                  — Conference of the World Society of Arrhythmias. December
                  11-14, 2011. Athens, Greece: Доклад: «High-speed Rotational
                  Angiography Followed by 3-D Reconstruction of Coronary Sinus
                  in CRT Device Implantation».
                </p>
                <p className='article__p'>
                  — III Всероссийская научно-практическая конференция с
                  международным участием &quot;Некоронарогенные заболевания
                  сердца: диагностика, лечение, и профилактика&quot;, 15-16
                  сентября 2011, Санкт-Петербург: доклад «Отдаленные результаты
                  кардиоресинхронизирующей терапии».
                </p>
                <p className='article__p'>
                  — III Ежегодная научная конференция молодых ученых и
                  специалистов ФГУ «ФЦСКЭ им.В.А.Алмазова», 24-25 марта 2011,
                  Санкт-Петербург: доклад «Трехмерная реконструкция анатомии
                  коронарного синуса при имплантациях кардиоресинхронизирующих
                  систем» - победитель конкурса научных докладов.
                </p>
                <p className='article__p'>
                  — IV Всероссийский съезд аритмологов. 16-18 июня 2011, Москва:
                  доклад «Высокоскоростная ротационная ангиография и 3-D
                  реконструкция коронарного синуса при имплантации CRT-систем»;
                  доклад «Анализ выживаемости пациентов с имплантированными
                  системами CRT, CRT-D и ИКД».
                </p>
                <p className='article__p'>
                  — VI Всероссийский съезд сердечно-сосудистых хирургов,
                  28.11-1.12 2010, Москва: доклад «Сравнение эффективности
                  кардиоресинхронизирующей терапии у больных с фибрилляцией
                  предсердий и синусовым ритмом».
                </p>
              </section>
            </div>
          </div>
        </section>
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Zubarev;

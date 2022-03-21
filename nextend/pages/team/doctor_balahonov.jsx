import Image from 'next/image';
import Head from 'next/head';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer';
import img_doctor from '../../public/static/images/doctors/doctor_Balahonov.webp';
import Contacts from '../../components/Contacts';

export default function Balahonov() {
  return (
    <>
      <Head>
        <title>Сердечно-сосудистый хирург Балахонов Василий Васильевич</title>
        <meta
          name="description"
          content="Сердечно-сосудистый хирург высшей категории, кандидат медицинских наук, автор 36 печатных работ."
        />
        <meta
          property="og:description"
          content="Сердечно-сосудистый хирург высшей категории, кандидат медицинских наук, автор 36 печатных работ."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://heartteamspb.com/static/images/doctors/doctor_Balahonov.webp"
        />
        <meta
          property="og:title"
          content="Сердечно-сосудистый хирург Балахонов Василий Васильевич"
        />
        <meta
          property="og:url"
          content="heartteamspb.com/team/doctor_balahonov"
        />
      </Head>
      <Header />
      <main className="page__doctor">
        <section className="section__doctor container">
          <div className="doctor__flex">
            <div className="doctor__card">
              <h1 className="article__header">Балахонов Василий Васильевич</h1>
              <Image
                className="doctor__image"
                src={img_doctor}
                alt="Доктор Балахонов Василий Васильевич"
              />
              <div className="marked-container doctor__about">
                <p className="doctor__position">
                  Сердечно-сосудистый хирург высшей категории,
                </p>
                <p className="doctor__position">кандидат медицинских наук</p>
              </div>
            </div>
            <div className="doctor__info">
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Направление деятельности</h3>
                <p className="article__p">
                  — Владеет техникой протезирования клапанов сердца
                  (механическими и&nbsp;биологическими протезами),
                  клапансохраняющих операций, радиочастотной аблации
                  и&nbsp;криоаблации предсердий при мерцательной аритмии (Left
                  side Maze&#65279;/&nbsp;Full Maze).
                </p>

                <p className="article__p">
                  — В поле профессиональных интересов находятся реконструктивная
                  хирургия клапанов сердца, осложненные варианты ишемической
                  болезни сердца, хирургия фибрилляции предсердий, симультантные
                  операции онкологических больных в&nbsp;сочетании
                  с&nbsp;ишемической болезнью сердца
                  и&#65279;/&#65279;или&nbsp;клапанной патологией сердца,
                  каротидная эндартерэктомия, а&nbsp;также гибридные операции.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Врачебная деятельность</h3>
                <p className="article__p">
                  2015&nbsp;г. по&nbsp;настоящее время - Врач
                  сердечно-сосудистый хирург кардиохирургического отделения
                  с&nbsp;кабинетом&nbsp;РЭВДиЛ.
                </p>
                <p className="article__p">
                  2006 - 2010&nbsp;гг. - Врач-сердечно-сосудистый хирург,
                  Кардиохирургическое отделение, отделение сосудистой хирургии,
                  КГБУ&nbsp;Краевая клиническая больница&nbsp;№1
                  (г.&nbsp;Красноярск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Образование</h3>
                <p className="article__p">
                  2004 - 2006&nbsp;гг. - Клиническая ординатура
                  по&nbsp;специальности «Общая хирургия» ГОУ&nbsp;ВПО
                  Красноярская Государственная Медицинская академия.
                </p>
                <p className="article__p">
                  1998 - 2004&nbsp;гг. - Высшее профессиональное образование:
                  ГОУ&nbsp;ВПО Красноярская Государственная Медицинская
                  академия. Квалификация: врач. Специальность: лечебное дело.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Повышение квалификации</h3>
                <p className="article__p">
                  — 2014&nbsp;г. - Первичная специализация по&nbsp;специальности
                  «Функциональная диагностика» ИПО&nbsp;ГБОУ&nbsp;ВПО
                  Красноярская Государственная Медицинская академия
                  им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого Минздрава России.
                </p>
                <p className="article__p">
                  — 2009&nbsp;г. - Специализация: хирургия грудной аорты
                  и&nbsp;её&nbsp;ветвей ИПО&nbsp;ГОУ&nbsp;ВПО Красноярский
                  Государственный Медицинский университет
                  им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого.
                </p>
                <p className="article__p">
                  — 2008&nbsp;г. - Профессиональная переподготовка
                  по&nbsp;специальности «сердечно-сосудистая хирургия»
                  ИПО&nbsp;ГОУ&nbsp;ВПО Красноярская Государственная Медицинская
                  академия им.&nbsp;проф.&nbsp;В.Ф.Войно-Ясенецкого Росздрава.
                </p>
                <p className="article__p">
                  — 2007&nbsp;г. - Кандидат медицинских наук.
                </p>
                <p className="article__p">
                  — 2007&nbsp;г. - Специализация: хирургия ишемической болезни
                  сердца; хирургия приобретенных пороков сердца. ФГБУ
                  Новосибирский научно-исследовательский институт патологии
                  кровообращения им.&nbsp;академика Е.Н.Мешалкина
                  (г.&nbsp;Новосибирск).
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Сертификат</h3>
                <p className="article__p">
                  — Сердечно-сосудистая хирургия. Годен до&nbsp;05.04.2023.
                  Выдан: ГБОУ&nbsp; ВПО&nbsp;СЗГМУ им.&nbsp;И.И.Мечникова.
                </p>
                <p className="article__p">
                  — Ультразвуковая диагностика. Годен до&nbsp;30.01.2024.
                  «АНО&nbsp;ВО «Европейский Университет» Бизнес треугольник».
                </p>
                <p className="article__p">
                  — Функциональная диагностика. Годен до&nbsp;22.05.2024. Выдан:
                  ФГБОУ&nbsp;ВО «СПб&nbsp;ГУ».
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Достижения</h3>
                <p className="article__p">
                  — Опубликовано 36 печатных работ, из&nbsp;них
                  26&nbsp;–&nbsp;в&nbsp;зарубежной печати.
                </p>
                <p className="article__p">
                  — Результаты исследований были неоднократно доложены
                  на&nbsp;отечественных, европейских, азиатских, скандинавских
                  и&nbsp;мировых научных форумах разных уровней.
                </p>
              </section>
              <section className="doctor__theme-section">
                <h3 className="doctor__theme">Участие в конференциях</h3>
                <p className="article__p">
                  — 2013&nbsp;г. -21-st&nbsp;Annual meeting
                  of&nbsp;the&nbsp;Asian Society for Cardiovascular and Thoracic
                  Surgery. Выступление с&nbsp;докладами: «Сравнительный анализ
                  результатов радиочастотной аблации и&nbsp;криоаблации
                  у&nbsp;больных с&nbsp;мерцательной аритмией»;
                  «Непосредственные и&nbsp;отдаленные результаты хирургического
                  лечения фибрилляции предсердий у&nbsp;больных
                  с&nbsp;митральным пороком сердца».
                </p>
                <p className="article__p">
                  — 2012&nbsp;г. - 4-th joint Scandinavian conference
                  in&nbsp;Cardiothoracic Surgery (Scandinavian Association
                  of&nbsp;Thoracic Surgery). Выступление с&nbsp;докладом:
                  «Непосредственные результаты хирургического лечения
                  фибрилляции предсердий у&nbsp;больных с&nbsp;митральным
                  пороком сердца».
                </p>
                <p className="article__p">
                  — 2011&nbsp;г. - 60-th International congress
                  of&nbsp;the&nbsp;European Society for&nbsp;Cardiovascular
                  and&nbsp;Endovascular Surgery. Выступление с&nbsp;докладами:
                  «12&nbsp;летний опыт имплантации биологических митральных
                  протезов Кемкор»; «Повторные оперативные вмешательства
                  при&nbsp;клапанной патологии сердца». Москва, Россия.
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
}

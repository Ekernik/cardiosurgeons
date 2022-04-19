import { NextPage } from 'next';
import Header from '@/components/Header/Header';
import DoctorCard from '@/components/DoctorCard';
import Contacts from '@/components/Contacts';
import Footer from '@/components/Footer';
import ImageSlider from '@/components/ImageSlider';
import PhoneLink from '@/components/PhoneLink';
import SEO from '@/components/SEO';
import { doctors } from '@/public/static/databases/doctors';
import { SliderData__team } from '@/public/static/databases/sliderData/team';
import styles from '@/styles/article.module.scss';

const Team: NextPage = () => {
  const SEODetails = {
    title:
      'Команда кардиохирургов и кардиологов Центра кардиохирургии и интервенционной кардиологии им. Н.И.Пирогова',
    description:
      'Ведущие кардиологи и кардиохирурги России работают у нас. Диагностируем и лечим заболевания сердца и сердечно-сосудистой системы. Опытные специалисты, большой практический опыт.',
    pageLink: 'https://heartteamspb.com/team',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <div id='curtain' />
      <Header />
      <article className={`mt container ${styles.article} section__our-team`}>
        <h1>Наша команда</h1>
        <div className='doctor__list'>
          {doctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
        <p>
          Команда специалистов Центра кардиохирургии и интервенционной
          кардиологии клиники ВМТ им Н.И. Пирогова – практикующие специалисты,
          которые провели более 4000 операций кардиохирургического профиля,
          более 900 операций на открытом сердце, и свыше 1600
          рентгенохирургических вмешательств.
        </p>
        <p>
          Кардиологи и кардиохирурги нашей клиники регулярно проводят совместную
          работы с коллегами из России и Европы. Основываясь на принципах
          доказательной медицины, происходит совершенствование клинических
          подходов в диагностике и лечении различных видов заболеваний
          сердечно-сосудистой системы.
        </p>
        <p>
          Также специалистами Центра во главе с процессором кафедры госпитальной
          хирургии СПБГУ Шматовым Дмитрием Викторовичем проводится обучение
          студентов и клинических ординаторов. Лекции и практические занятия
          проходят на базе Клиники высоких медицинских технологий им. Н.И.
          Пирогова в лекционных залах СПБГУ.
        </p>
        <p>
          Операционный блок Центра оборудован специализированной системой камер
          и мониторов для ведения образовательной работы непосредственно по
          время операций. Контроль опытных наставников позволяет получать только
          актуальную информацию и постоянно оттачивать мастерство.
        </p>
        <p>
          Студенты и ординаторы могут получить углубленные знания в таких
          направлениях нашей работы как кардиохирургия, ангиология, аритмология,
          кардиология, рентгенэндоваскулярная хирургия, кардиоанестезиология и
          перфузиология, функциональная диагностика.
        </p>
        <p>
          Если вы хотите записаться на прием к ведущим кардиохирургам и
          кардиологам, звоните{' '}
          <PhoneLink phoneNumber='+7&nbsp;(999)&nbsp;238&#8209;01&#8209;36' />
        </p>
        <ImageSlider props={SliderData__team} />
      </article>
      <Contacts />
      <Footer />
    </>
  );
};

export default Team;

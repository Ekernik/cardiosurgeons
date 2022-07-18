import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import { treatments } from '@/public/static/databases/links';
import SEO from '@/components/SEO';
import { NextPage } from 'next';
import EmailLink from '@/components/EmailLink';
import styles from './styles.module.scss';

const Treatment: NextPage = () => {
  const SEODetails = {
    title:
      'Кардиохирургические операции на сердце. Лечение болезней сердца и сосудов.',
    description:
      'Записывайтесь на лечение болезней сердца к ведущим кардиологам и кардиохирургам нашей клиники. Прием по федеральным квотам и ОМС.',
    pageLink: 'https://heartteamspb.com/treatment',
    type: 'article',
  };

  return (
    <>
      <SEO details={SEODetails} />
      <Header />
      <section className='mt container'>
        <h1>Кардиохирургические операции на сердце</h1>
        <div className={styles.list}>
          {treatments.links.map((treatment, i) => (
            <div className={styles.link} key={Date.now() + i}>
              <Link href={treatment.link} text={treatment.text} />
            </div>
          ))}
        </div>
        <div>
          <p>
            В Центре кардиохирургии и интервенционной кардиологии на базе КВМТ
            им Н.И.Пирогова работает команда профессионалов, имеющих
            практический опыт в диагностировании и лечении заболеваний сердца и
            сосудов.
          </p>
          <p>
            Мы проводим полный спектр хирургических, гибридных и эндоваскулярных
            операций при{' '}
            <Link
              href='/diagnostics/ateroskleros'
              text='атеросклерозе коронарных артерий'
            />
            , артерий нижних конечностей, брахиоцефальных артерий, аорты и ее
            ветвей, аневрзимах аорты и артерий различной локализации.
          </p>
          <p>
            Врачи Центра в сотрудничестве с коллегами из разных городов России
            непрерывно проводят консультативный и амбулаторный прием пациентов
            со всей страны. Сотрудничаем с медицинскими центрами более чем 20
            субъектов Российской Федерации, и география работы постоянно
            расширяется.
          </p>
          <p>
            Более подробную информацию о кардиохирургических операциях и лечении
            вы можете получить, обратившись к специалистам нашей клиники по
            номеру телефона <PhoneLink />, или написав нам на электронную почту:{' '}
            <EmailLink />.
          </p>
        </div>
      </section>
      <Contacts />
      <Footer />
    </>
  );
};

export default Treatment;

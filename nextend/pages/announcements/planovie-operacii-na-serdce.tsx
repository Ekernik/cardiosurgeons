import Link from '@/components/Link';
import SEO from '@/components/SEO';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import PhoneLink from '@/components/PhoneLink';

// Хасавюрт - 01 марта 2022
export default function Announcement() {
  const SEODetails = {
    title: 'Плановые операции на сердце',
    description:
      'Записывайтесь на плановые операции на сердце к опытным кардиохирургам клиники ВМТ им. Н.И.Пирогова',
    pageLink:
      'https://heartteamspb.com/announcements/planovie-operacii-na-serdce',
    type: 'article',
  };
  return (
    <>
      <SEO details={SEODetails} />
      <div className='App'>
        <div id='curtain' />
        <Header />
        <section className='container mt'>
          <h1 className='article__header'>Плановые операции на сердце</h1>
          <p className='article__p'>
            В нашем <Link href='/' text='центре кардиохирургии' /> и
            интервенционной кардиологии продолжается оказание плановой
            хирургической помощи пациентам с патологией периферических сосудов.
            Уже выполнено более 50 эндоваскулярных, гибридных и реконструктивных
            вмешательств на брюшной аорте, брахиоцефальных артериях, артериях
            нижних конечностей и сосудистом доступе для гемодиализа.
          </p>
          <p className='article__p'>
            В ближайшее время будет выполнено несколько редких{' '}
            <Link href='/operacii-na-serdce' text='операций на сердце' /> при
            периферических аневризмах сложной локализации.
          </p>
          <p className='article__p'>
            Помимо Санкт-Петербурга, бесплатную помощь получают пациенты из 30
            регионов РФ, при этом география субъектов постоянно расширяется.
            Оптимальное планирование госпитализации позволяет не допускать
            ожидания пациентом операции более одного месяца.
          </p>
          <PhoneLink
            text='Для записи на прием, звоните по телефону '
            phoneNumber='+7 (999) 238-01-36'
          />
        </section>
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

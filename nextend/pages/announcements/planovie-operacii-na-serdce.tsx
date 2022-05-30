import { NextPage } from 'next';
import Link from '@/components/Link';
import PhoneLink from '@/components/PhoneLink';
import ArticleLayout from 'layouts/ArticleLayout';

const Announcement: NextPage = () => {
  const SEODetails = {
    title: 'Плановые операции на сердце',
    description:
      'Записывайтесь на плановые операции на сердце к опытным кардиохирургам клиники ВМТ им. Н.И.Пирогова',
    pageLink:
      'https://heartteamspb.com/announcements/planovie-operacii-na-serdce',
    type: 'article',
  };

  return (
    <ArticleLayout details={SEODetails}>
      <section className='container mt'>
        <h1>Плановые операции на сердце</h1>
        <p>
          В нашем <Link href='/' text='центре кардиохирургии' /> и
          интервенционной кардиологии продолжается оказание плановой
          хирургической помощи пациентам с патологией периферических сосудов.
          Уже выполнено более 50 эндоваскулярных, гибридных и реконструктивных
          вмешательств на брюшной аорте, брахиоцефальных артериях, артериях
          нижних конечностей и сосудистом доступе для гемодиализа.
        </p>
        <p>
          В ближайшее время будет выполнено несколько редких{' '}
          <Link href='/operacii-na-serdce' text='операций на сердце' /> при
          периферических аневризмах сложной локализации.
        </p>
        <p>
          Помимо Санкт-Петербурга, бесплатную помощь получают пациенты{' '}
          <strong>из 30 регионов РФ</strong>, при этом география субъектов
          постоянно расширяется. Оптимальное планирование госпитализации
          позволяет не допускать ожидания пациентом операции более одного
          месяца.
        </p>
        <p>
          Для записи на прием, звоните по телефону <PhoneLink />
        </p>
      </section>
    </ArticleLayout>
  );
};

export default Announcement;

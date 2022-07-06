import Link from '@/components/Link';

type PropsType = {
  onClose: () => void;
};

const Review: React.FC<PropsType> = props => (
  <article>
    <p>
      Дорогие наши врачи, Вы не только и не просто возвращаете людей к жизни, Вы
      дарите нам надежду на счастливое будущее, мы восхищаемся вашей работой.
    </p>
    <p>
      От всей души хочу сказать спасибо моему лечащему врачу и который всегда
      был рядом{' '}
      <Link
        href='team/doctor_asadullin'
        text='Асадуллина Ильшата Шамилевича'
        onClick={props.onClose}
      />{' '}
      и&nbsp;хирургов{' '}
      <Link
        href='team/doctor_kamenskih'
        text='Каменских Максима Сергеевича'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_sorokin'
        text='Сорокина Андрея Александровича'
        onClick={props.onClose}
      />
      .
    </p>
    <p>
      От всей души и чистого сердца хочу вам пожелать чтобы все ваши мечты
      исполнились. Храни Вас господь.
    </p>
  </article>
);

export default Review;

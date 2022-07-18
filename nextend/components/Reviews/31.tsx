import Link from '@/components/Link';

type PropsType = {
  onClose: () => void;
};

const Review: React.FC<PropsType> = props => (
  <article>
    <p>
      Приношу свою огромную благодарность кардиохирургам вашей клиники,
      кардиохирургам в высшей категории и класса сделавшим мне операцию на
      открытом сердце!
    </p>
    <p>
      <Link
        href='team/doctor_stolyarov'
        text='Столяров Максим Станиславович'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_asadullin'
        text='Асаддулин Ильшат Шамилевич'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_pyagai'
        text='Пягай Виктор Александрович'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_kim'
        text='Ким Глеб Ирламович'
        onClick={props.onClose}
      />
      , Новиков Максим Анатольевич. С него и началась операция, спокойные слова
      «дыши глубже» я запомню надолго!
    </p>
    <p>
      Низкий поклон вам уважаемые Доктора с большой буквы. Особое спасибо моему
      лечащему врачу{' '}
      <Link
        href='team/doctor_asadullin'
        text='Асаддулину Ильшату Шамилевичу'
        onClick={props.onClose}
      />{' '}
      за добрые слова, внимание, вовремя успокоит, ответит на любой вопрос,
      может иногда и лишний. Спасибо большое.
    </p>
    <p>
      Большое спасибо врачам реаниматологам за добрые слова, вовремя поданый
      шприц с водой, внимание, спасибо. Большое спасибо медперсоналу на
      отделении. Сестрам, врачам за внимание и доброту спасибо уважаемые
      женщины.
    </p>
  </article>
);

export default Review;

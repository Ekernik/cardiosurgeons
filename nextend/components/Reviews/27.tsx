import Link from '@/components/Link';

type PropsType = {
  onClose: () => void;
};

const Review: React.FC<PropsType> = props => (
  <article>
    <p>
      Уважаемые сотрудники кардиологического центра им.&nbsp;Н.И.Пирогова! Выражаю
      вам искреннюю благодарность, за&nbsp;лечение, за доброе чуткое отношение к
      каждому пациенту, за&nbsp;высокий профессионализм.
    </p>
    <p>
      Особенно хочется поблагодарить{' '}
      <Link
        href='team/doctor_stolyarov'
        text='Столярова М.С.'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_balahonov'
        text='Балахонова В.В.'
        onClick={props.onClose}
      />
      ,{' '}
      <Link
        href='team/doctor_sheremet'
        text='Шеремета А.А.'
        onClick={props.onClose}
      />
      , Новикова Н.А. Это доктора, которые делали мне операцию.
    </p>
    <p>
      Огромное спасибо моему лечащему врачу{' '}
      <Link
        href='team/doctor_suhanova'
        text='Сухановой О.В.'
        onClick={props.onClose}
      />{' '}
      Медсестры: Жукова О.В., Лебедева М.В., Петрова И.О. буквально нянчились с
      нами, помогали во всем круглосуточно. Вообще коллектив работает слаженно,
      четко и без лишней суеты. Отношение к пациентам доброе, внимательное.
      Огромное вам спасибо.
    </p>
    <p>
      Здоровья вам всем и вашим близким, профессионального роста, удачи всегда и
      во всем.
    </p>
  </article>
);

export default Review;

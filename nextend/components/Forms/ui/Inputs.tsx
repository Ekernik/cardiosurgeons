import { ErrorMessage, Field } from 'formik';
import styles from './styles.module.scss';
import Link from '@/components/Link';

export function NameInput() {
  return (
    <label className={styles.label}>
      Ваши фамилия, имя и отчество<span className='must-have'>*</span>
      <span>
        <ErrorMessage className={styles.error} name='name' component='span' />
      </span>
      <Field className={styles.input__text} type='text' name='name' />
    </label>
  );
}

export function PhoneInput() {
  return (
    <label className={styles.label}>
      Ваш контактный телефон<span className='must-have'>*</span>
      <span>
        <ErrorMessage className={styles.error} name='phone' component='span' />
      </span>
      <Field className={styles.input__text} type='tel' name='phone' />
    </label>
  );
}

export function EmailInput() {
  return (
    <label className={styles.label}>
      Ваша электронная почта
      <span>
        <ErrorMessage className={styles.error} name='email' component='span' />
      </span>
      <Field className={styles.input__text} type='email' name='email' />
    </label>
  );
}

export function MessageInput() {
  return (
    <label className={styles.label}>
      Ваше сообщение
      <Field className={styles.input__textarea} as='textarea' name='message' />
    </label>
  );
}

export function TOUCheckbox() {
  return (
    <label className={styles.label__terms}>
      <Field
        className={styles.input__checkbox}
        type='checkbox'
        name='checked'
      />
      <span>
        Я согласен с условиями {` `}
        <Link
          href='/licenses'
          text='обработки персональных данных'
          linkOptions={{ target: '_blank' }}
        />
        <span className='must-have'>*</span>
        <ErrorMessage className={styles.error} name='checked' component='div' />
      </span>
    </label>
  );
}

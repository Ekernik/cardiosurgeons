import Link from '@/components/Link';
import Image from 'next/dist/client/image';
import success from '@/public/static/svg/success.svg';
import { handleSubmit, formSettings } from '@/helpers/form_helper';
import styles from './form.module.scss';

const ContactsForm: React.FC = () => (
  <div className={styles.wrapper}>
    <h3 className={styles.subheader}>Запись на прием</h3>
    <iframe
      title='Redirected'
      name='hidden_iframe'
      id='hidden_iframe'
      style={{ display: 'none' }}
    />
    <div className={styles.form_wrapper}>
      {/* Curtain */}
      <div className={styles.contacts_form__curtain}>
        <div className='curtain__svg'>
          <Image
            src={success}
            alt='Иконка успешно выполненного действия'
            width={40}
            height={40}
          />
        </div>
        <h3 className='curtain__title'>Спасибо!</h3>
        <p className='curtain__message'>Мы свяжемся с Вами в ближайшее время</p>
      </div>

      <form
        target='hidden_iframe'
        method='POST'
        action={formSettings.submit_link}
        className={styles.contacts_form}
      >
        <div className={styles.contacts_form__group}>
          <input
            className={styles.contacts_form__input}
            name={formSettings.name_entry}
            type='text'
            required
          />
          <label className={styles.contacts_form__label}>
            Ваше ФИО (полностью)<span className={styles.must_have}>*</span>
          </label>
        </div>

        <div className={styles.contacts_form__group}>
          <input
            name={formSettings.phone_entry}
            type='tel'
            className={styles.contacts_form__input}
            required
          />
          <label className={styles.contacts_form__label}>
            Контактный телефон<span className={styles.must_have}>*</span>
          </label>
        </div>

        <div className={styles.contacts_form__group}>
          <input
            name={formSettings.email_entry}
            type='email'
            className={styles.contacts_form__input}
          />
          <input
            type='text'
            style={{ display: 'none' }}
            name={formSettings.ref_link}
            value={formSettings.ref_origin()}
            readOnly
            required
          />
          <label className={styles.contacts_form__label}>
            Ваша электронная почта <span>(необязательно)</span>
          </label>
        </div>

        <div className={styles.contacts_form__group}>
          <textarea
            name={formSettings.message_entry}
            className={styles.contacts_form__textfield}
          />
          <label className={styles.contacts_form__label}>Ваше сообщение</label>
        </div>

        <div className={styles.contacts_form__sm_section}>
          <div className={styles.contacts_form__group}>
            <input type='checkbox' required />
            <label className={styles.label_for_terms}>
              Я согласен на {` `}
              <Link href='/licenses' text='обработку персональных данных' />
            </label>
          </div>
        </div>

        <button onClick={handleSubmit} className='floating-contacts__cta'>
          Записаться
        </button>
      </form>
    </div>
  </div>
);

export default ContactsForm;

import Link from '@/components/Link';
import Image from 'next/dist/client/image';
import success from '@/public/static/svg/success.svg';
import { handleSubmit, formSettings } from '@/helpers/form_helper';

const ContactsForm = () => (
  <>
    <div className='form-wrapper'>
      <div className='contact-form__curtain'>
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
        className='contact-form'
        style={{ padding: '2em 1em 1em' }}
      >
        <div className='contact-form__group'>
          <input
            className='contact-form__input'
            name={formSettings.name_entry}
            type='text'
            required
          />
          <label className='contact-form__label'>
            Ваше ФИО (полностью)<span className='must-have'>*</span>
          </label>
        </div>
        <div className='contact-form__group'>
          <input
            name={formSettings.phone_entry}
            type='tel'
            className='contact-form__input'
            required
          />
          <label className='contact-form__label'>
            Контактный телефон<span className='must-have'>*</span>
          </label>
        </div>
        <div className='contact-form__group'>
          <input
            name={formSettings.email_entry}
            type='email'
            className='contact-form__input'
          />
          <input
            type='text'
            style={{ display: 'none' }}
            name={formSettings.ref_link}
            value={formSettings.ref_origin()}
            readOnly
            required
          />
          <label className='contact-form__label'>
            Ваша электронная почта{' '}
            <span className='contact-form__small-text'>(необязательно)</span>
          </label>
        </div>
        <div className='contact-form__group'>
          <textarea
            name={formSettings.message_entry}
            className='contact-form__textfield'
          ></textarea>
          <label className='contact-form__label'>Ваше сообщение</label>
        </div>
        <div className='contact-form__sm-section'>
          <div className='contact-form__group'>
            <input type='checkbox' required />
            <label className='label-for-terms'>
              Я согласен на {` `}
              <Link href='/licenses' text='обработку персональных данных' />
            </label>
          </div>
        </div>
        <button
          type='submit'
          onClick={handleSubmit}
          className='floating-contacts__cta'
        >
          Записаться
        </button>
      </form>
    </div>
  </>
);

export default ContactsForm;

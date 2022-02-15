import Link from '@/components/Link';
import { handleSubmit, formSettings } from '@/helpers/form_helper';

const FormGroup = (
  name,
  type = 'text',
  required = true,
  text,
  inputOptions,
) => {
  return (
    <div className='contact-form__group'>
      <input
        className='contact-form__input'
        name={name}
        type={type}
        required={required}
        {...inputOptions}
      />
      <label className='contact-form__label'>
        {text}
        {required && <span className='must-have'>*</span>}
      </label>
    </div>
  );
};

const ContactsForm = () => (
  <form
    target='hidden_iframe'
    method='POST'
    action={formSettings.submit_link}
    className='contact-form'
  >
    <FormGroup name={formSettings.name_entry} text='Ваше ФИО (полностью)' />
    <FormGroup
      name={formSettings.phone_entry}
      type='tel'
      text='Контактный телефон'
    />
    <FormGroup
      name={formSettings.email_entry}
      required={false}
      type='email'
      text='Ваша электронная почта'
    />
    <FormGroup
      name={formSettings.ref_link}
      value={formSettings.ref_origin()}
      inputOptions={{ readonly: true }}
    />
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
    <button onClick={handleSubmit} className='cta-make-appointment'>
      Записаться
    </button>
  </form>
);

export default ContactsForm;

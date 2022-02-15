type PropTypes = {
  name: string;
  type: string;
  required: boolean;
  text: string;
  inputOptions?: any;
};

const FormGroup: React.FC<PropTypes> = ({
  name,
  type = 'text',
  required = true,
  text,
  inputOptions,
}) => {
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

export default FormGroup;

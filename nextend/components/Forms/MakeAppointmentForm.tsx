import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.scss';
import {
  NameInput,
  PhoneInput,
  EmailInput,
  MessageInput,
  TOUCheckbox,
} from './ui/Inputs';

import React, { useState } from 'react';

function MakeAppointmentForm() {
  const router = useRouter();
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleSubmit(values) {
    const reqBody = {
      name: values.name,
      email: values.email,
      phone: values.phone,
      message: values.message,
      linkOrigin: router.pathname,
    };

    fetch('/api/make-appointment', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => {
        switch (data.code) {
          case '201':
            console.log('success');
            break;
        }
      });
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
        checked: false,
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setIsSubmitted(true);
        setSubmitting(false);
      }}
      validate={values => validateValues(values)}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <h2>Форма записи на прием</h2>
          <NameInput />
          <PhoneInput />
          <EmailInput />
          <MessageInput />
          <TOUCheckbox />

          <button
            className={styles.submitButton}
            type='submit'
            disabled={isSubmitted}
          >
            {isSubmitted ? 'Запись оформлена' : 'Записаться'}
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default MakeAppointmentForm;

function validateValues(values) {
  type ErrType = {
    checked?: string;
    name?: string;
    email?: string;
    phone?: string;
  };
  const errors: ErrType = {};

  if (!values.checked) {
    errors.checked =
      'Для записи на прием нужно согласиться с обработкой персональных данных';
  }
  if (!values.name) {
    errors.name = 'Заполните поле';
  }
  if (!values.phone) {
    errors.phone = 'Заполните поле';
  } else if (
    !/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i.test(values.phone)
  ) {
    errors.phone = 'Неверный формат телефона';
  }
  if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) &&
    values.email
  ) {
    errors.email = 'Неверный формат почты';
  }
  return errors;
}

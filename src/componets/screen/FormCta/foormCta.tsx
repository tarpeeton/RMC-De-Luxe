import { FC, useState } from 'react';
import styles from './form.module.css';

import Button from '../../ui/button';

const FormCTA: FC = () => {
  const [focusedFields, setFocusedFields] = useState({
    name: false,
    phone: false,
    email: false,
    question: false,
  });

  const handleFocus = (field: string) => {
    setFocusedFields({ ...focusedFields, [field]: true });
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocusedFields({ ...focusedFields, [field]: false });
    }
  };
  return (
    <div className={styles.form}>
      <div className={styles.content}>
        <div className={styles.form__items}>
          <h2>Остались вопросы? Свяжитесь с нами</h2>
          <form className={styles.form__inputs}>
            <div className={styles.form__input__items}>
              <label
                className={`${styles.label} ${focusedFields.name ? styles.labelFocused : ''}`}
                htmlFor="name"
              >
                ФИО <span className={styles.systemRed}>*</span>
              </label>
              <input
                className={styles.input}
                type="text"
                id="name"
                name="name"
                required
                onFocus={() => handleFocus('name')}
                onBlur={(e) => handleBlur('name', e.target.value)}
              />
            </div>

            <div className={styles.form__input__items}>
              <label
                className={`${styles.label} ${focusedFields.phone ? styles.labelFocused : ''}`}
                htmlFor="phone"
              >
                Номер телефона <span className={styles.systemRed}>*</span>
              </label>
              <input
                className={styles.input}
                type="tel"
                id="phone"
                name="phone"
                required
                onFocus={() => handleFocus('phone')}
                onBlur={(e) => handleBlur('phone', e.target.value)}
              />
            </div>

            <div className={styles.form__input__items}>
              <label
                className={`${styles.label} ${focusedFields.email ? styles.labelFocused : ''}`}
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className={styles.input}
                type="email"
                id="email"
                name="email"
                onFocus={() => handleFocus('email')}
                onBlur={(e) => handleBlur('email', e.target.value)}
              />
            </div>

            <div className={styles.form__input__items}>
              <label
                className={`${styles.label} ${focusedFields.question ? styles.labelFocused : ''}`}
                htmlFor="question"
              >
                Ваш вопрос
              </label>
              <input
                className={styles.input}
                type="text"
                id="question"
                name="question"
                onFocus={() => handleFocus('question')}
                onBlur={(e) => handleBlur('question', e.target.value)}
              />
            </div>
          </form>
          <Button label="Отправить" />
        </div>
        <div className={styles.formImage}></div>
      </div>
    </div>
  );
};

export default FormCTA;

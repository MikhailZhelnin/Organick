import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import styles from './ContactUsForm.module.scss'

type FormValues = {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

const ContactUsForm = () => {

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Full name is required'),
    email: Yup.string().required('Email is required'),
    company: Yup.string().required('Company is required'),
    subject: Yup.string().required('Subject is required'),
    message: Yup.string().required('Message is required'),
  })

  const {register, handleSubmit, formState: {errors}} = useForm<FormValues>({resolver: yupResolver(validationSchema)});

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className={styles.contactUsForm}>
      <div className={styles.container}>
        <div className={styles.content}>
          <form onSubmit={onSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <div className={styles.formGroupItem}>
                <label htmlFor='fullName' className={styles.formGroupItemLabel}>Full Name*</label>
                <input
                  {...register("fullName")}
                  type='text'
                  id='fullName'
                  placeholder="Your Full Name"
                  className={!errors.fullName ? `${styles.formGroupItemInput}` : `${styles.formGroupItemInput} ${styles.formGroupItemInputError}`}
                />
                {errors?.fullName &&
                    <p className={styles.formGroupItemError}>{errors.fullName.message}</p>
                }
              </div>

              <div className={styles.formGroupItem}>
                <label htmlFor='email' className={styles.formGroupItemLabel}>Email*</label>
                <input
                  {...register("email")}
                  type='email'
                  id='email'
                  placeholder="example@yourmail.com"
                  className={!errors.email ? `${styles.formGroupItemInput}` : `${styles.formGroupItemInput} ${styles.formGroupItemInputError}`}
                />
                {errors?.email &&
                    <p className={styles.formGroupItemError}>{errors.email.message}</p>
                }
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={styles.formGroupItem}>
                <label htmlFor='company' className={styles.formGroupItemLabel}>Company*</label>
                <input
                  {...register("company")}
                  type='text'
                  id='company'
                  placeholder="Your Company Name Here"
                  className={!errors.company ? `${styles.formGroupItemInput}` : `${styles.formGroupItemInput} ${styles.formGroupItemInputError}`}
                />
                {errors?.company &&
                    <p className={styles.formGroupItemError}>{errors.company.message}</p>
                }
              </div>

              <div className={styles.formGroupItem}>
                <label htmlFor='subject' className={styles.formGroupItemLabel}>Subject*</label>
                <input
                  {...register("subject")}
                  type='text'
                  id='subject'
                  placeholder="How Can We Help"
                  className={!errors.subject ? `${styles.formGroupItemInput}` : `${styles.formGroupItemInput} ${styles.formGroupItemInputError}`}
                />
                {errors?.subject &&
                    <p className={styles.formGroupItemError}>{errors.subject.message}</p>
                }
              </div>
            </div>

            <div className={styles.formGroup}>
              <div className={`${styles.formGroupItem} ${styles.textareaGroup}`}>
                <label htmlFor='message' className={styles.formGroupItemLabel}>Message*</label>
                <textarea
                  {...register("message")}
                  id='message'
                  placeholder="Hello there,i would like to talk about how to..."
                  rows={7}
                  className={!errors.message ? `${styles.formGroupItemTextarea}` : `${styles.formGroupItemTextarea} ${styles.formGroupItemTextareaError}`}
                />
                {errors?.message &&
                    <p className={styles.formGroupItemError}>{errors.message.message}</p>
                }
              </div>
            </div>

            <button type="submit" className={styles.formButton}>Send Message</button>
          </form>
        </div>
      </div>
    </section>

  );
}

export default ContactUsForm;

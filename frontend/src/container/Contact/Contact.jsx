import React, { useState, createRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import ReCAPTCHA from "react-google-recaptcha";

import { AppWrapper } from "../../wrapper";

import { ContactWrapper, Form, InputWrapper } from "./Contact.styles";
import { SectionTitle } from "../../index.styles";

init(process.env.REACT_APP_EMAILJS_USER_ID);

const Contact = () => {
  const { t } = useTranslation();
  const recaptchaRef = createRef();

  const [validCaptcha, setValidCaptcha] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [emailSending, setEmailSending] = useState(false);
  const [emailSendingError, setEmailSendingError] = useState(false);

  useEffect(() => {
    const recaptchaValue = recaptchaRef.current.getValue();

    console.log(`capcha on reload ${recaptchaValue}`);
    if (recaptchaValue != "") {
      setValidCaptcha(true);
    } else {
      setValidCaptcha(false);
    }
    console.log(`my valid capcha ${validCaptcha}`);
  }, []);

  function onChange(e) {
    console.log(`capcha change`);
    const recaptchaValue = recaptchaRef.current.getValue();
    if (recaptchaValue != "") {
      setValidCaptcha(true);
      console.log(`is my capcha invalid valid ${validCaptcha}`);
    } else {
      setValidCaptcha(false);
    }
    console.log(recaptchaValue);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;
    const templateParams = {
      name: data.name,
      email: data.email,
      message: data.message,
    };

    setEmailSending(true);

    emailjs.send(serviceId, templateId, templateParams, userId).then((response) => {
      if (response.status == 200) {
        setEmailSending(false);
        setEmailSent(true);
        setEmailSendingError(false);
        reset();
      } else {
        setEmailSending(false);
        setEmailSent(false);
        setEmailSendingError(true);
      }
    });
  };

  return (
    <ContactWrapper>
      <SectionTitle>{t("tra-contact")}</SectionTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <InputWrapper>
          <label htmlFor="nameInput">{t("tra-name")}</label>
          <input id="nameInput" type="text" placeholder="Joe" {...register("name", { required: "tra-required" })} />

          {/* placeholder for the real error message to prevent content jumping and using absolute positioned elements */}
          <div className={`${errors.name ? "hidden" : "error-field"}`}></div>
          <ErrorMessage
            errors={errors}
            name="name"
            render={({ message }) => <div className="error-field">{t(message)}</div>}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="inputEmail">{t("tra-email")}</label>
          <input
            id="inputEmail"
            type="email"
            placeholder="joe@doe.com"
            {...register("email", {
              required: "tra-required",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                message: "tra-wrong-format",
              },
            })}
          />
          {/* placeholder for the real error message to prevent content jumping and using absolute positioned elements */}
          <div className={`${errors.email ? "hidden" : "error-field"}`}></div>
          <ErrorMessage
            errors={errors}
            name="email"
            render={({ message }) => <div className="error-field">{t(message)}</div>}
          />
        </InputWrapper>

        <InputWrapper>
          <label htmlFor="inputText"> {t("tra-message-text")}</label>
          <textarea
            id="inputText"
            placeholder="..."
            {...register("message", { required: "tra-required", maxLength: 1000 })}
          />

          {/* placeholder for the real error message to prevent content jumping and using absolute positioned elements */}
          <div className={`${errors.message ? "hidden" : "error-field"}`}></div>
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ message }) => <div className="error-field">{t(message)}</div>}
          />
        </InputWrapper>

        <ReCAPTCHA sitekey={process.env.REACT_APP_CAPTCHA_SITE_KEY} onChange={onChange} ref={recaptchaRef} />

        <button disabled={!validCaptcha} type="submit">
          {t("tra-send")}
        </button>
      </Form>

      {emailSent && <p class="info success"> {t("tra-thank-you-message")}</p>}
      {emailSending && <p class="info"> {t("tra-message-send")}</p>}
      {emailSendingError && <p class="info"> {t("tra-message-error")}</p>}
    </ContactWrapper>
  );
};

export default AppWrapper(Contact, "contact");

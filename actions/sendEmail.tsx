"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend('re_PpS6rpRh_Fm5JJLLjnBu1moSsHioMz7hZ');

export const sendEmail = async (dataForm: any) => {
  const senderEmail = dataForm.senderEmail;
  const message = dataForm.message;

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      data: null,
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      data: null,
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Portofolio | Contact Form <onboarding@resend.dev>",
      to: "lintarrezha7@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      }),
    });
    return {
      data, error: null
    };
  } catch (error: unknown) {
    return {
      data: null,
      error: getErrorMessage(error),
    };
  }
};

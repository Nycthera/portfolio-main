import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef(); // Ref for the form element
  const [status, setStatus] = useState(''); // Feedback message for the user
  const ServiceID = "service_7fsl6pc";
  const TemplateID = "template_n3875p2";
  const PublicKey = "NlVboxl_2X5mr9bm1";

  const SITE_KEY = "6LdbTLcqAAAAADXv_5UhYACnCwxQz6_POIYV32XN"; // Replace with your reCAPTCHA v3 Site Key

  const sendEmail = async (e) => {
    e.preventDefault();

    // Execute reCAPTCHA and get the token
    const recaptchaToken = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });

    if (!recaptchaToken) {
      setStatus('Failed to verify reCAPTCHA. Please try again.');
      return;
    }

    // Append reCAPTCHA token to form data
    const formData = new FormData(form.current);
    formData.append('recaptcha_token', recaptchaToken);

    // Optional: Validate reCAPTCHA token server-side (recommended)
    const isValidRecaptcha = await validateRecaptchaToken(recaptchaToken);
    if (!isValidRecaptcha) {
      setStatus('reCAPTCHA verification failed. Please try again.');
      return;
    }

    // Send email via EmailJS
    emailjs
      .sendForm(ServiceID, TemplateID, form.current, PublicKey)
      .then(
        () => {
          setStatus('Your message has been sent successfully!');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          setStatus('There was an error sending your message. Please try again later.');
          console.error('FAILED...', error.text);
        }
      );
  };

  const validateRecaptchaToken = async (token) => {
    // Call your backend or Google API to validate the token
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=YOUR_SECRET_KEY&response=${token}`,
    });
    const data = await response.json();
    return data.success; // Return true if token is valid
  };

  return (
    <div className="contact-form-container bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* Name Input */}
        <InputField type="text" name="user_name" placeholder="Your Name" />

        {/* Email Input */}
        <InputField type="email" name="user_email" placeholder="Your Email" />

        {/* Message Input */}
        <TextareaField name="message" placeholder="Your Message" rows="5" />

        {/* reCAPTCHA v3 */}
        <div
          id="g-recaptcha"
          data-sitekey={SITE_KEY}
          data-size="invisible"
          data-callback="onSubmit"
          data-action="submit"
        ></div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Feedback Message */}
      {status && <p className="mt-4 text-center text-lg text-gray-600">{status}</p>}
    </div>
  );
};

// Reusable input field component
const InputField = ({ type, name, placeholder }) => (
  <input
    type={type}
    name={name}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
    placeholder={placeholder}
    required
  />
);

// Reusable textarea field component
const TextareaField = ({ name, placeholder, rows }) => (
  <textarea
    name={name}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
    placeholder={placeholder}
    rows={rows}
    required
  />
);

export default ContactForm;

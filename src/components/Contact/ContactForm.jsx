import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const SITE_KEY = '6LdbTLcqAAAAADXv_5UhYACnCwxQz6_POIYV32XN'; // Your reCAPTCHA site key

const ContactForm = () => {
  const form = useRef(); // Ref for the form element
  const [status, setStatus] = useState(''); // Feedback message for the user

  // EmailJS configuration
  const ServiceID = "service_7fsl6pc";
  const TemplateID = "template_n3875p2";
  const PublicKey = "NlVboxl_2X5mr9bm1";

  useEffect(() => {
    // Load the reCAPTCHA script dynamically on component mount
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    script.async = true;
    script.onload = () => {
      console.log('reCAPTCHA script loaded successfully.');
    };
    script.onerror = () => {
      console.error('Error loading reCAPTCHA script.');
    };
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!window.grecaptcha) {
      setStatus("reCAPTCHA is not ready. Please refresh the page and try again.");
      return;
    }

    try {
      // Execute reCAPTCHA to get the token
      const recaptchaToken = await window.grecaptcha.execute(SITE_KEY, { action: "submit" });

      if (!recaptchaToken) {
        setStatus("Failed to verify reCAPTCHA. Please try again.");
        return;
      }

      // Append reCAPTCHA token to the form data
      const formData = new FormData(form.current);
      formData.append('recaptcha_token', recaptchaToken);

      // Send form data with reCAPTCHA token using EmailJS
      emailjs
        .sendForm(ServiceID, TemplateID, form.current, PublicKey)
        .then(
          () => {
            setStatus("Your message has been sent successfully!");
            form.current.reset(); // Clear the form fields
          },
          (error) => {
            console.error("FAILED...", error.text);
            setStatus("There was an error sending your message. Please try again later.");
          }
        );
    } catch (err) {
      console.error("reCAPTCHA execution error:", err);
      setStatus("An error occurred during reCAPTCHA verification. Please try again.");
    }
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

        {/* reCAPTCHA */}
        <div className="g-recaptcha" data-sitekey={SITE_KEY}></div>

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

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const form = useRef(); // Ref for the form element
  const [status, setStatus] = useState(''); // Feedback message for the user

  const ServiceID = "Portfolio";
  const TemplateID = "template_n3875p2";
  const PublicKey = "NlVboxl_2X5mr9bm1";
  // pls dont kill me -> im js too lazy to add serverless funcs and protect my api keys
  // EmailJS credentials (replace with your actual values)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        ServiceID, // Your EmailJS Service ID
        TemplateID, // Your EmailJS Template ID
        form.current, // Form reference
        PublicKey // Your EmailJS Public Key
      )
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
InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

TextareaField.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rows: PropTypes.number.isRequired,
};

export default ContactForm;
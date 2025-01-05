import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import SendMessage from '../SpecialComponents/SendMessage'
const ContactForm = () => {
  // State hooks to manage form input and status messages
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(''); // Feedback message for the user

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Validate form inputs
    if (!name || !email || !message) {
      setStatus('All fields are required.');
      return;
    }

    // Send form data using EmailJS
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        () => {
          setStatus('Your message has been sent successfully!');
          setFormData({ name: '', email: '', message: '' });
        },
        () => {
          setStatus('There was an error sending your message. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form-container bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <InputField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
        />

        {/* Email Input */}
        <InputField
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
        />

        {/* Message Input */}
        <TextareaField
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
        />

        {/* Submit Button */}
        <SendMessage />
        
      </form>
      

      {/* Feedback Message */}
      {status && <p className="mt-4 text-center text-lg text-gray-600">{status}</p>}
    </div>
  );
};

// Reusable input field component
const InputField = ({ type, name, value, onChange, placeholder }) => (
  <input
    type={type}
    name={name}
    value={value}
    onChange={onChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
    placeholder={placeholder}
    required
  />
);

// Reusable textarea field component
const TextareaField = ({ name, value, onChange, placeholder, rows }) => (
  <textarea
    name={name}
    value={value}
    onChange={onChange}
    className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-200"
    placeholder={placeholder}
    rows={rows}
    required
  />
);

export default ContactForm;

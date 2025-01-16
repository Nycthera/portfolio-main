import React, { useRef, useState } from 'react';

const ContactForm = () => {
  const form = useRef(); // Ref for the form element
  const [status, setStatus] = useState(''); // Feedback message for the user
  const sendEmail = async (e) => {
    e.preventDefault();
  
    const formData = new FormData(form.current);
  
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_name: formData.get('user_name'),
          user_email: formData.get('user_email'),
          message: formData.get('message'),
        }),
      });
  
      const result = await response.json().catch(() => ({
        error: 'Invalid response from the server',
      }));
  
      if (response.ok) {
        setStatus('Your message has been sent successfully! 😊');
        form.current.reset();
      } else {
        setStatus(result.error || 'Something went wrong. Please try again later. 🚨');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('Failed to send your message. Please try again later. 🚨');
    }
  };
  

  return (
    <div className="contact-form-container bg-white p-8 shadow-md rounded-lg max-w-lg mx-auto">
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
          className="w-full bg-blue-500 text-white py-3 
          rounded-lg hover:bg-blue-600 transition"
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
    aria-label={placeholder}
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
    aria-label={placeholder}
    required
  />
);

export default ContactForm;

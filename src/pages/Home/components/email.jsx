import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export const Email = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace with your EmailJS template ID, service ID, and user ID
    const templateParams = {
      from_email: email,
    };

    emailjs.send('service_vajb0vs', 'template_of0lldh', templateParams,  "UIhgArm96zCcvmZXQ")
      .then((response) => {
        console.log('Email sent!', response.status, response.text);
        // Optionally clear the email field or show a success message
        setEmail('');
      }, (error) => {
        console.error('Failed to send email. Error:', error);
        // Handle error scenario, show error message, etc.
      });
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xs mx-auto">
      <div className="flex items-center border border-gray-200 rounded-md p-2">
        <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
        </svg>
        <label htmlFor="email-input" className="sr-only">Email Address</label>
        <input
          id="email-input"
          type="email"
          className="flex-1 px-2 py-1 rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter your email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600 block w-full">
        Submit
      </button>
    </form>
  );
}

export default Email;

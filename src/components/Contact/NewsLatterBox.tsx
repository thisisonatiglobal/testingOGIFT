"use client"
import { useState } from 'react';

const NewsLatterBox = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://formspree.io/f/mjvnpore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          contact: ''
        });
        const responseData = await response.json();
        console.log('Form submission successful:', responseData);
        alert('Form submitted successfully!');
      } else {
        console.error('Form submission failed:', response);
        alert('Error submitting form. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again later.');
    }
  };

  return (
    <div className="relative z-10 rounded-sm bg-white p-8 shadow-three dark:bg-gray-dark sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Contact us to learn more
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-11 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-25"></p>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="name"
          />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="email"
          />
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact"
            className="border-stroke mb-4 w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
            autoComplete="tel"
          />
          <button
            type="submit"
            className="mb-5 flex w-full cursor-pointer items-center justify-center rounded-sm bg-dark px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-[#701a75] dark:shadow-submit-dark"
          >
            Request a Call-back
          </button>
          <p className="text-center text-base leading-relaxed text-body-color dark:text-body-color-dark">
            No spam guaranteed, so please don’t send any spam mail.
          </p>
          
        </div>
      </form>
    </div>
  );
};

export default NewsLatterBox;

import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log("Form submitted:", form);
    setForm({
      name: "",
      email: "",
      message: "",
    });
    toast.success('Thank you for the feedback.!')
  };

  return (
    <>
      <div>
        <Toaster />
      </div>

      <div className="contact-page">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you! Please fill out the form below to get in
          touch.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;

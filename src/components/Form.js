import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";

const Form = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const formRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const inputs = Array.from(form.querySelectorAll("input, textarea"));
    const isAllFieldsFilled = inputs.every(
      (input) => input.value.trim() !== ""
    );

    if (isAllFieldsFilled) {
      setIsSubmitted(true);
      setIsFormValid(true);
      form.reset();
      setTimeout(() => {
        setIsSubmitted(false);
        navigate("/");
      }, 1000);
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" required />

      <label htmlFor="email">Email</label>
      <input type="email" id="email" required />

      <label htmlFor="subject">Subject</label>
      <input type="text" id="subject" required />

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        rows="6"
        placeholder="Enter your message"
        required
      />

      <button className="btn" type="submit">
        Submit
      </button>

      {!isFormValid && <p>Please fill in all the required fields.</p>}
      {isSubmitted && isFormValid && <p>Message Sent</p>}
    </form>
  );
};

export default Form;

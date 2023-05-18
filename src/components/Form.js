import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FormStyles.css";

const Form = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = Array.from(form.querySelectorAll("input"));
    const textarea = form.querySelector("textarea");

    const isAllFieldsFilled =
      inputs.every((input) => input && input.value.trim() !== "") &&
      textarea &&
      textarea.value.trim() !== "";

    if (isAllFieldsFilled) {
      setMessage("Message Sent");
      setIsFormValid(true);
      setIsSubmitted(true);
      setTimeout(() => {
        navigate("/"); // Navigate back to the home page after 1 second
      }, 1000);
    } else {
      setMessage("Please fill all the fields.");
      setIsFormValid(false);
      setIsSubmitted(false);
    }
  };

  return (
    <form>
      <label>Your Name</label>
      <input type="text" required />
      <label>Email</label>
      <input type="email" required />
      <label>Subject</label>
      <input type="text" required />
      <label>Message</label>
      <textarea rows="6" placeholder="Enter your message" required />
      <button className="btn" onClick={handleSubmit}>
        Submit
      </button>
      {message && <p>{message}</p>}
      {isSubmitted && isFormValid && <p>Sent</p>}
    </form>
  );
};

export default Form;

import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input 
          type="text" 
          placeholder="Please, enter your Email" 
          value={email} 
          onChange={setEmail} />
      <input 
          type="text" 
          placeholder="Please, enter your Name" 
          value={name} 
          onChange={setName} />
      <input 
          type="number" 
          placeholder="Please, enter your Phone. Example; 800-555-5555" 
          value={phone} 
          onChange={setPhone} 
          pattern="^[2-9]\d{2}-\d{3}-\d{4}$"/>
      <button type="submit">Submit</button>
    </form>
  );
};

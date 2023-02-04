import { ContactPicker } from "../contactPicker/ContactPicker";
import React from "react";

export const AppointmentForm = ({
  typeOfAppointment,
  handleTitle,
  contact,
  handleContact,
  date,
  handleDate,
  time,
  handleTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form onSubmit={handleSubmit}>
          <select onChange={handleTitle}>
              <option selected='selected' >Type of appointment is not selected</option>
                {typeOfAppointment?.map((item,index) => ( <option 
                key={index} value={item}>
                  {item}</option> ))}
          </select>
          <ContactPicker
              contact={contact}
              handleChangeContact={handleContact}
          />
          <input 
              type="date" 
              placeholder="Pick up the date" 
              value={date} 
              onChange={handleDate} 
              pattern="^[2-9]\d{2}-\d{3}-\d{4}$"/>
          <input 
              type="time" 
              placeholder="Pick up time" 
              value={time} 
              onChange={handleTime} 
              pattern="^[2-9]\d{2}-\d{3}-\d{4}$"/>
          <button type="submit">Submit</button>
    </form>
  );
};
/**
 *       <input 
              type="text" 
              placeholder="Please, enter the Appointment Title" 
              value={title} 
              onChange={handleTitle} 
          />
 */
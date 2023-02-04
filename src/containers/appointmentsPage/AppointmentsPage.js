/* eslint-disable no-undef */

import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = (props) => {

  const {appointment,contact,addNewAppointment}=props
  /*
  Define state variables for 
  appointment info
  */
const list = ['Medical appointment-DERMATOLOGIST','Medical appointment-NUTRITIONIST',
'Medical appointment-OPHTHALMOLOGIST','Medical appointment-OTOLARYNGOLOGIST']

 const [currentTitle, setCurrentTitle]=useState('')
 const [currentContacts, setCurrentContacts]=useState('')
 const [currentDate, setCurrentDate]=useState(null)
 const [currentTime , setCurrentTime]=useState(null)



  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
   props.addNewAppointment(currentTitle, currentContacts, currentDate, currentTime)
   setCurrentTitle('');
   setCurrentDate('');
   setCurrentTime('');
   
  };
  const handleChangeTitle =(e)=>{
    setCurrentTitle(e.target.value)
  }
  const handleChangeDate =(e)=>{
    setCurrentDate(e.target.value)
  }
  const handleChangeTime =(e)=>{
    setCurrentTime(e.target.value)
  }
const handleChangeContact = (e)=>{
    setCurrentContacts(e.target.value)
}

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          typeOfAppointment={list}
          contact={props.contact}
          title={currentTitle}
          handleTitle={handleChangeTitle}
          handleContact={handleChangeContact}
          date={currentDate}
          handleDate={handleChangeDate}
          time={currentTime}
          handleTime={handleChangeTime}
          handleSubmit={handleSubmit}
        />       
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList
        object={props.appointment}
        />
      </section>
    </div>
  );
};

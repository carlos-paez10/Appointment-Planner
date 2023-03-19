import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useState} from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { CartPage } from "./containers/cartPage/CartPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";
import { NavLink } from 'react-router-dom';

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contact, setContact]=useState([]);
  //good having done an example object
  const [appointment, setAppointment]=useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
    CART: "/cart",
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addNewContact=(name, phone, email)=>{
    setContact((prev)=>{
      return [...prev, {name:name,phone:phone,email:email }]
  });
  }

  const addNewAppointment = (title, contact, date, time) => {
    setAppointment(
      (prev)=>{
      return [...prev,{title:title,contact:contact, date:date, time:time}]

      });
  }
  return  (
    <>
    <nav>
      <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
      <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
    </nav>
     <Routes>
      <Route path='/' element={<ContactsPage contact={contact} addNewContact={addNewContact} />} />
     <Route path={ROUTES.CONTACTS} element={<ContactsPage contact={contact} addNewContact={addNewContact} />} />
     <Route path={ROUTES.APPOINTMENTS} element={<AppointmentsPage contact={contact} appointment={appointment} addNewAppointment={addNewAppointment}/>} />
     </Routes>
     </>
  );
  
}

export default App;

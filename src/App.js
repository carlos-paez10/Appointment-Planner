import { NavLink, Redirect, Route, Switch } from "react-router-dom";
import React, {useState} from "react";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

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
  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage  
            contact={contact}
            addNewContact={addNewContact}  
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage 
            contact={contact}
            appointment={appointment}
            addNewAppointment={addNewAppointment}
            />
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;

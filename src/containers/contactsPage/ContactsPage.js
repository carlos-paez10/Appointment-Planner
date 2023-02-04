import React, { useEffect, useState } from "react";

import {ContactForm} from '../../components/contactForm/ContactForm';
import {TileList} from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const {contact, addNewContact}=props;

  const [currentName, setCurrentName]=useState('');
  const [currentPhone, setCurrentPhone]=useState('');
  const [currentEmail, setCurrentEmail]=useState('');
  const [duplicateName, setDuplicateName] = useState(false);

  useEffect(()=>{
    let nameRepeated=props.contact.find(item=>item.name===currentName)
    if (nameRepeated) {
    nameRepeated=true;
    }else {
    nameRepeated=false;
    }

    if(nameRepeated){
    setDuplicateName(true);
    } else {
      setDuplicateName(false);      
    }

  });


  const handleEmailChange = (event) => {
    setCurrentEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setCurrentName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setCurrentPhone(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentName, currentEmail, currentPhone);
    if(duplicateName===false) {
      props.addNewContact(currentName,currentPhone,currentEmail)
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    } else {
      alert('El nombre ya existe, intenta con otro')
      setCurrentName('');
      setCurrentPhone('');
      setCurrentEmail('');
    }
    console.log(props.contact);
  };


  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={currentName}
          setName={handleNameChange}
          phone={currentPhone}
          setPhone={handlePhoneChange}
          email={currentEmail}
          setEmail={handleEmailChange}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList 
        object={props.contact} // before ----> find out contact={contact}
        />
      </section>
    </div>
  );
};

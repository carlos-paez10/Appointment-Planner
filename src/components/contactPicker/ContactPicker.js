import React from "react";

export const ContactPicker = (props) => {
  
  const {contact, handleChangeContact} =props;



  return (
    <div>
      <select onChange={props.handleChangeContact}>
        <option selected='selected' >No contact is selected</option>
                {props.contact.map((item,index) => ( <option 
                key={index} value={item.name}>
                  {item.name}</option> ))}
      </select>
    </div>
  );
};

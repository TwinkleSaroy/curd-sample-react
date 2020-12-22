import {CREATE_CONTACT,
  GET_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
  SELECT_CONTACT,
  CLEAR_CONTACT,
DELETE_SELECTED_CONTACTS} from '../constant/type';
//actions
export const addContact=(contact) => ({
    
      type:'CREATE_CONTACT',
      payload:contact,
    });
  
 
  //get a action
  export const getContact = (id) => ({
    type: 'GET_CONTACT',
    payload:id,
  })
  
  // UPDATE contact
  export const updateContact= (contact) => ({
    type: 'UPDATE_CONTACT',
    payload:contact,
  });
  
  //delete contact
  export const deleteContact= (id) => ({
    type: 'DELETE_CONTACT',
    payload:id,
  });

  //select for all contact
  export const selectAllContact= (id) => ({
    type: 'SELECT_CONTACT',
    payload:id,
  });


  // clear selected contacts

  export const clearAllContact= () => ({
    type: 'CLEAR_CONTACT',
  
  });

  //  delete all contacts
  export const deleteAllContact= () => ({
    type: 'DELETE_SELECTED_CONTACT',
  
  });
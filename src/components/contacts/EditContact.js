import React ,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import {getContact,updateContact} from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';
import {useParams} from 'react-router-dom';

const EditContact = () => {
    let {id} = useParams();
    let history=useHistory();
    const dispatch =useDispatch();
    const contact = useSelector((state)=>state.contact.contact);
    const[name ,setName]=useState('');
    const[phone ,setPhone]=useState('');
    const[email ,setEmail]=useState('');
    
    /* const createContact= (e) =>{
        e.preventDefault();
        const new_contact={
            id:shortid.generate(),
            name:name,
            phone:phone,
            email:email,
        };
        dispatch(addContact(new_contact));
        history.push('/');

    };*/

    useEffect(()=>{
        if(contact !=null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id))
    },[contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact= Object.assign(contact,{
            name:name,
            phone:phone,
            email:email,
        });
        dispatch(updateContact(update_contact));
        history.push('/');
    };

    return (
        
        <div className='card bordeer-0 shadow'>
<div className='card-header bg-success text-white'>Add A Contact</div>
<div className ='card-body'>
    <form onSubmit={(e) => onUpdateContact(e)}>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your full name'
value={name}
onChange={(e) => setName(e.target.value)}/>


        </div>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your Phone number'
value={phone}
onChange={(e) => setPhone(e.target.value)}/>



        </div>
        <div className='form-group'>
<input type='text'
className='form-group'
placeholder='enter your E-mail Address'
value={email}
onChange={(e) => setEmail(e.target.value)}/>


        </div>
        <button className='btn btn-warning' type='submit'>update Contact</button>
    </form>
</div>
        </div>
    )
}

export default EditContact;

import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './style.scss';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {connect} from 'react-redux';
import { addContact, deleteContact } from './actions';
function App(props) {
  const [sortBy, setSortBy] = useState('');
  useEffect(()=>{
  
    async function my_func(){
    await axios.get('https://reqres.in/api/users').then((data)=>{
      props.addContact(data.data.data);
    }).catch((err)=>console.log(err));
    }
    my_func();
  },[])
  const handleSort=(option)=>{
    console.log(option);
    setSortBy(option.target.value);
    if(option.target.value==="a-z"){
      let sorted_arr=props.contacts.sort((a,b)=>{
        return a.first_name.localeCompare(b.first_name);
      });
      console.log(sorted_arr);
      props.addContact(sorted_arr);
    }
    else{
      let sorted_arr=props.contacts.sort((a,b)=>{
        return b.first_name.localeCompare(a.first_name);
      });
      props.addContact(sorted_arr);
    }
  }
  const deleteContact=(id)=>{
    // setContacts(contacts.filter((contact)=>contact.id!==id));
    props.deleteContact(id);
  }
  return (
    <div >
      <div className='sidebar'>
        <div className='headerText'> contact List</div>
        <div className='sortContainer'>
        <FormControl >
        <InputLabel id="demo-simple-select-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={sortBy}
          label="Sort"
          onChange={handleSort}
          placeholder='Select'
          size='small'
          style={{width:'90px'}}
        >
          <MenuItem value={'a-z'}>A-Z</MenuItem>
          <MenuItem value={'z-a'}>Z-A</MenuItem>
        </Select>
        </FormControl>
        </div>
        <div className='contactContainer'>
        {props.contacts.map((contact)=>{
          return <div className='contact'>
            <div className='contact-img'>
              <img className='image' src={contact.avatar} alt='contact'/>
            </div>
            <div className="details">
              <div className="userName">{contact.first_name + contact.last_name}</div>
              <div className="email">{contact.email}</div>
            </div>
            <div className='actions'>
                <DeleteIcon onClick={()=>deleteContact(contact.id)}/>
            </div>
          </div>
        })}
        </div>
        </div>
    </div>  

  );
}

const mapStateToProps=(state)=>({
  contacts:state.contacts
})
const mapDispatchToProps=(dispatch)=>{
  return {
    addContact:(payload)=>dispatch(addContact(payload)),
    deleteContact:(payload)=>dispatch(deleteContact(payload))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);

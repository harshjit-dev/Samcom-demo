import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
export default function  WelcomePage(){
    return (<div style={{alignContent:"center",textAlign:"center",alignItems:"center"}}>
        Hi Press the Link to navigate to the home page<br/>
        <Link to={"/home-page"}  >Home Page</Link> 
    </div>)
}
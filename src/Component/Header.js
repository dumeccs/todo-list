import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button';



export const Header = ({title, setToggle, text, color}) => {
    // const onClick = (e) =>{
    //     return console.log(e)
    // }

  return (

    <header className="header">
        <h1>{title}</h1>
        <Button setToggle={setToggle} text = {text} color={color}/>
    </header>
  ); 
  
};
Header.protoType ={
    title: PropTypes.string
}

Header.defaultProps ={
    title: 'Task Tracker'
}

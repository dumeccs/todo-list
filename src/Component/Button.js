import React from 'react';
import PropTypes from 'prop-types';


export const Button = ( {color, text, setToggle}) => {
    
  return <button onClick={setToggle} 
                className='btn' 
                style={{background:color}}>
                {text}
        </button>
};

Button.defaultProps = {
    color:'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func,
}
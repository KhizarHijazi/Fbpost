import './App.css';
import React from 'react';


const CustomButton = ({lable , onClick}) => {

  
    return ( 
    

<button className='customBtn' onClick={onClick}>
    {lable}
    </button>



    );
};

export default CustomButton;
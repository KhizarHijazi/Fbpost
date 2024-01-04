import './App.css';
import React from 'react';


const CustomButton = ({lable , onClick}) => {

  
    return ( 
    <div>

<button className='customBtn' onClick={onClick}>
    {lable}
    </button>

    </div>


    );
};

export default CustomButton;
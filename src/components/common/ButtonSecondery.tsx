import React from 'react';


interface ButtonSeconderyProps {
    label: string;
    onClick: () => void;
}


const ButtonSecondery: React.FC<ButtonSeconderyProps> = ({label , onClick}) => {


  return (
    <button className="transition ease-in-out hover:scale-105 shadow-sm duration-300 bg-transparent py-2 px-4 hover:bg-primary-default hover:text-white border border-primary-default rounded-md text-primary-default" onClick={onClick}>
      {label}
    </button>
  )
  
}


 

export default ButtonSecondery

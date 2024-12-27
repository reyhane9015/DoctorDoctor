import React from 'react';

interface ButtonPrimaryProps {
    label: string;
    onClick: () => void;
}

const ButtonPrimary : React.FC<ButtonPrimaryProps> = ({label , onClick}) => {

  return (
    <button className="transition ease-in-out hover:scale-105 shadow-sm duration-300 bg-primary-default py-2 px-4 text-white p-2 rounded-md hover:bg-transparent hover:border hover:border-primary-default hover:text-primary-default" onClick={onClick}>
      {label}
    </button>
  )
  
}


export default ButtonPrimary

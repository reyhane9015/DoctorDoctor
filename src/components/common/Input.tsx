import React from 'react';



type InputType = 'text' | 'password' | 'email' | 'number' | 'date' | 'tel';


interface InputProps {
    label?: string;
    type: InputType;
    placeholder?: string;
    value: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    isSaving?: boolean;
    error?: string;
    isEditable?: boolean;
}


const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange, isSaving, error, isEditable}) => {

    return (
        <>
            <label className="py-2 font-semibold">{label}</label>
            <input type={type}
                disabled={isSaving} 
                placeholder={placeholder}
                value={value} 
                onChange={onChange}
                {...(error && { error: "true" })}
                className=""
            />
        </>
        )

    }



  export default Input
  
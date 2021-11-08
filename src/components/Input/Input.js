import React from 'react';


const Input = ({ placeholder, className, onChange, value, name, type}) => {
return (
    <input type={type} placeholder={placeholder} className={className} name={name} onChange={onChange} value={value}></input>
)}

export default Input;
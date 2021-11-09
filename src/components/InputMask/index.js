import React from 'react';
import InputMask from 'react-input-mask';


const InputMasked = ({type, placeholder, value, onChange, name, mask }) => {

  /*const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');
  

  function handleChange(e) {
    onChange({
      ...e,
      target: {
        ...e.target,
        name,
        value: onlyNumbers(e.target.value)
      }
    });
  }*/

  // tela cadastro
  return (
    <InputMask
      name={name}
      placeholder={placeholder}
      type={type}
      mask={mask}
      value={value}
      onChange={onChange}
    />
  );
  // 
};

export default InputMasked;
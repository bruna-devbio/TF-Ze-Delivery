import React from 'react';
import InputMask from 'react-input-mask';


const InputMasked = ({
  value,
  onChange,
  name,
  mask,
  className,
  key,
  type,
  placeholder,
}) => {

  return (
    <InputMask
      name={name}
      placeholder={placeholder}
      type={type}
      mask={mask}
      value={value}
      onChange={onChange}
      className={className}
      key={key}
    />
  );
};

export default InputMasked;
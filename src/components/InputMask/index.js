import React from 'react';
import InputMask from 'react-input-mask';

const InputMasked = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  mask,
  className,
  key
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
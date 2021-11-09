import React from 'react';
import InputMasked from './InputMask.js';
import { useState } from 'react';

const initialValues = {
  cpf: '',
};

const MaskRegister = () => {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    });
  }

  console.log(values)

  return (
    <div className="App">
      <InputMasked
        name="cpf"
        mask="999.999.999-99"
        value={values.cpf}
        onChange={handleChange}
      />
      <button onClick={() => setValues(initialValues)}>
        Limpar
      </button>
    </div>
  );
}

export default MaskRegister;

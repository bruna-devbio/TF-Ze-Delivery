import React from 'react';
import Cards from 'react-credit-cards';
import Input from '../../components/Input/Input';
import { useState } from 'react';

const CardMask = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <>
      <Cards 
        number={number}
        name={name}
        cvv={cvv}
        expiry={expiry}
        focused={focus}
      />
      <Input
        type="tel"
        name="number"
        placeholder="Card Number"
        value={number}
        onChange={e => setNumber(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
      />
      <Input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
      />
      <Input
        type="text"
        name="expiry"
        placeholder="MM/YY Expiry"
        value={expiry}
        onChange={e => setExpiry(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
      />
      <Input
        type="tel"
        name="expiry"
        placeholder="CVV"
        value={cvv}
        onChange={e => setCvv(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
      />
    </>
  )
}

export default CardMask;
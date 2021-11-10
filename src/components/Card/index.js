import React from 'react';
import Cards from 'elt-react-credit-cards';
import Input from '../Input';
import { useState } from 'react';


const CardMask = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');

  return (
    <>
      <Cards 
        number={number}
        name={name}
        cvc={cvc}
        expiry={expiry}
        focused={focus}
      />

      <form>
       <Input
        type="tel"
        name="number"
        mask="9999.9999.9999.9999"
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
        name="cvc"
        placeholder="CVC"
        value={cvc}
        onChange={e => setCvc(e.target.value)}
        onFocus={e => setFocus(e.target.name)}
      />
      </form>
    </>
  )
}

export default CardMask;
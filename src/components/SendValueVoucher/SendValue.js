import {React, useState} from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';

function SendValueVoucher() {

	const [valuesVoucher, setValuesVoucher] = useState({
			valueEach: '',
	})
	console.log(valuesVoucher);

	const onChangeValues = (event) => {
		setValuesVoucher({
			...valuesVoucher,
			[event.target.name]: event.target.value
		})
	}
	 return (
			  <>
				<label>R$</label>
        <Input
        type='text'
        placeholder='Valor do voucher'
        className='voucher-value-input'
        name='each-voucher'
        onChange={onChangeValues}>Valor
        </Input>
        <p>Bora colocar os vouchers no carrinho para presentear o time?</p>
        <p>Pedido mínimo de R$150,00</p>
				<Button
				buttonText='Comprar voucher'
				className='consult-vouchers'
				/>
        <Button
				buttonText='Consultar voucher'
				className='consult-vouchers'
				/>
				</>
			)
}

export default SendValueVoucher;
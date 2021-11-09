import { React, useState } from 'react';
import Input from '../Input/Input'
import Button from '../Button/Button';

function Cart() {

	const [valuesVoucher, setValuesVoucher] = useState({
			valueEach: '',
			qtd: '',
	})
	console.log(valuesVoucher);

	const onChangeValues = (event) => {
		setValuesVoucher({
			...valuesVoucher,
			[event.target.name]: event.target.value
		})
	}
	
	 return (
			<div className='container-cart'>
				<p>Digite o valor e quantidade de vouchers</p>
				<div className='info-voucher'>
					<Input type='text'
						placeholder='Valor'
						className='voucher-value-input'
						name='each-voucher'
						onChange={onChangeValues}>Valor</Input>
					<Input type='text'
						placeholder='Quantidade'
						className='voucher-value-input'
						name='qtd-voucher'
						onChange={onChangeValues}>Quantidade</Input>
				</div>
				<div className='add-vouchers'>
					<p>+ Adicionar mais vouchers</p>
				</div>
				<div className='total-price'>
					<p>5 vouchers</p>
					<p>R$ 30,00</p>
				</div>
				<div className='total-price'>
					<p>Total:</p>
					<p>R$ 150,00</p>
				</div>
				<Button
				buttonText='PAGAR'
				className='btn-pay'
				/>
				</div>	
			)
}

export default Cart;
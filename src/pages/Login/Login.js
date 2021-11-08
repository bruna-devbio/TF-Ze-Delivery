import { React, useState } from "react"
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const Login = () => {

	const [values, setValues] = useState({
    email: '',
    password: '',

  })
	console.log(values);

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}
	
	return (
		<section className='container'>
			<div className='logo' />
			<form className='login'>
				<div className='form-group'>

					<Input
						type='text'
						placeholder='E-mail'
						className='login-input'
						name='email'
						onChange={onChangeValues}
						value={values.email}
						>
					</Input>
				</div>

				<div className='form-group'>
					<Input
						type='password'
						placeholder='Senha'
						className='login-input'
						name='password'
						onChange={onChangeValues}
						value={values.password}>
					</Input>
				</div>

				<Button
					type='submit'
					buttonText='LOGIN'
					className='button'
          />

				<p className='go-to'>Não tem uma conta? <Link to='./Register/index.js'>
					Cadastre-se
				</Link></p>
			</form>
		</section>
	)
}


export default Login;
import { React, useState } from "react"
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import { loginPage } from "../../services/index";


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

	const handleClick = (event) => {
		event.preventDefault()
		loginPage(values.email, values.password).then(() => {
      alert('entrouuuu')
		}).catch(() => {
			alert('erro')
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
					type='button'
					buttonText='ENTRAR'
					className='button'
					buttonOnClick={handleClick}
				/>
				<p className='go-to'>Não tem uma conta? <Link to='/register'>
					Cadastre-se
				</Link></p>
			</form>
		</section>
	)
}

export default Login;
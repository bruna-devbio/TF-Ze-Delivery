import { React, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logoPreto from "../../assets/img/LogoPreto.png";
import nomePreto from "../../assets/img/NomePreto.png";
import logoMobile from "../../assets/img/LogoMobile.png";
import { registerPage } from '../../services/index';
import './index.css';
import './responsive.css';

const Register = () => {

	const [values, setValues] = useState({
		email: '',
		password: '',
		data: '',
		cpf: '',

	});

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	};

	const handleClick = (event) => {
		event.preventDefault()
		registerPage(values.email, values.password).then(() => {
			alert("cadastrado")
		}).catch(() => {
			alert('erro')
		})
	};

	return (
		<section className='register-container'>
			<Link to='/login' className='register-back-login'>← Voltar para o Login</Link>
			<div className='register-form-group'>
				<h1 className='register-H1'>
					Cadastro
				</h1>
				<div className='login-logo-mobile'>
					<img className='login-logo-black-mobile' src={logoMobile} alt='logo' />
				</div>
				<fieldset className='register-fieldset'>
					<form className='register-form'>
						<h1 className='register-H1-mobile'>
							Cadastro
						</h1>
						<Link to='/login' className='register-back-login-mobile'>← Voltar para o Login</Link>
						<Input
							type='name'
							placeholder='Digite seu nome'
							className='register-input'
							name='nome'
							onChange={onChangeValues}
							value={values.nome}
						>
						</Input>
						<Input
							type='email'
							placeholder='Digite seu e-mail'
							className='register-input'
							name='email'
							onChange={onChangeValues}
							value={values.email}
						>
						</Input>

						<Input
							type='date'
							placeholder='Digite sua data de nascimento'
							className='register-input'
							name='data'
							onChange={onChangeValues}
							value={values.data}>
						</Input>
						<Input
							type='text'
							placeholder='Digite o seu CPF'
							className='register-input'
							name='cpf'
							onChange={onChangeValues}
							value={values.cpf}>
						</Input>
						<Input
							type='password'
							placeholder='Digite sua senha'
							className='register-input'
							name='password'
							onChange={onChangeValues}
							value={values.password}>
						</Input>
						<Button
							type='button'
							className='register-button'
							buttonOnClick={handleClick}
						>CADASTRAR</Button>
					</form>
				</fieldset>
			</div>
			<div className='register-logo'>
				<div className='register-div-logo1'>
					<img className='register-logo-black' src={logoPreto} alt='logo' />
				</div>
				<div className='register-div-logo'>
					<img className='register-name-black' src={nomePreto} alt='logo' />
				</div>
			</div>
		</section>
	)
}


export default Register;
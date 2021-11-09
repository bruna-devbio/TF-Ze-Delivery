import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {registerPage} from '../../services/index';
import ValidateInputs from "./validationRegister";
import ValidationMessage from "../../components/Validation/ValidationMessage";

const Register = () => {
  const navigate = useNavigate()

	const [errors, setError] = useState({})


  const [values, setValues] = useState({
		name: '',
    email: '',
    password: '',
		data: '',
		cpf: '',
		age: '',

  })

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	const handleClick = (event) => {
		event.preventDefault()
		setError(ValidateInputs(values))
		registerPage(values.email, values.password).then((response) => {
			const uid= response.user.uid;
			localStorage.setItem('uid', uid)
			if(values.age === 'Yes') {
         navigate('/login')
			}else if (values.age === 'No') {
         navigate('/')
			}		
		}).catch(() => {
			alert('erro')
		})
	}

	const id = localStorage.getItem('uid')
	console.log(id);

	return (
		<section className='container'>
			<div className='logo' />
			<form className='register'>
			<div className='form-group'>
					<Input
						type='text'
						placeholder='Nome'
						className='register-input'
						name='name'
            onChange={onChangeValues}
            value={values.name}
						>
					</Input>
					{errors.name && <ValidationMessage>{errors.name}</ValidationMessage>}
				</div>
				<div className='form-group'>
					<Input
						type='text'
						placeholder='E-mail'
						className='register-input'
						name='email'
            onChange={onChangeValues}
            value={values.email}
						>
					</Input>
					{errors.email && <ValidationMessage>{errors.email}</ValidationMessage>}
				</div>

				<div className='form-group'>
					<Input
						type='password'
						placeholder='Senha'
						className='register-input'
						name='password'
            onChange={onChangeValues}
            value={values.password}>
					</Input>
					{errors.password && <ValidationMessage>{errors.password}</ValidationMessage>}
				</div>

        <div className='form-group'>
				 <label>Data de nascimento:</label>
					<Input
						type='date'
						placeholder='Data de nascimento'
						className='register-input'
						name='data'
            onChange={onChangeValues}
						value={values.data}>
					</Input>
          {errors.data && <ValidationMessage>{errors.data}</ValidationMessage>}
				</div>

        <div className='form-group'>
					<Input
						type='text'
						placeholder='CPF'
						className='register-input'
						name='cpf'
            onChange={onChangeValues}
						value={values.cpf}>
					</Input>
          {errors.cpf && <ValidationMessage>{errors.cpf}</ValidationMessage>}
				</div>

        <div className='register-options'>
          <p>É maior de 18 anos?</p>
          <input type='radio' name='age' value='Yes' onChange={onChangeValues}/>
          <label>Sim</label>
          <input type='radio' name='age' value='No' onChange={onChangeValues}/>
          <label>Não</label>
          {errors.age && <ValidationMessage>{errors.age}</ValidationMessage>}
        </div>

				<Button
					type='submit'
					buttonText='CADASTRAR-SE'
					className='button'
					buttonOnClick={handleClick}
          />

         <p className='go-to'>Já tem uma conta? <Link to='/login'>
					Faça seu login aqui
				</Link></p>
			</form>
		</section>
	)
}


export default Register;


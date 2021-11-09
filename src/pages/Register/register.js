import { React, useState } from "react"
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import {registerPage} from '../../services/index';

const Register = () => {

  const [values, setValues] = useState({
    email: '',
    password: '',
		data: '',
		cpf: '',

  })

	const onChangeValues = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value
		})
	}

	const handleClick = (event) => {
		event.preventDefault()
		registerPage(values.email, values.password).then(() => {
			alert("entrouuuu")
		}).catch(() => {
			alert('erro')
		})
	}
	
	return (
		<section className='container'>
			<div className='logo' />
			<form className='register'>
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
				</div>

        <div className='form-group'>
					<Input
						type='text'
						placeholder='Data de nascimento'
						className='register-input'
						name='data'
            onChange={onChangeValues}
						value={values.data}>
					</Input>
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
				</div>

        <div className='register-options'>
          <p>É maior de 18 anos?</p>
          <input type='radio' name='age' value='Yes' onChange={onChangeValues}/>
          <label>Sim</label>
          <input type='radio' name='age' value='No' onChange={onChangeValues}/>
          <label>Não</label>
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


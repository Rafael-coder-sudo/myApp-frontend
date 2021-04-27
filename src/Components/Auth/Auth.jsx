import React from 'react'
import { Auth } from '../../Styles/components/Auth'
import Card from '../utils/Card'
import InputLabel from '../utils/InputLabel'
import { Buttons } from '../../Styles/components/Utils'
import { useForm } from 'react-hook-form'

const FormAuth = ({
  submit,
  emailInputProps,
  passInputProps,
  onRegister

}) => {

  const { register, handleSubmit, setValue, errors } = useForm();

	const onSubmitForm = data => {
		let values = data;
		submit(values);
  };
  
  

  React.useEffect(() => {
    register({ name: 'email' }, { required: true });
    register({ name: 'password' }, { required: true });
		
  }, [register]); 
  
  return (
    <Auth>
      <Card title='Login'>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <InputLabel label='Email' {...emailInputProps}onChange={e =>
            setValue(
              'email',
              e.target.value,
            )
          }  />
         
          <InputLabel label='Password' {...passInputProps}onChange={e =>
            setValue(
              'password',
              e.target.value,
            )
          } />
          
          <Buttons className="btn-block" type="submit">Enter</Buttons>
         <Buttons className="btn-block" type="button" onClick={() => onRegister()}>Register</Buttons>
        </form>
      </Card>
    </Auth>
  )
}

FormAuth.defaultProps = {
  emailInputProps: {
    placeholder: 'You email...',
    name:'email',
    id:'email',
    required: true
  },
  passInputProps: {
    placeholder:'You Pass...',
    name:'pass',
    id: 'pass',
    type: 'password',
    required: true
  }

}


export default FormAuth
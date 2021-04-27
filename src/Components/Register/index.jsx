import React from 'react'

import { Auth } from '../../Styles/components/Auth'
import Card from '../utils/Card'
import InputLabel from '../utils/InputLabel'
import { Buttons } from '../../Styles/components/Utils'
import { useForm } from 'react-hook-form'

const FormSave = ({
  submit,
  userInputProps,
  emailInputProps,
  passInputProps,
  onCancel

}) => {

  const { register, handleSubmit, setValue, errors } = useForm();

	const onSubmitForm = data => {
		let values = data;
		submit(values);
  };
  
  

  React.useEffect(() => {
    register({ name: 'name' }, { required: true });
    register({ name: 'email' }, { required: true });
    register({ name: 'password' }, { required: true });
		
  }, [register]); 
  
  return (
    <Auth>
      <Card title='Create account'>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <InputLabel label='Username' {...userInputProps}onChange={e =>
            setValue(
              'name',
              e.target.value,
            )
          }  />
          <InputLabel label='Email' {...emailInputProps}onChange={e =>
            setValue(
              'email',
              e.target.value,
            )
          } />
          <InputLabel label='Password' {...passInputProps}onChange={e =>
            setValue(
              'password',
              e.target.value,
            )
          } />
          
          <Buttons className="btn-block" type="submit">Create</Buttons>
          <Buttons className="btn-block" onClick={onCancel} type="button">Cancel</Buttons>
        </form>
      </Card>
    </Auth>
  )
}

FormSave.defaultProps = {
  userInputProps: {
    placeholder: 'You username...',
    name:'user',
    id:'user',
    required: true
  },
  emailInputProps: {
    placeholder:'You Email...',
    name: 'email',
    id: 'email',
    required: true
  },
  passInputProps: {
    placeholder:'You Pass...',
    name:'pass',
    type: 'password',
    id: 'pass',
    required: true
  }

}

export default FormSave
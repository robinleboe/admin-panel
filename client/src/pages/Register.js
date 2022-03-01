import { useState, useEffect } from 'react'
import { Logo, FormRow, Alert } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import { useAppContext } from '../context/appContext'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  // global state and useNavigate

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: [e.target.value] })
  }

  const { isLoading, showAlert, displayAlert } = useAppContext()

  const onSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      displayAlert()
      return
    }
    console.log(values)
  }

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert />}
        {!values.isMember && (
          <FormRow
            name='name'
            type='text'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormRow
          name='email'
          type='email'
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          name='password'
          type='password'
          value={values.password}
          handleChange={handleChange}
        />

        <button type='submit' className='btn btn-block'>
          submit
        </button>

        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}

          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register

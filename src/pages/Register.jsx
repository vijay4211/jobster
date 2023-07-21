import { useState, useEffect } from 'react'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
import {toast} from 'react-toastify'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState)
  // console.log("Register values====",values);

  const handleChange = (e) => {
    // console.log(e.target)
    const name = e.target.name;
    const value = e.target.value;
    // console.log(`${name}:${value}`);
    setValues({...values, [name]:value});
  }

  const onSubmit = (e) => {
    e.preventDefault()
    // console.log(e.target)
    const {name,email,password,isMember} = values
    console.log("values===",values);
    if(!email || !password || (!isMember && !name)){
      toast.error("Please fill out all fields");
    }

  }

  const toggleMember = () => {
    //copy Entire thing inside the ...values
    setValues({ ...values, isMember: !values.isMember }) //false or true
    // console.log(values.isMember); //true(Login) then false(Register)
  }

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={onSubmit}>
        <Logo />
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}

        {/* email field */}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {
            values.isMember ? "Not a member yet?" : "Already a member?"
          }
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}

export default Register






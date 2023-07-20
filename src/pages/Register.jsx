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

// Points:==========
//copy Entire thing inside the  ...values
// setValues({...values, isMember: !values.isMember});
// !values.isMember is do false and true. if it is false then it will become true and if it is true then it will become false.





// The line you provided is using the setValues function to update the state of a component. It is typically used in a functional component that utilizes the useState hook in React.

// Let's break down the line to understand its meaning:

// setValues: This is a function that is used to update the state of the component. In React, state is often managed using the useState hook, and setValues would be the function returned by useState, allowing you to update the state.

// { ...values, isMember: !values.isMember }: This is an object that represents the new state that you want to set. It uses the spread operator (...) to create a shallow copy of the existing state, values. This is done to ensure that we don't directly mutate the original state object, which is a best practice in React.

// isMember: !values.isMember: This part of the object is setting the isMember property to the opposite of its current value. It appears to be toggling the isMember property between true and false. The ! operator is the logical NOT operator, so if values.isMember is true, !values.isMember will be false, and vice versa.

// Overall, this line is updating the state of the component, specifically changing the isMember property to its opposite value. The effect of this depends on the previous state of the isMember property. If it was true, it will be updated to false, and if it was false, it will be updated to true. It's a common pattern used for toggling boolean state values in React components.






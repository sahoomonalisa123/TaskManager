import React, { useState} from 'react'
import AuthLayout from '../../components/layouts/AuthLayout'
import {useNavigate} from 'react-router-dom'

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

const navigate = useNavigate();

// Handel Login form Submit
const handelLogin = async (e) =>{
  e.preventDefault();
};
  return (
    <AuthLayout>
      <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
        <h3 className="text-xl font-semibold text-black">Welcome Back</h3>
        <p className='text-xs text-slate-700 mt-[5px] mb-6'>Please enter your details to log in</p>

        <form onSubmit={handelLogin}>
          <input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email Address"
          placeholder='jhon@example.com'
          type="text"
          ></input>
        </form>
      </div>
      
    </AuthLayout>
  )
}

export default Login

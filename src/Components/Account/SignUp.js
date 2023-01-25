import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Account/Account.css';
import { LocalSee } from '@mui/icons-material';
import { Link, Navigate, useNavigate } from 'react-router-dom';

function SignUp() {
    const navigate = useNavigate()
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [error,setError]= useState('');
    const onHandleSubmit =async(e)=>{
    e.preventDefault('');
    setUsername('');
    setPassword('');
    setEmail('');
    setConfirmPassword('')

   //Register User...
const response = await fetch('http://localhost:3000/signup',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      username,
      email,
      password
    }),
   });
if(response.status == 201){
    const {user} = await response.json();
    await setError(`Congratulations ${user.username} , you have successfully signed in`)
    navigate('/')
}else if(response.status == 400){
   const {errors} = await response.json();
      if (errors.password){
       setError(errors.password)
      }else if(errors.username){
       setError(errors.username)
      }else if(errors.email){
       setError(errors.email)
      }else{
        setError('Something went wrong,Try signing up later')
      }
}

    }
   


const onChangeUsername =(e)=>{
        setUsername(e.target.value);
    }
const onChangeEmail =(e)=>{
          setEmail(e.target.value);
    }
const onChangePassword =(e)=>{
        setPassword(e.target.value);
    }
const onChangeConfirmPassword =(e)=>{
      setConfirmPassword(e.target.value);
  }

  return (

    <div className='form-container  flex items-center relative'>
    <div className='form-div '>
    <div><AccountCircleIcon style={{fontSize: "xxx-large", color:"blueviolet"}}/></div>
<p className='text-3xl '>Sign UP</p>
<form onSubmit={onHandleSubmit} className='form'>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Username :</label>
    <input className='input' type='text'  required name="username" value={username} onChange={onChangeUsername} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Email :</label>
    <input className='input' type='email' required name="email"  value={email}  onChange={onChangeEmail} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Password :</label>
    <input className='input' type="password" name='password' required  value={password} onChange={onChangePassword} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Confirm Password :</label>
    <input className='input' type="password" name='confirmPassword' required  value={confirmPassword} onChange={onChangeConfirmPassword} />
    </div>
    <div className='flex place-content-center mt-2 text-slate-400'><p>Already have an account  ? <Link to='/login' className='text-blue-300 '>Login</Link></p></div>

    <input type='submit' value='Sign Up' className='submit-button' />
</form>

    </div>
    <div className='absolute bottom-0 w-screen mb-2'>
       <h3>{error}</h3>
    </div>

    </div>
  )
}

export default SignUp;
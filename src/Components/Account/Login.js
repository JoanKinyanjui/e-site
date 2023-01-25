import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Account/Account.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate()
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [message,setMessage]= useState('');

const onHandleSubmit =async(e)=>{
    e.preventDefault();
    setPassword('');
    setEmail('');

    //Login Logic ...
    const response = await fetch('http://localhost:3000/login',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          password
        }),
       });
    console.log(email,password)
    if(response.status == 200){
        const {user} = await response.json();
        await setMessage(`You have successfully loggedIn with account${user.username}`);
        console.log('successfully logged in')
        navigate('/');
    }else if(response.status == 400){
        const {error}=await  response.json();
        await setMessage(error.message)

    }
}


    const onChangeEmail =(e)=>{
          setEmail(e.target.value);
    }
    const onChangePassword =(e)=>{
        setPassword(e.target.value);
    }

  return (
    <div className='form-container  flex items-center '>
    <div className='form-div '>
    <div><AccountCircleIcon style={{fontSize: "xxx-large", color:"blueviolet"}}/></div>
<p className='text-3xl mt-4'>Log In</p>
<form onSubmit={onHandleSubmit} className='form'>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Email :</label>
    <input className='input' type='email' required name="email"  value={email}  onChange={onChangeEmail} />
    </div>
    <div className='input-div flex place-content-between'>
    <label className='form-label'>Password :</label>
    <input className='input' type="password" name='password' required  value={password} onChange={onChangePassword} />
    </div>
    <div className='flex place-content-center mt-2 text-slate-400'><p>No account yet  ? <Link to='/signup' className='text-blue-300 '>Sign up</Link></p></div>
    <input type='submit' value='lOGIN' className='submit-button' />
</form>

    </div>
      <div className='absolute bottom-0 w-screen mb-2'>
       <h3>{message}</h3>
    </div>

    </div>
  )
}

export default Login;
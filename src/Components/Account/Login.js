import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import '../Account/Account.css';
import { Link } from 'react-router-dom';

function Login() {
    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onHandleSubmit =(e)=>{
    e.preventDefault();
    setUsername('');
    setPassword('');
    setEmail('');
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

  return (
    <div className='form-container  flex items-center '>
    <div className='form-div '>
    <div><AccountCircleIcon style={{fontSize: "xxx-large", color:"blueviolet"}}/></div>
<p className='text-3xl mt-4'>Log In</p>
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
    <div className='flex place-content-center mt-2 text-slate-400'><p>No account yet  ? <Link to='/signup' className='text-blue-300 '>Sign up</Link></p></div>
    <input type='submit' value='lOGIN' className='submit-button' />
</form>

    </div>

    </div>
  )
}

export default Login;
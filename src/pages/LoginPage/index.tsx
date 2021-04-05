import React, { useState } from 'react'
import Input from '../../components/Input'
import { LoginPageProps } from './interface'
import Button from '../../components/Button'
import './style.css'
import { IS_LOGIN_SESSION_KEY } from './constant'

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [inputUsername, setInputUsername] = useState<string>('')
  const [inputPassword, setInputPassword] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputUsername(e.target.value) 
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputPassword(e.target.value) 
  const handleLogin = () => {
    if(inputUsername === 'admin' && inputPassword === '12345') {
      onLoginSuccess();
      sessionStorage.setItem(IS_LOGIN_SESSION_KEY, 'true');
    } else
      setErrorMessage('Wrong username or password')
  }
  
  return (
    <div className="login-page">
      <h1>Login Page</h1>
      <Input value={inputUsername} label='Username' onChange={handleUsernameChange} />
      <Input value={inputPassword} label='Password' onChange={handlePasswordChange} type="password" />
      {errorMessage && 
        <>
            <br />
            <span className="error-message">{errorMessage}</span>
            <br />
        </>
      }
      <Button onClick={handleLogin}>Login</Button>
    </div>
  )
}

export default LoginPage
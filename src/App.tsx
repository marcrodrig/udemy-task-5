import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import Button from './components/Button'
import { PrivateRoutes } from './components/PrivateRoutes'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import { IS_LOGIN_SESSION_KEY } from './pages/LoginPage/constant'

function App() {
  const isLoginFromSession = sessionStorage.getItem(IS_LOGIN_SESSION_KEY) === 'true';
  const [isLogin, setIsLogin] = useState<boolean>(isLoginFromSession)

  const handleLoginSuccess = () => setIsLogin(true)
  const handleLogout = () => {
    setIsLogin(false)
    sessionStorage.setItem(IS_LOGIN_SESSION_KEY, 'false')
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Route
          render={(routeProps) => {
            return isLogin
              ? <Redirect to={'/home'} />
              : <LoginPage onLoginSuccess={handleLoginSuccess} {...routeProps} />
              }
            }
            path={'/login'} 
        />
        <PrivateRoutes isLogin={isLogin} />
      </BrowserRouter>
      {isLogin && <Button onClick={handleLogout}>Log Out</Button>}
    </div>
  )
}

export default App

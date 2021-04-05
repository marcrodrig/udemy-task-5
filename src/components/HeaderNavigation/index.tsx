import React from 'react'
import { Link } from 'react-router-dom'
import { RouteLink } from '../RouteLink'
import './style.css'

const HeaderNavigation: React.FC = () => {
  return (
    <div className="header-navigation">
      <Link component={RouteLink} to="/home">Home</Link>
      <Link component={RouteLink} to="/about">About</Link>
    </div>
  )
}

export default HeaderNavigation
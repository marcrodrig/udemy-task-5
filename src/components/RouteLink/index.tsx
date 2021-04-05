import React from 'react'
import { RouteLinkProps } from './interface'
import './style.css'

export const RouteLink: React.FC<RouteLinkProps> = ({ href, navigate, children }) => {
    const selectedClassName = window.location.pathname === href ? 'selected' : '';

    return (
        <div onClick={navigate} className={`link ${selectedClassName}`}>{children}</div>
    )
}
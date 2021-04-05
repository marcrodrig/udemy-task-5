import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import AboutPage from '../../pages/AboutPage'
import HomePage from '../../pages/HomePage'
import HeaderNavigation from '../HeaderNavigation'
import { PrivateRoutesProps } from './interface'

export const PrivateRoutes: React.FC<PrivateRoutesProps> = ({ isLogin }) => {
    return isLogin ? (
        <>
            <HeaderNavigation />
            <Switch>
                <Route component={AboutPage} path={'/about'} />
                <Route component={HomePage} path={'/'} />
            </Switch>
        </>
    ) : <Redirect to={'/login'} />
}
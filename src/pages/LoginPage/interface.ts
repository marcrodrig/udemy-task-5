import { RouteComponentProps } from 'react-router'

export interface LoginPageProps extends RouteComponentProps {
    onLoginSuccess(): void;
}
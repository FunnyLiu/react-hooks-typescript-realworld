import React from 'react';
import useAuth from '../context/auth';
import Home from './Home';
import { RouteComponentProps } from '@reach/router';

interface PrivateRouteProps extends RouteComponentProps {
  as: React.ElementType<any>;
}
// 先鉴权再调路由
export default function PrivateRoute({
  as: Comp,
  ...props
}: PrivateRouteProps) {
  const {
    state: { user },
  } = useAuth();
  return user ? <Comp {...props} /> : <Home />;
}

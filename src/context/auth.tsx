import React from 'react';
import {
  authReducer,
  initialState,
  AuthAction,
  AuthState,
} from '../reducers/auth';
import { getLocalStorageValue } from '../utils';
import { TOKEN_KEY, setToken, isTokenValid } from '../api/APIUtils';
import { logout } from '../api/AuthAPI';

type AuthContextProps = {
  state: AuthState;
  dispatch: React.Dispatch<AuthAction>;
};
// 创建context
const AuthContext = React.createContext<AuthContextProps>({
  state: initialState,
  dispatch: () => initialState,
});
// 提供AuthProvider
export function AuthProvider(props: React.PropsWithChildren<{}>) {
  const [state, dispatch] = React.useReducer(authReducer, initialState);
  React.useEffect(() => {
    const token = getLocalStorageValue(TOKEN_KEY);

    if (!token) return;

    if (isTokenValid(token)) {
      setToken(token);
      dispatch({ type: 'LOGIN' });
    } else {
      dispatch({ type: 'LOGOUT' });
      logout();
    }
  }, []);

  return <AuthContext.Provider value={{ state, dispatch }} {...props} />;
}
// 提供useAuth
export default function useAuth() {
  return React.useContext(AuthContext);
}

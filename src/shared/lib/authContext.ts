import {createContext} from 'react';
import {AuthProps} from 'shared/types';

export const AuthContext = createContext<AuthProps>({});

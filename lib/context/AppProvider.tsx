import React, {useCallback, useMemo, useState} from 'react';
import {AppContextValueType, LoginType, ProviderType} from '../types';
import AppContext from './AppContext';

const DEFAULT_INITIAL_LOGIN = {};

const AppProvider: ProviderType = ({children, initialLogin}) => {
  const [login, setLogin] = useState<LoginType>(
    initialLogin || DEFAULT_INITIAL_LOGIN,
  );

  const logout = useCallback(() => {
    setLogin(DEFAULT_INITIAL_LOGIN);
  }, []);

  const value = useMemo<AppContextValueType>(() => {
    return {
      login,
      logout,
      private: {
        setLogin,
      },
    };
  }, [login, logout]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

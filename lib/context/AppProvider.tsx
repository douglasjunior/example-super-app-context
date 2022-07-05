import React, {useCallback, useMemo, useState} from 'react';
import {AppContextValueType, LoginType, ProviderType} from '../types';
import AppContext from './AppContext';
import AppContextSetup from './AppContextSetup';

const DEFAULT_INITIAL_LOGIN = {};

const AppProvider: ProviderType = ({
  children,
  login: initialLogin,
  config,
  placeholder,
}) => {
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

  return (
    <AppContext.Provider value={value}>
      <AppContextSetup config={config} placeholder={placeholder}>
        {children}
      </AppContextSetup>
    </AppContext.Provider>
  );
};

export default AppProvider;

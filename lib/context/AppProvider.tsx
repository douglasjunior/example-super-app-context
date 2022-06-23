import React, {useMemo, useState} from 'react';
import {AppContextValueType, LoginType, ProviderType} from '../types';
import AppContext from './AppContext';

const AppProvider: ProviderType = ({children, initialLogin = {}}) => {
  const [login, setLogin] = useState<LoginType>(initialLogin);

  const value = useMemo<AppContextValueType>(() => {
    return {
      login,
      setLogin,
    };
  }, [login]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;

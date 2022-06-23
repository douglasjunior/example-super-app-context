import React from 'react';
import {AppContextValueType} from '../types';

const AppContext = React.createContext<AppContextValueType>(
  {} as AppContextValueType,
);

export default AppContext;

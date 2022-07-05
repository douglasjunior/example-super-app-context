import React, {useCallback, useState} from 'react';
import {enableEventEmitterDebug} from '../event-emitter/emitter';
import {SetupPropsType as AppConfigType} from '../types';
import useDidMount from '../utils/hooks/useDidMount';
import {createLogger} from '../utils/log/factory';

type AppContextSetupPropsType = {
  children: React.ReactNode;
  placeholder?: React.ReactNode;
  config?: AppConfigType;
};

const DEFAULT_PROPS: AppConfigType = {
  appName: 'App',
  eventEmitterDebug: __DEV__,
  reactotron: true,
};

const AppContextSetup: React.FC<AppContextSetupPropsType> = ({
  children,
  placeholder,
  config,
}) => {
  const [setupCompleted, setSetupCompleted] = useState(false);

  const setup = useCallback(async () => {
    try {
      const appConfig = {
        ...DEFAULT_PROPS,
        ...config,
      };

      await Promise.all([
        createLogger(appConfig),
        enableEventEmitterDebug(appConfig),
      ]);
    } finally {
      setSetupCompleted(true);
    }
  }, [config]);

  useDidMount(() => {
    setup();
  });

  return <>{setupCompleted ? children : placeholder}</>;
};

export default AppContextSetup;

import {SetupPropsType} from '../../types';
import ConsoleLogProvider from './ConsoleLogProvider';
import CrashlyticsLogProvider from './CrashlyticsLogProvider';
import Logger from './Logger';
import ReactotronLogProvider from './ReactotronLogProvider';

let logger: Logger;

export const createLogger = (config: SetupPropsType) => {
  logger = new Logger([
    new CrashlyticsLogProvider(config),
    new ReactotronLogProvider(config),
    new ConsoleLogProvider(config),
  ]);
};

export const getLogger = (): Logger => {
  return logger;
};

import {SetupPropsType} from '../../types';

export interface ILogProvider {
  log(...args: any[]): void;
  warn(...args: any[]): void;
  error(error: Error): void;
}

class AbstractLogProvider implements ILogProvider {
  config: SetupPropsType;

  constructor(config: SetupPropsType) {
    this.config = config;
  }

  log(): void {
    throw new Error('Method not implemented.');
  }

  warn(): void {
    throw new Error('Method not implemented.');
  }

  error(error: Error): void {
    throw new Error('Method not implemented.');
  }
}

export default AbstractLogProvider;

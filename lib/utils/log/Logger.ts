import {ILogProvider} from './AbstractLogProvider';

class Logger implements ILogProvider {
  private logProviders: ILogProvider[];

  constructor(logProviders: ILogProvider[]) {
    this.logProviders = logProviders;
  }

  log(...args: any[]) {
    this.logProviders.forEach(logProvider => logProvider.log(...args));
  }

  warn(...args: any[]) {
    this.logProviders.forEach(logProvider => logProvider.warn(...args));
  }

  error(error: Error) {
    this.logProviders.forEach(logProvider => logProvider.error(error));
  }
}

export default Logger;

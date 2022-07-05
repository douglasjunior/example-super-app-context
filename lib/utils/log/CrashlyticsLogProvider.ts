import firebaseApp from '@react-native-firebase/app';
import {SetupPropsType} from '../../types';
import AbstractLogProvider from './AbstractLogProvider';

class CrashlyticsLogProvider extends AbstractLogProvider {
  private instace?: import('@react-native-firebase/crashlytics').FirebaseCrashlyticsTypes.Module;

  constructor(config: SetupPropsType) {
    super(config);
    try {
      if (firebaseApp.app()) {
        const crashlytics = require('@react-native-firebase/crashlytics')();
        this.instace = crashlytics();
      }
    } catch (err) {
      console.warn(err);
    }
  }

  log(...args: any[]): void {
    this.instace?.log(args.map(String).join(', '));
  }

  warn(...args: any[]): void {
    this.instace?.log('WARN: ' + args.map(String).join(', '));
  }

  error(error: Error): void {
    this.instace?.recordError(error);
  }
}

export default CrashlyticsLogProvider;

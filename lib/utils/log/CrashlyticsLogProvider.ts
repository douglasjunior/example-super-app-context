import crashlytics, {
  FirebaseCrashlyticsTypes,
} from '@react-native-firebase/crashlytics';
import {SetupPropsType} from '../../types';
import AbstractLogProvider from './AbstractLogProvider';

class CrashlyticsLogProvider extends AbstractLogProvider {
  private instace: FirebaseCrashlyticsTypes.Module;

  constructor(config: SetupPropsType) {
    super(config);
    this.instace = crashlytics();
  }

  log(...args: any[]): void {
    this.instace.log(args.map(String).join(', '));
  }

  warn(...args: any[]): void {
    this.instace.log('WARN: ' + args.map(String).join(', '));
  }

  error(error: Error): void {
    this.instace.recordError(error);
  }
}

export default CrashlyticsLogProvider;

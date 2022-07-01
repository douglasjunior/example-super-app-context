import Reactotron, {ReactotronReactNative} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ReactotronType = typeof Reactotron & ReactotronReactNative;

declare global {
  interface Console {
    tron: ReactotronType;
  }
}

async function setupReactotron(enabled?: boolean, appName?: string) {
  if (!__DEV__) {
    return;
  }

  if (!enabled) {
    // Cria um fallback para imprimir no console as mensagens que serian enviadas para
    // o Reactotron
    console.tron = {} as ReactotronType;
    Object.assign(console.tron, console);
    return;
  }

  const reactotron = await Reactotron.setAsyncStorageHandler?.(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure({
      name: appName,
    }) // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!

  if (!reactotron) {
    return;
  }

  await reactotron.clear?.();

  const logFun = reactotron.log;
  const logImportantFun = reactotron.logImportant;
  const errorFun = reactotron.error;
  const warnFun = reactotron.warn;
  const debugFun = reactotron.debug;

  console.tron = Object.assign(reactotron, {
    log(...args: any[]) {
      console.log(...args);
      logFun?.(...args);
    },
    logImportant(...args: any[]) {
      console.log('IMPORTANT:', ...args);
      logImportantFun?.(...args);
    },
    error(message: any, stack: any) {
      console.error(message, stack);
      errorFun?.(message, stack);
    },
    warn(message: any) {
      console.warn(message);
      warnFun?.(message);
    },
    debug(message: any, important?: boolean) {
      console.debug(message);
      debugFun?.(message, important);
    },
  });
}

export default setupReactotron;

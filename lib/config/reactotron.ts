import Reactotron, {ReactotronReactNative} from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

declare global {
  interface Console {
    tron: typeof Reactotron & ReactotronReactNative;
  }
}

async function setupReactotron(appName?: string) {
  if (!__DEV__) {
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

  console.tron = reactotron;
}

export default setupReactotron;

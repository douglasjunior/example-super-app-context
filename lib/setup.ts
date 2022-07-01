import setupReactotron from './config/reactotron';
import {enableEventEmitterDebug} from './event-emitter/emitter';
import {SetupPropsType} from './types';

const DEFAULT_PROPS: SetupPropsType = {
  appName: 'App',
  eventEmitterDebug: __DEV__,
  reactotron: true,
};

async function setup(props: SetupPropsType | undefined) {
  const {appName, eventEmitterDebug, reactotron} = {
    ...DEFAULT_PROPS,
    ...props,
  };

  await Promise.all([
    setupReactotron(reactotron, appName),
    enableEventEmitterDebug(eventEmitterDebug),
  ]);
}

export default setup;

import setupReactotron from './config/reactotron';
import {SetupPropsType} from './types';

async function setup({appName}: SetupPropsType) {
  await Promise.all([setupReactotron(appName)]);
}

export default setup;

import setupReactotron from './config/reactotron';
import {SetupPropsType} from './types';

async function setup({appName}: SetupPropsType | undefined = {}) {
  await Promise.all([setupReactotron(appName)]);
}

export default setup;

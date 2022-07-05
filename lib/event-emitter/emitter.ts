import {EventEmitter} from 'events';
import {SetupPropsType} from '../types';
import {getLogger} from '../utils';

const emitter = new EventEmitter();

const emitFn = emitter.emit.bind(emitter);

export function enableEventEmitterDebug(config: SetupPropsType) {
  if (config.eventEmitterDebug) {
    function emitProxy(type: string | number, ...args: any[]) {
      getLogger().log('EVENT_EMITTER', type, ...args);
      return emitFn(type, ...args);
    }

    emitter.emit = emitProxy;
  } else {
    emitter.emit = emitFn;
  }
}

export default emitter;

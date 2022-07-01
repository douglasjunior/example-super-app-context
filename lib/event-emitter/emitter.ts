import {EventEmitter} from 'events';

const emitter = new EventEmitter();

const emitFn = emitter.emit.bind(emitter);

export function enableEventEmitterDebug(enabled?: boolean) {
  if (enabled) {
    function emitProxy(type: string | number, ...args: any[]) {
      console.tron?.log?.('EVENT_EMITTER', type, ...args);
      return emitFn(type, ...args);
    }
    emitter.emit = emitProxy;
  } else {
    emitter.emit = emitFn;
  }
}

export default emitter;

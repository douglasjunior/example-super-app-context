import {useEffect} from 'react';
import emitter from './emitter';

const useSubscribe = (
  eventType: string,
  callback: (...args: unknown[]) => unknown,
) => {
  useEffect(() => {
    const listener = emitter.addListener(eventType, callback);

    return () => {
      listener.remove();
    };
  }, [eventType, callback]);
};

export default useSubscribe;

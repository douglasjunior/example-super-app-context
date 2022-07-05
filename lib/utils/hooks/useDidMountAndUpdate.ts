import {DependencyList, EffectCallback, useEffect} from 'react';

const useDidMountAndUpdate = (
  callback: EffectCallback,
  deps?: DependencyList,
): void => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useEffect(callback, deps);
};

export default useDidMountAndUpdate;

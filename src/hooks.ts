import { useMemo } from 'react';
import { setRef } from './utils';
import { UseForkRef } from './types';

export const useForkRef: UseForkRef = (refA, refB) =>
  useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return refValue => {
      setRef(refA, refValue);

      setRef(refB, refValue);
    };
  }, [refA, refB]);

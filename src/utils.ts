import { isValidElement, Children, ReactElement } from 'react';
import {
  SelectableElement,
  SwiperModules,
  SwiperModuleName,
  ReactIdSwiperChildren,
  SetRef
} from './types';

export const classNames = (el: SelectableElement): string => {
  if (typeof el === 'string') {
    return el.split('.').join(' ').trim();
  } else if (el instanceof HTMLElement) {
    return el.className;
  }

  return '';
};

export const validateChildren = (children: ReactIdSwiperChildren): boolean => {
  let isValid = true;

  if (Array.isArray(children)) {
    Children.forEach(children, (child: string | number | ReactElement) => {
      if (!isValidElement(child)) {
        isValid = false;
      }
    });
  } else {
    isValid = isValidElement(children);
  }

  return isValid;
};

export const isReactElement = (element: ReactElement): boolean =>
  isValidElement(element) &&
  (typeof element.type === 'string' ||
    typeof element.type === 'function' ||
    typeof element.type === 'object');

export const isModuleAvailable = (
  modules: SwiperModules,
  moduleName: SwiperModuleName
): boolean => {
  let moduleAvailable = false;

  for (let i = 0; i < modules.length; i++) {
    if (modules[i].name === moduleName) {
      moduleAvailable = true;
      break;
    }
  }

  return moduleAvailable;
};

export const setRef: SetRef = (ref, value) => {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
};

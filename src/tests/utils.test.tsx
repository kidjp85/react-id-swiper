import React, { FunctionComponent } from 'react';
import { Pagination, Navigation, Scrollbar, Parallax } from 'swiper/js/swiper.esm';
import { mount } from 'enzyme';
import { classNames, validateChildren, isReactElement, isModuleAvailable } from '../utils';

describe('utils', () => {
  describe('classnames', () => {
    test('it should return empty string when input is undefined', () => {
      expect(classNames(undefined)).toEqual('');
    });

    test('it should return class string when input is string', () => {
      expect(classNames('.slide-container')).toEqual('slide-container');
    });

    test('it should return class string when input is html element', () => {
      const el = document.createElement('div');
      el.className = 'slide-container';

      expect(classNames(el)).toEqual('slide-container');
    });
  });

  describe('validateChildren', () => {
    describe('when has more than 1 children prop', () => {
      test('it should return true if children props are valid', () => {
        const wrapper = mount(
          <div>
            <div key="s1">Slide 1</div>
            <div key="s2">Slide 2</div>
          </div>
        );

        expect(validateChildren(wrapper.props().children)).toEqual(true);
      });

      test('it should return false if children props are invalid', () => {
        const wrapper = mount(
          <div>
            <div key="s1">Slide 1</div>
            Slide 2
          </div>
        );

        expect(validateChildren(wrapper.props().children)).toEqual(false);
      });
    });

    describe('when has only 1 child prop', () => {
      test('it should return true if children props are valid', () => {
        const wrapper = mount(
          <div>
            <div key="s1">Slide 1</div>
          </div>
        );

        expect(validateChildren(wrapper.props().children)).toEqual(true);
      });

      test('it should return false if children props are invalid', () => {
        const wrapper = mount(<div>Slide 2</div>);

        expect(validateChildren(wrapper.props().children)).toEqual(false);
      });
    });
  });

  describe('isReactElement', () => {
    test('it should return true when element is react element', () => {
      const DOMTypeElement = <div>Hello world</div>;
      const CompositeTypeElement: FunctionComponent = () => <div>Hello world</div>;

      expect(isReactElement(DOMTypeElement)).toEqual(true);
      expect(isReactElement(<CompositeTypeElement />)).toEqual(true);
    });
  });

  describe('isModuleAvailable', () => {
    const swiperModules = [Pagination, Navigation, Scrollbar, Parallax];

    test('it should return true when module is available', () => {
      expect(isModuleAvailable(swiperModules, 'pagination')).toEqual(true);
    });

    test('it should return false when module is unavailable', () => {
      expect(isModuleAvailable(swiperModules, 'virtual')).toEqual(false);
    });
  });
});

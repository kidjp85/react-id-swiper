import React from 'react';
import { render, mount } from 'enzyme';
import ReactIdSwiper from '../ReactIdSwiper';
import { ReactIdSwiperProps, WrappedElementType } from '../types';

const renderSwiper = (params?: ReactIdSwiperProps) =>
  render(
    <ReactIdSwiper {...params}>
      <div key="s1">Slide 1</div>
      <div key="s2">Slide 2</div>
    </ReactIdSwiper>
  );

const mountSwiper = (params?: ReactIdSwiperProps) =>
  mount(
    <ReactIdSwiper {...params}>
      <div key="s1">Slide 1</div>
      <div key="s2">Slide 2</div>
    </ReactIdSwiper>
  );

describe('ReactIdSwiper', () => {
  describe('defaultProps', () => {
    const component = mountSwiper();

    test('should have default props', () => {
      expect(component.prop('containerClass')).toEqual('swiper-container');
      expect(component.prop('wrapperClass')).toEqual('swiper-wrapper');
      expect(component.prop('slideClass')).toEqual('swiper-slide');
      expect(component.prop('ContainerEl')).toEqual('div');
      expect(component.prop('WrapperEl')).toEqual('div');
    });
  });

  describe('rendering', () => {
    test('it should not render component with no child', () => {
      const wrapper = mount(<ReactIdSwiper />);

      expect(wrapper.html()).toEqual(null);
    });

    test('it should not render component with invalid children props', () => {
      const multipleChildren = mount(
        <ReactIdSwiper>
          <div key="s1">Slide 1</div>
          {'Slide 2' as any}
        </ReactIdSwiper>
      );

      const singleChildren = mount(<ReactIdSwiper>{'Slide 2' as any}</ReactIdSwiper>);

      expect(multipleChildren.html()).toEqual(null);
      expect(singleChildren.html()).toEqual(null);
    });
  });

  describe('rendering snapshot', () => {
    // With default props
    describe('Default', () => {
      test('it should render default swiper', () => {
        expect(renderSwiper()).toMatchSnapshot();
      });
    });

    // Render pagination
    describe('Pagination', () => {
      const params = {
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      };

      test('it should render pagination', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });

      test('it should render pagination with customized class name', () => {
        const customizedParams = {
          pagination: {
            el: '.swiper-pagination.customized-swiper-pagination'
          },
          containerClass: 'customized-swiper-container' // Replace swiper-container with customized-swiper-container
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });

      test('it should render pagination with customized function', () => {
        const customizedParams = {
          ...params,
          renderCustomPagination: () => <span className="pagination-with-custom-function" />
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });
    });

    // Render navigation
    describe('Navigation', () => {
      const params = {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      };

      test('it should render navigation buttons', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });

      test('it should render pagination with customized class name', () => {
        const customizedParams = {
          ...params,
          navigation: {
            nextEl: '.swiper-button-next.customized-swiper-button-next',
            prevEl: '.swiper-button-prev.customized-swiper-button-prev'
          }
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });

      test('it should render pagination with customized function', () => {
        const customizedParams = {
          ...params,
          renderCustomNextButton: () => <span>Customized next button</span>,
          renderCustomPrevButton: () => <span>Customized prev button</span>
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });
    });

    describe('Parallax', () => {
      const params = {
        parallax: true,
        parallaxEl: {
          el: '.parallax-bg',
          value: '-23%'
        }
      };

      test('it should render parallax', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('Scrollbar', () => {
      const params = {
        scrollbar: {
          el: '.swiper-scrollbar',
          hide: true
        }
      };

      test('it should render scrollbar', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('No swiping', () => {
      const params = {
        noSwiping: true
      };

      test('it should render slide with swiper-no-swiping class name', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('RTL', () => {
      const params = {
        rtl: 'rtl'
      };

      test('it should render with rtl', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('Custom container & wrapper', () => {
      interface Params {
        ContainerEl: WrappedElementType;
        WrapperEl: WrappedElementType;
      }

      const params: Params = {
        ContainerEl: 'div',
        WrapperEl: 'div'
      };

      test('it should render with custom container & wrapper', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });
  });
});

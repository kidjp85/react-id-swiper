import React from 'react';
import { render, mount } from 'enzyme';
import ReactIdSwiper from '../index';
import { ReactIdSwiperRenderProps } from '../types';

const renderSwiper = (params?: ReactIdSwiperRenderProps) =>
  render(
    <ReactIdSwiper {...params}>
      <div key="s1">Slide 1</div>
      <div key="s2">Slide 2</div>
    </ReactIdSwiper>
  );

const mountSwiper = params =>
  mount(
    <ReactIdSwiper {...params}>
      <div key="s1">Slide 1</div>
      <div key="s2">Slide 2</div>
    </ReactIdSwiper>
  );

describe('ReactIdSwiper', () => {
  describe('defaultProps', () => {
    const component = mountSwiper({});

    test('should have default props', () => {
      expect(component.prop('containerClass')).toEqual('swiper-container');
      expect(component.prop('wrapperClass')).toEqual('swiper-wrapper');
      expect(component.prop('slideClass')).toEqual('swiper-slide');
      expect(component.prop('ContainerEl')).toEqual('div');
      expect(component.prop('WrapperEl')).toEqual('div');
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
          ...params,
          paginationCustomizedClass: 'pagination-with-custom-class-name'
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
          nextButtonCustomizedClass: 'next-button-with-customized-class-name',
          prevButtonCustomizedClass: 'prev-button-with-customized-class-name'
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
        rtl: true
      };

      test('it should render with rtl', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('Custom container & wrapper', () => {
      const params = {
        ContainerEl: 'section',
        WrapperEl: 'section'
      };

      test('it should render with custom container & wrapper', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });
  });
});

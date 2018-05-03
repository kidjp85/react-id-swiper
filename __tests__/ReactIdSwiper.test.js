import React from 'react';
import { render, mount } from 'enzyme';
import ReactIdSwiper from '../src/index';

const renderSwiper = params =>
  render(
    <ReactIdSwiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
    </ReactIdSwiper>
  );

const mountSwiper = params =>
  mount(
    <ReactIdSwiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
    </ReactIdSwiper>
  );

describe('ReactIdSwiper', () => {
  describe('defaultProps', () => {
    const component = mountSwiper({});

    it('should have default props', () => {
      expect(component.prop('containerClass')).toEqual('swiper-container');
      expect(component.prop('wrapperClass')).toEqual('swiper-wrapper');
      expect(component.prop('slideClass')).toEqual('swiper-slide');
      expect(component.prop('ContainerEl')).toEqual('div');
      expect(component.prop('WrapperEl')).toEqual('div');
    });
  });

  describe('lifecycle', () => {
    let component;

    beforeEach(() => {
      component = mountSwiper({});
    });

    describe('componentDidMount', () => {
      it('should initialize swiper', () => {
        expect(component.instance().swiper).toBeDefined();
      });
    });

    describe('componentWillUnmount', () => {
      it('should delete swiper instance', () => {
        const componentWillUnmount = jest.spyOn(component.instance(), 'componentWillUnmount');
        component.unmount();
        expect(componentWillUnmount).toHaveBeenCalled();
      });
    });

    describe('componentDidUpdate', () => {
      it('should rebuild swiper when rebuildOnUpdate is true', () => {
        const rebuildSwiper = jest.spyOn(component.instance(), 'rebuildSwiper');
        component.setProps({
          rebuildOnUpdate: true
        });

        expect(rebuildSwiper).toHaveBeenCalled();
      });

      it('should update swiper when shouldSwiperUpdate is true', () => {
        const updateSwiper = jest.spyOn(component.instance(), 'updateSwiper');
        component.setProps({
          shouldSwiperUpdate: true
        });

        expect(updateSwiper).toHaveBeenCalled();
      });
    });
  });

  describe('rendering snapshot', () => {
    // With default props
    describe('Default', () => {
      it('should render default swiper', () => {
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

      it('should render pagination', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });

      it('should render pagination with customized class name', () => {
        const customizedParams = {
          ...params,
          paginationCustomizedClass: 'pagination-with-custom-class-name'
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });

      it('should render pagination with customized function', () => {
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

      it('should render navigation buttons', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });

      it('should render pagination with customized class name', () => {
        const customizedParams = {
          ...params,
          nextButtonCustomizedClass: 'next-button-with-customized-class-name',
          prevButtonCustomizedClass: 'prev-button-with-customized-class-name'
        };

        expect(renderSwiper(customizedParams)).toMatchSnapshot();
      });

      it('should render pagination with customized function', () => {
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

      it('should render parallax', () => {
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

      it('should render parallax', () => {
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

      it('should render scrollbar', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('No swiping', () => {
      const params = {
        noSwiping: true
      };

      it('should render slide with swiper-no-swiping class name', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('RTL', () => {
      const params = {
        rtl: true
      };

      it('should render with rtl', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });

    describe('Custom container & wrapper', () => {
      const params = {
        ContainerEl: 'section',
        WrapperEl: 'section'
      };

      it('should render with custom container & wrapper', () => {
        expect(renderSwiper(params)).toMatchSnapshot();
      });
    });
  });
});

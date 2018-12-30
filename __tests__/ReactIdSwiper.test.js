import React from 'react';
import { render, mount } from 'enzyme';
import ReactIdSwiper from '../src/index';

const renderSwiper = params =>
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

  describe('methods', () => {
    let component;
    let instance;

    beforeEach(() => {
      component = mountSwiper({});
      instance = component.instance();
    });

    describe('componentDidMount', () => {
      test('it should initialize swiper', () => {
        expect(instance.swiper).toBeDefined();
      });

      test('it should slide to wanted slide if `activeSlideKey` is given', () => {
        component = mountSwiper({ activeSlideKey: 's2' });
        const { swiper } = component.instance();

        expect(swiper.activeIndex).toBe(1);
      });
    });

    describe('componentWillUnmount', () => {
      let destroySwiper;

      beforeEach(() => {
        destroySwiper = jest.spyOn(instance.swiper, 'destroy');
      });

      afterEach(() => {
        destroySwiper.mockReset();
      });

      test('it should return if swiper instance does not exist', () => {
        const { swiper } = instance;
        instance.swiper = undefined;
        component.unmount();
        expect(destroySwiper).not.toHaveBeenCalled();
        instance.swiper = swiper;
      });

      test('it should delete swiper instance if exist', () => {
        component.unmount();
        expect(destroySwiper).toHaveBeenCalled();
      });
    });

    describe('componentDidUpdate', () => {
      let rebuildSwiper;
      let updateSwiper;
      let swiperSlide;

      beforeEach(() => {
        rebuildSwiper = jest.spyOn(instance, 'rebuildSwiper');
        updateSwiper = jest.spyOn(instance, 'updateSwiper');
        swiperSlide = jest.spyOn(instance.swiper, 'slideTo');
      });

      afterEach(() => {
        rebuildSwiper.mockReset();
        updateSwiper.mockReset();
        swiperSlide.mockReset();
      });

      test('it should return if swiper instance does not exist', () => {
        const { swiper } = instance;
        instance.swiper = undefined;
        component.setProps({
          rebuildOnUpdate: true
        });

        expect(rebuildSwiper).not.toHaveBeenCalled();
        expect(updateSwiper).not.toHaveBeenCalled();

        instance.swiper = swiper;
      });

      test('it should rebuild swiper when rebuildOnUpdate is true', () => {
        component.setProps({
          rebuildOnUpdate: true
        });

        expect(rebuildSwiper).toHaveBeenCalled();
      });

      test('it should update swiper when shouldSwiperUpdate is true', () => {
        component.setProps({
          shouldSwiperUpdate: true
        });

        expect(updateSwiper).toHaveBeenCalled();
        expect(swiperSlide).toHaveBeenCalled();
      });

      test('it should not update swiper when shouldSwiperUpdate nor rebuildOnUpdate is true', () => {
        component.setProps({
          shouldSwiperUpdate: false,
          shourebuildOnUpdateldSwiperUpdate: false
        });

        expect(updateSwiper).not.toHaveBeenCalled();
        expect(rebuildSwiper).not.toHaveBeenCalled();
      });

      test('it should slide to wanted slide if `activeSlideKey` is given', () => {
        component = mountSwiper({ activeSlideKey: 's2' });
        const { swiper } = component.instance();

        expect(swiper.activeIndex).toBe(1);
      });
    });

    describe('updateSwiper', () => {
      let updateSwiper;

      beforeEach(() => {
        updateSwiper = jest.spyOn(instance.swiper, 'update');
      });

      afterEach(() => {
        updateSwiper.mockReset();
      });

      test('it should not update swiper if swiper instance does not exist', () => {
        const { swiper } = instance;
        instance.swiper = undefined;
        instance.updateSwiper();

        expect(updateSwiper).not.toHaveBeenCalled();

        instance.swiper = swiper;
      });

      test('it should update swiper if swiper instance exists', () => {
        instance.updateSwiper();

        expect(updateSwiper).toHaveBeenCalled();
      });
    });

    describe('renderContent', () => {
      test('it should return false if element does not exist', () => {
        expect(instance.renderContent(null)).toBeFalsy();
      });
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

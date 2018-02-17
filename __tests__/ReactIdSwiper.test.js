import React from 'react';
import ReactIdSwiper from '../src/index';
import { render } from 'enzyme'

const renderSwiper = params => render(
  <ReactIdSwiper {...params}>
    <div>Slide 1</div>
    <div>Slide 2</div>
  </ReactIdSwiper>
)
  
describe('ReactIdSwiper', () => {
  describe('Default', () => {
    it('should render default swiper', () => {
      expect(renderSwiper()).toMatchSnapshot();
    });
  })

  describe('Pagination', () => {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    }

    it('should render pagination', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })

    it('should render pagination with customized class name', () => {
      const customizedParams = {
        ...params,
        paginationCustomizedClass: 'pagination-with-custom-class-name'
      }

      expect(renderSwiper(customizedParams)).toMatchSnapshot();
    })

    it('should render pagination with customized function', () => {
      const customizedParams = {
        ...params,
        renderCustomPagination: () => <span className="pagination-with-custom-function"></span>
      }

      expect(renderSwiper(customizedParams)).toMatchSnapshot();
    })
  })

  describe('Navigation', () => {
    const params = {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    it('should render navigation buttons', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })

    it('should render pagination with customized class name', () => {
      const customizedParams = {
        ...params,
        nextButtonCustomizedClass: 'next-button-with-customized-class-name',
        prevButtonCustomizedClass: 'prev-button-with-customized-class-name'
      }

      expect(renderSwiper(customizedParams)).toMatchSnapshot();
    })

    it('should render pagination with customized function', () => {
      const customizedParams = {
        ...params,
        renderCustomNextButton: () => <span>Customized next button</span>,
        renderCustomPrevButton: () => <span>Customized prev button</span>
      }

      expect(renderSwiper(customizedParams)).toMatchSnapshot();
    })
  })

  describe('Parallax', () => {
    const params = {
      parallax: true,
      parallaxEl: {
        el: '.parallax-bg',
        value: '-23%'
      }
    }

    it('should render parallax', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })
  })

  describe('Scrollbar', () => {
    const params = {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      }
    }

    it('should render scrollbar', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })
  })

  describe('No swiping', () => {
    const params = {
      noSwiping: true
    }

    it('should render slide with swiper-no-swiping class name', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })
  })

  describe('RTL', () => {
    const params = {
      rtl: true
    }

    it('should render with rtl', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })
  })

  describe('Custom container & wrapper', () => {
    const params = {
      ContainerEl: 'section',
      WrapperEl: 'section'
    }

    it('should render with custom container & wrapper', () => {
      expect(renderSwiper(params)).toMatchSnapshot();
    })
  })
})

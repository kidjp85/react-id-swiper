import React from 'react';
import { mount } from 'enzyme';
import Swiper from './index';

let instantiationCount = 0;
function mockSwiper() {
  instantiationCount++;
};
mockSwiper.prototype.destroy = jest.fn();

jest.mock('swiper/dist/js/swiper.js', () => mockSwiper);

describe('Swiper', () => {
  it('rebuilds swiper when instance().rebuild is called', () => {
    const wrapper = mount(<Swiper />);

    expect(mockSwiper.prototype.destroy).not.toBeCalled();
    expect(instantiationCount).toBe(1);

    wrapper.instance().rebuildSwiper();

    expect(mockSwiper.prototype.destroy).toBeCalled();
    expect(instantiationCount).toBe(2);
  });
});

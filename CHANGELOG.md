# Change Log for React-id-swiper

## [v2.4.0](https://github.com/kidjp85/react-id-swiper/compare/2.4.0...2.3.2) - Released on Nov 7th, 2019
  * Upgrade to support `Swiper` version 5.x
  * Drop support for `Swiper`'s stylesheet
  * Upgrade npm packages

## [v2.3.2](https://github.com/kidjp85/react-id-swiper/compare/2.3.2...2.3.1) - Released on July 24th, 2019
  * Upgrade npm packages
  * Replace `tslint` with `eslint`

## [v2.3.1](https://github.com/kidjp85/react-id-swiper/compare/2.3.1...2.3.0) - Released on June 27th, 2019
  * Fix bug [276](https://github.com/kidjp85/react-id-swiper/issues/276) for rebuildOnUpdate and shouldSwiperUpdate not working properly.

## [v2.3.0](https://github.com/kidjp85/react-id-swiper/compare/2.3.0...2.1.2) - Released on June 27th, 2019
  * Use Swiper full build version as default instead of `react-id-swiper/lib/react-id-swiper.full`
  * Provide custom build version which allows to use `Swiper` class as props instead of importing directly from `swiper/dist/js/swiper.esm`
  * Stylesheet files are now can be loaded from `react-id-swiper/lib/styles`

## [v2.1.2](https://github.com/kidjp85/react-id-swiper/compare/2.1.2...2.1.1) - Released on April 16th, 2019
  * Fix rendering issue for styled-component element

## [v2.1.1](https://github.com/kidjp85/react-id-swiper/compare/2.1.1...2.1.0) - Released on Mar 26th, 2019
  * Add full version back to lib folder

## [v2.1.0](https://github.com/kidjp85/react-id-swiper/compare/2.1.0...2.0.0) - Released on Mar 15th, 2019
  * :bomb: **Great news** - Add new props **`modules`** that allows to import only necessary swiper modules.
  * Fix `activeSlideKey` does not work correctly when `loop: true`

## [v2.0.0](https://github.com/kidjp85/react-id-swiper/compare/2.0.0...2.0.0-beta) - Released on Mar 14th, 2019
  * Add tests
  * Update README

## [*v2.0.0-beta*](https://github.com/kidjp85/react-id-swiper/compare/2.0.0...1.6.9) - Released on Mar 13th, 2019
  * Rewrite completely new package with Typescript + React Hooks Apis
  * Use `swiper` as peer-dependencies
  * Add new prop `getSwiper` function that returns `Swiper` instance.
  * Drop custom build for lightweight version
  * Drop `swiper` from standalone umd build
  * Add swiper@4.5.0 stylesheet files

## [v1.6.9](https://github.com/kidjp85/react-id-swiper/compare/1.6.9...1.6.8) - Released on Feb 24th, 2019
  * Upgrade swiper@4.4.6
  * Update babel 7
  * [PR-227](https://github.com/kidjp85/react-id-swiper/pull/227) by [jpetitcolas](https://github.com/jpetitcolas)

## [v1.6.8](https://github.com/kidjp85/react-id-swiper/compare/1.6.8...1.6.7) - Released on Sep 20th, 2018
  * Upgrade swiper@4.4.1
  * Put `src/styles` folder back which only support `css`, `scss`
  * Update README

## [v1.6.7](https://github.com/kidjp85/react-id-swiper/compare/1.6.7...1.6.6) - Released on Sep 2nd, 2018
  * Upgrade swiper@4.3.5
  * Fix typo for README
  * Remove `src/styles` folder
  * Update test

## [v1.6.6](https://github.com/kidjp85/react-id-swiper/compare/1.6.6...1.6.5) - Released on June 17th, 2018
  * Upgrade swiper@4.3.3 for custom build
  * Remove support for parallax in lightweight version
  * Update test

## [v1.6.5](https://github.com/kidjp85/react-id-swiper/compare/1.6.5...1.6.4) - Released on June 14th, 2018
  * Upgrade swiper@4.3.3

## [v1.6.4](https://github.com/kidjp85/react-id-swiper/compare/1.6.4...1.6.3) - Released on May 18th, 2018
  * Provide lightweight version which drops those features below
    - Virtual
    - Keyboard
    - Mouse wheel
    - Zoom
    - Lazy load image
    - A11y
    - History
    - Hash-navigation
    - Effect-cube
    - Effect-flip
    - Effect-coverflow


## [v1.6.3](https://github.com/kidjp85/react-id-swiper/compare/1.6.3...1.6.2) - Released on May 3rd, 2018
  * Upgrade swiper@4.2.6
  * Deprecate these props:
    - renderCustomPrevButton
    - renderCustomNextButton
    - renderCustomScrollbar
    - renderCustomPagination
    - renderCustomParallax
    - prevButtonCustomizedClass,
    - nextButtonCustomizedClass,
    - paginationCustomizedClass,
    - scrollbarCustomizedClass
  * Add new render props:
    - renderPrevButton
    - renderNextButton
    - renderScrollbar
    - renderPagination
    - renderParallax
  * Clean code
  * Update unit test

## [v1.6.2](https://github.com/kidjp85/react-id-swiper/compare/1.6.2...1.6.1) - Released on April 1st, 2018
  * Upgrade swiper@4.2.2
  * Update unit test

## [v1.6.1](https://github.com/kidjp85/react-id-swiper/compare/1.6.1...1.5.8) - Released on February 17th, 2018
  * Upgrade swiper@4.1.6
  * Add unit test

## [v1.5.8](https://github.com/kidjp85/react-id-swiper/compare/1.5.8...1.5.7) - Released on January 24th, 2018
  * Upgrade swiper@4.1.0
  * Fix bug for UMD build

## [v1.5.7](https://github.com/kidjp85/react-id-swiper/compare/1.5.7...1.5.6) - Released on December 20th, 2017
  * Add umd version
  * Add new params
    - ContainerEl
    - WrapperEl
    - renderCustomPrevButton
    - renderCustomNextButton
    - renderCustomScrolbar
    - renderCustomPagination
    - renderCustomParallax

## [v1.5.6](https://github.com/kidjp85/react-id-swiper/compare/1.5.6...1.5.5) - Released on December 1st, 2017
  * Upgrade Swiper@4.0.7
  * Add jest. Expose rebuildSwiper instance method [PR 108](https://github.com/kidjp85/react-id-swiper/pull/108) by [timkindberg](https://github.com/timkindberg)

## [v1.5.5](https://github.com/kidjp85/react-id-swiper/compare/1.5.5...1.5.4) - Released on November 15, 2017
  * Upgrade Swiper@4.0.6
  * Add support for parallax
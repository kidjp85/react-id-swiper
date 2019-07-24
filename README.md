[![npm Version](https://img.shields.io/npm/v/react-id-swiper.svg?style=flat-square)](https://npmjs.org/package/react-id-swiper)
[![Coverage Status](https://img.shields.io/codecov/c/github/moroshko/react-autosuggest/master.svg?style=flat-square)](https://codecov.io/gh/kidjp85/react-id-swiper)
[![npm Downloads](https://img.shields.io/npm/dm/react-id-swiper.svg?style=flat-square)](https://npmjs.org/package/react-id-swiper)
[![Build Status](https://travis-ci.org/kidjp85/react-id-swiper.svg?branch=master)](https://travis-ci.org/kidjp85/react-id-swiper)
[![Greenkeeper badge](https://badges.greenkeeper.io/kidjp85/react-id-swiper.svg)](https://greenkeeper.io/)

[![Package Quality](http://npm.packagequality.com/badge/react-id-swiper.png)](http://packagequality.com/#?package=react-id-swiper)

react-id-swiper ( Newest version 2.3.2 )
========================================
> A library to use [Swiper](http://www.idangero.us/swiper/get-started/) as a ReactJs component

![Demo](https://media.giphy.com/media/mByDrCTcJch4HVhmfi/giphy.gif)

What is Swiper?
===============

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior.
It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers
Swiper is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.

# Props

| Name               | Type     | Default value    | Description                                      |
| ------------------ | -------- | ---------------- | -------------------------------------------------|
| ContainerEl        | String   | 'div'            | Element type for container                       |
| containerClass     | String   | swiper-container | Swiper container class name                      |
| WrapperEl          | String   | 'div'            | Element type for wrapper                         |
| wrapperClass       | String   | swiper-wrapper   | Swiper wrapper class name                        |
| slideClass         | String   | swiper-slide     | Swiper slide class name                          |
| shouldSwiperUpdate | Boolean  | false            | Update swiper when component is updated          |
| rebuildOnUpdate    | Boolean  | false            | Rebuild swiper when component is updated         |
| noSwiping          | Boolean  | false            | Disable swiping by condition                     |
| activeSlideKey     | String   | null             | Initial slide index                              |
| renderPrevButton   | function |                  | Render props function for prev button            |
| renderNextButton   | function |                  | Render props function for next button            |
| renderScrollbar    | function |                  | Render props function for scrollbar              |
| renderPagination   | function |                  | Render props function for pagination             |
| renderParallax     | function |                  | Render props function for parallax               |
| getSwiper          | function |                  | Callback function that returns Swiper instance   |

**If you want to use Swiper custom build to reduce bundle size, you need to use extra props below.**

# Custom build extra props

| Name               | Type     | Default value    | Description                                      |
| ------------------ | -------- | ---------------- | -------------------------------------------------|
| Swiper             | Class    |                  | Swiper class                                     |
| modules            | array    |                  | Array of Swiper necessary modules                |


**NOTE:**
* You can also use Swiper's original params too. Swiper API documentation [HERE](http://idangero.us/swiper/api/)
* Find more info about Swiper custom build [HERE](https://idangero.us/swiper/api/#custom-build)

# Installation and setup

From version 2.0.0, it requires **React & ReactDOM ver >=16.8.0** to use [Hooks](https://reactjs.org/docs/hooks-intro.html)

## Npm package

> By npm

```bash
npm install --save react-id-swiper@latest swiper@latest
```

> By Yarn

```bash
yarn add react-id-swiper@latest swiper@latest
```

## CDN

```html
<script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.js"></script>
```

```html
<script src="https://unpkg.com/react-id-swiper@2.3.2/lib/react-id-swiper.min.js"></script>
```

# Styling

**Swiper stylesheet file is required**

Use Swiper stylesheet file from CDN or `react-id-swiper/lib/styles/` (supporting css, scss)

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css">
```

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
```

# Examples [here](https://react-id-swiper.ashernguyen.site/example/default)

## Default

```javascript
import React from 'react';
import Swiper from 'react-id-swiper';

const SimpleSwiper = () => (
  <Swiper>
    <div>Slide 1</div>
    <div>Slide 2</div>
    <div>Slide 3</div>
    <div>Slide 4</div>
    <div>Slide 5</div>
  </Swiper>
)

export default SimpleSwiper;
```

## Using params

```javascript
import React from 'react';
import Swiper from 'react-id-swiper';

const SimpleSwiperWithParams = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return(
    <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
  )
}

export default SimpleSwiperWithParams;
```

## Manipulating swiper from outside swiper component

```javascript
import React, { useState } from 'react';
import Swiper from 'react-id-swiper';

const ManipulatingSwiper = () => {
  const [swiper, updateSwiper] = useState(null);

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <div>
      <Swiper getSwiper={updateSwiper}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
      <button onClick={goPrev}>Prev</button>
      <button onClick={goNext}>Next</button>
    </div>
  );
};

export default ManipulatingSwiper;
```

## Custom build Swiper

You can find the [WORKING DEMO REPO HERE](https://github.com/kidjp85/react-id-swiper-custom-build)

```javascript
import React from 'react';
import { Swiper, Navigation, Pagination } from 'swiper/dist/js/swiper.esm.js';
import ReactIdSwiperCustom from 'react-id-swiper/lib/ReactIdSwiper.custom';

const CustomBuildSwiper = () => {
  const params = {
    // Provide Swiper class as props
    Swiper,
    // Add modules you need
    modules: [Navigation, Pagination],
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30
  }

  return(
    <ReactIdSwiperCustom {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </ReactIdSwiperCustom>
  )
}

export default CustomBuildSwiper;
```

**NOTE**:
* If you use Webpack & Babel you need to setup Babel loader config in `webpack.config.js` like below:

```js
module: {
  rules: [
    {
      exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.js(x)?$/],
      test: /\.js(x)?$/,
      use: [{ loader: 'babel-loader' }],
    }
  ],
}
```

## Adding customized css classes

```javascript
const params = {
  pagination: {
    el: '.swiper-pagination.customized-swiper-pagination',
  }, // Add your class name for pagination container
  navigation: {
    nextEl: '.swiper-button-next.customized-swiper-button-next', // Add your class name for next button
    prevEl: '.swiper-button-prev.customized-swiper-button-prev' // Add your class name for prev button
  },
  containerClass: 'customized-swiper-container' // Replace swiper-container with customized-swiper-container
}
```

## Adding customized components

For customized rendering to work, you have to use same classname with params el.

```javascript
const params = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  renderPrevButton: () => <button className="swiper-button-prev">Prev</button>,
  renderNextButton: () => <button className="swiper-button-next">Next</button>,
}
```

## Workable slides

Each slide should be wrapped by HTML element

> BAD CODE

```javascript
<Swiper {...params}>
  Slide content
</Swiper>
```

> GOOD CODE

```javascript
<Swiper {...params}>
  <span>Slide content</span>
</Swiper>
```

# Bug report

**Please use the prepared Codesanbox below to reproduce your issue. Thank you!!**

[![Edit ReactIdSwiper - DEMO](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/p8j61y7j7?fontsize=14)


# Authors

* **Asher Nguyen** - *Initial work* - [Asher Nguyen](https://github.com/kidjp85)

See also the list of [contributors](https://github.com/kidjp85/react-id-swiper/contributors) who participated in this project.

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

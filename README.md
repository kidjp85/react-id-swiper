[![npm Version](https://img.shields.io/npm/v/react-id-swiper.svg?style=flat-square)](https://npmjs.org/package/react-id-swiper)
[![Coverage Status](https://img.shields.io/codecov/c/github/moroshko/react-autosuggest/master.svg?style=flat-square)](https://codecov.io/gh/kidjp85/react-id-swiper)
[![npm Downloads](https://img.shields.io/npm/dm/react-id-swiper.svg?style=flat-square)](https://npmjs.org/package/react-id-swiper)

[![Package Quality](http://npm.packagequality.com/badge/react-id-swiper.png)](http://packagequality.com/#?package=react-id-swiper)

react-id-swiper ( Newest version 2.0.0-beta )
========================================
> A library to use [Swiper](http://www.idangero.us/swiper/get-started/) as a ReactJs component

![Demo](https://media.giphy.com/media/mByDrCTcJch4HVhmfi/giphy.gif)

## :warning: IMPORTANT NOTICE: Version 2.x requires React & ReactDOM's version >=16.8.0 to use [Hooks](https://reactjs.org/docs/hooks-intro.html)

What is Swiper?
===============

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers

Swiper is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.

React-id-swiper's original props
================================

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


NOTE: You can also use Swiper's original params too.Swiper API documentation [HERE](http://idangero.us/swiper/api/)

DEMO
====

You can see the demo with example code [HERE](http://kidjp85.github.io/react-id-swiper/)

## Installation
By npm

```bash
npm install --save react-id-swiper
```

By Yarn

```bash
yarn add react-id-swiper
```

## You can also use the standalone UMD build

```html
<script src="https://unpkg.com/react-id-swiper@2.0.0-beta/lib/react-id-swiper.js"></script>
```

```html
<script src="https://unpkg.com/react-id-swiper@2.0.0-beta/lib/react-id-swiper.min.js"></script>
```

## Recommendation

>Swiper stylesheet file is required

### Use Swiper stylesheet file from CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css">
```

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
```

### OR

Use stylesheet file from src/styles/  folder (supporting css, scss)

## Usage

### Example with default

>Example with default params

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

### Example with params

>Example with navigation buttons

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

### Example with manipulating swiper from outside swiper component

>Example with navigation button using Hook

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

### How to add customized css classes for swiper?

>Example with navigation button

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

### How to add customized components?

>Example with customized navigation button

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

## License

MIT

react-id-swiper ( Newest version 1.5.6 )
======================================

> A library to use [Swiper](http://www.idangero.us/swiper/get-started/) as a ReactJs component.

![Demo](https://media.giphy.com/media/l0HlD8Aq2zZoF19aE/source.gif)

What is Swiper?
===============

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers

Swiper is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.

React-id-swiper's original props
================================

| Name | Type | Default value | Description |
| ---  | ---  | ---           | ---         |
| containerClass | String | swiper-container | Swiper container class name |
| wrapperClass | String | swiper-wrapper | Swiper wrapper class name |
| slideClass | String | swiper-slide | Swiper slide class name |
| prevButtonCustomizedClass | String | '' | Swiper prev button class name |
| nextButtonCustomizedClass | String | '' | Swiper next button class name |
| paginationCustomizedClass | String | '' | Swiper pagination class name |
| shouldSwiperUpdate | Boolean | false | Update swiper when component is updated |
| rebuildOnUpdate | Boolean | false | Rebuild swiper when component is updated |
| noSwiping | Boolean | false | Disable swiping by condition |
| activeSlideKey | String or Number | '' | Original active key |

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

## Recommendation
>Swiper stylesheet file is required
### Use Swiper stylesheet file from CDN
```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.6/css/swiper.css">
```
```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.0.6/css/swiper.min.css">
```
### OR
Use stylesheet file from src/styles/  folder (supporting css, less, scss)

## Usage

### Example with default
>Example with default params

### ES5

```javascript
var React = require('react');
var Swiper = require('react-id-swiper');

var Example = React.createClass({
  render: function() {
    return (
      <Swiper>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    );
  }
});

module.exports = Example;
```

### ES6
```javascript
import React from 'react';
import Swiper from 'react-id-swiper';

class Example extends React.Component {
  render() {

    return (
      <Swiper>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    )
  }
}

export default Example;
```

### Example with params

>Example with navigation buttons

### ES5
```javascript
var React = require('react');
var Swiper = require('react-id-swiper');

var Example = React.createClass({
  render: function() {
    var params = {
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
    };

    return (
      <Swiper
        pagination={params.pagination}
        navigation={params.navigation}
        spaceBetween={params.spaceBetween}>
        <div>Slide 1</div>
        <div>Slide 2</div>
        <div>Slide 3</div>
        <div>Slide 4</div>
        <div>Slide 5</div>
      </Swiper>
    );
  }
});

module.exports = Example;
```

### ES6

```javascript
import React from 'react';
import Swiper from 'react-id-swiper';

class Example extends React.Component {
  render() {
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
}

export default Example;
```

### Example with manipulating swiper from outside swiper component
>Example with navigation button

### ES6

```javascript
import React from 'react';
import Swiper from 'react-id-swiper';

export default class Example extends React.Component {
  constructor(props) {
    super(props)
    this.goNext = this.goNext.bind(this)
    this.goPrev = this.goPrev.bind(this)
    this.swiper = null
  }

  goNext() {
    if (this.swiper) this.swiper.slideNext()
  }

  goPrev() {
    if (this.swiper) this.swiper.slidePrev()
  }

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return(
      <div>
        <Swiper {...params} ref={node => if(node) this.swiper = node.swiper }/>
        <button onClick={this.goNext}>Next</button>
        <button onClick={this.goPrev}>Prev</button>
      </div>
    )
  }
}
```

### How to add customized class for swiper?
>Example with navigation button

```javascript
const params = {
  paginationCustomizedClass: 'customized-swiper-pagination', // Add your class name for pagination container
  nextButtonCustomizedClass: 'nextButtonCustomizedClass', // Add your class name for next button
  prevButtonCustomizedClass: 'customized-swiper-button-prev', // Add your class name for prev button
  containerClass: 'customized-swiper-container' // Replace swiper-container with customized-swiper-container
}
```

### Build demo in local
First, clone this repo to your local

```bash
https://github.com/kidjp85/react-id-swiper-demo.git
```

Install node packages

```bash
npm install
```
or

```bash
yarn
```

Run webpack server

```bash
yarn start
```

Run tests

```bash
yarn test
yarn test --watch
```

## License

MIT

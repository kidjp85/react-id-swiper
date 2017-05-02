react-id-swiper ( Newest version 1.4.0 )
======================================

> A library to use [Swiper](http://www.idangero.us/swiper/get-started/) as a ReactJs component.

![Demo](https://media.giphy.com/media/l0HlD8Aq2zZoF19aE/source.gif)

What is Swiper?
===============

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers

Swiper is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.


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
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">
```
```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.min.css">
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
    <Swiper>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
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
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
    };

    return (
      <Swiper
        pagination={params.pagination}
        paginationClickable={params.paginationClickable}
        nextButton={params.nextButton}
        prevButton={params.prevButton}
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
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
    }
    <Swiper {...params}>
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
      <div>Slide 4</div>
      <div>Slide 5</div>
    </Swiper>
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
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      runCallbacksOnInit: true,
      onInit: (swiper) => {
        this.swiper = swiper
      }
    }

    return(
      <div>
        <Swiper {...params} />
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
  pagination: '.swiper-pagination',
  paginationCustomizedClass: 'customized-swiper-pagination', // Add your class name for pagination container
  paginationClickable: true,
  nextButton: '.swiper-button-next',
  prevButton: '.swiper-button-prev',
  nextButtonCustomizedClass: 'nextButtonCustomizedClass', // Add your class name for next button
  prevButtonCustomizedClass: 'customized-swiper-button-prev', // Add your class name for prev button
  containerClass: 'customized-swiper-container' // Replace swiper-container with customized-swiper-container
  spaceBetween: 30  
}
```

>Available params for class name customization

You can use your own class name by using these params below

Params                     | Example
-------------------------- | -------------------------------
prevButtonCustomizedClass  | 'customized-swiper-button-prev'
nextButtonCustomizedClass  | 'customized-swiper-button-next'
paginationCustomizedClass  | 'customized-swiper-pagination'
scrollbarCustomizedClass   | 'customized-swiper-scrollbar'
containerClass             | 'my-swiper-container'

NOTE: These 5 params above are only supported by React-id-swiper from v1.2.1.
You can find more customized class name params from Swiper API documentation

### API

You can check Swiper API documentation [HERE](http://idangero.us/swiper/api/)

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

## License

MIT

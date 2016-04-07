react-id-swiper
=======================

> A library to use [Swiper](http://www.idangero.us/swiper/get-started/) as a ReactJs component.

What is Swiper?
===============

Swiper - is the free and most modern mobile touch slider with hardware accelerated transitions and amazing native behavior. It is intended to be used in mobile websites, mobile web apps, and mobile native/hybrid apps. Designed mostly for iOS, but also works great on latest Android, Windows Phone 8 and modern Desktop browsers

Swiper is not compatible with all platforms, it is a modern touch slider which is focused only on modern apps/platforms to bring the best experience and simplicity.

DEMO
====

You can see [DEMO](https://still-journey-25167.herokuapp.com/)

## Installation
```bash
npm install --save react-id-swiper
```

## Recommendation
>Swiper stylesheet file is required
### Use Swiper stylesheet file from CDN
```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.x.x/css/swiper.css">
```
```css
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.x.x/css/swiper.min.css">
```

## Usage

### Example with default
>Examble with default params

### Es5

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

### Es6
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

>Examble with navigation buttons

### Es5
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

### Es6

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
### API

You can check Swiper API [HERE](http://idangero.us/swiper/api/)

### Build demo in local
First, clone this repo to your local

```bash
https://github.com/kidjp85/react-id-swiper.git
```

Install node pacakages

```bash
npm install
```

Run webpack server

```bash
npm start
```

## License

MIT
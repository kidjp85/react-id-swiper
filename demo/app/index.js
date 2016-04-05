import React from 'react';
import ReactDOM from 'react-dom';
import DefaultSwiper from './components/default-swiper';
import PaginationSwiper from './components/pagination-swiper';
import VerticalSwiper from './components/vertical-swiper';
import SpaceBetweenSwiper from './components/space-between-swiper';
require('./assets/styles/swiper.min.css')
require('./assets/styles/demo.scss')

ReactDOM.render(<DefaultSwiper />, document.getElementById('default-swiper'));
ReactDOM.render(<PaginationSwiper />, document.getElementById('pagination-swiper'));
ReactDOM.render(<VerticalSwiper />, document.getElementById('vertical-swiper'));
ReactDOM.render(<SpaceBetweenSwiper />, document.getElementById('space-between-swiper'));
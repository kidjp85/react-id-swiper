"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var swiper_1 = __importDefault(require("swiper"));
var object_assign_1 = __importDefault(require("object-assign"));
var utils_1 = require("./utils");
var ReactIdSwiper = function (props) {
    var swiperRef = react_1.createRef();
    var swiper = null;
    var ContainerEl = props.ContainerEl, WrapperEl = props.WrapperEl, containerClass = props.containerClass, wrapperClass = props.wrapperClass, rtl = props.rtl, scrollbar = props.scrollbar, renderScrollbar = props.renderScrollbar, pagination = props.pagination, renderPagination = props.renderPagination, navigation = props.navigation, renderPrevButton = props.renderPrevButton, renderNextButton = props.renderNextButton, parallax = props.parallax, parallaxEl = props.parallaxEl, renderParallax = props.renderParallax, activeSlideKey = props.activeSlideKey, children = props.children, slideClass = props.slideClass, noSwiping = props.noSwiping, rebuildOnUpdate = props.rebuildOnUpdate, shouldSwiperUpdate = props.shouldSwiperUpdate;
    if (!utils_1.validateChildren(children)) {
        console.warn('Children should be react element or an array of react element!!');
        return null;
    }
    var getActiveSlideIndexFromProps = function () {
        if (!activeSlideKey) {
            return null;
        }
        var activeSlideId = null;
        var id = 0;
        react_1.Children.forEach(children, function (child) {
            if (react_1.isValidElement(child)) {
                if (child.key === activeSlideKey) {
                    activeSlideId = id;
                }
                id += 1;
            }
        });
        return activeSlideId;
    };
    var buildSwiper = function () {
        if (swiperRef.current) {
            swiper = new swiper_1.default(swiperRef.current, object_assign_1.default({}, props));
        }
    };
    var rebuildSwiper = function () {
        if (swiper !== null) {
            swiper.destroy(true, true);
        }
        buildSwiper();
    };
    var updateSwiper = function () {
        if (swiper !== null) {
            swiper.update();
        }
    };
    var renderContent = function (e) {
        if (!utils_1.isReactElement(e)) {
            return null;
        }
        var slideClassNames = [slideClass, e.props.className];
        if (noSwiping) {
            slideClassNames.push('swiper-no-swiping');
        }
        return react_1.cloneElement(e, __assign({}, e.props, { className: slideClassNames.join(' ').trim() }));
    };
    react_1.useEffect(function () {
        buildSwiper();
        var slideToIndex = getActiveSlideIndexFromProps();
        if (swiper !== null && slideToIndex !== null) {
            swiper.slideTo(slideToIndex);
        }
        return function () {
            if (swiper !== null) {
                swiper.destroy(true, true);
            }
            swiper = null;
        };
    }, []);
    react_1.useEffect(function () {
        if (swiper !== null) {
            if (rebuildOnUpdate) {
                rebuildSwiper();
            }
            else if (shouldSwiperUpdate) {
                updateSwiper();
                var numSlides = swiper.slides.length;
                if (numSlides <= swiper.activeIndex) {
                    var index = Math.max(numSlides - 1, 0);
                    swiper.slideTo(index);
                }
            }
            var slideToIndex = getActiveSlideIndexFromProps();
            if (slideToIndex !== null) {
                swiper.slideTo(slideToIndex);
            }
        }
    });
    return (react_1.default.createElement(ContainerEl, { className: containerClass, dir: rtl && 'rtl', ref: swiperRef },
        parallax && parallaxEl && renderParallax && renderParallax(props),
        react_1.default.createElement(WrapperEl, { className: wrapperClass }, react_1.Children.map(children, renderContent)),
        pagination && pagination.el && renderPagination && renderPagination(props),
        scrollbar && scrollbar.el && renderScrollbar && renderScrollbar(props),
        navigation && navigation.nextEl && renderNextButton && renderNextButton(props),
        navigation && navigation.prevEl && renderPrevButton && renderPrevButton(props)));
};
ReactIdSwiper.defaultProps = {
    containerClass: 'swiper-container',
    wrapperClass: 'swiper-wrapper',
    slideClass: 'swiper-slide',
    ContainerEl: 'div',
    WrapperEl: 'div',
    renderScrollbar: function (_a) {
        var scrollbar = _a.scrollbar;
        return scrollbar ? react_1.default.createElement("div", { className: utils_1.classNames(scrollbar.el) }) : null;
    },
    renderPagination: function (_a) {
        var pagination = _a.pagination;
        return pagination ? react_1.default.createElement("div", { className: utils_1.classNames(pagination.el) }) : null;
    },
    renderPrevButton: function (_a) {
        var navigation = _a.navigation;
        return navigation ? react_1.default.createElement("div", { className: utils_1.classNames(navigation.prevEl) }) : null;
    },
    renderNextButton: function (_a) {
        var navigation = _a.navigation;
        return navigation ? react_1.default.createElement("div", { className: utils_1.classNames(navigation.nextEl) }) : null;
    },
    renderParallax: function (_a) {
        var parallaxEl = _a.parallaxEl;
        return parallaxEl ? (react_1.default.createElement("div", { className: utils_1.classNames(parallaxEl.el), "data-swiper-parallax": parallaxEl.value })) : null;
    }
};
exports.default = ReactIdSwiper;

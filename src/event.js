import { extend } from './core';
import { event } from './util';

extend('event', {
    set: function (event, handler) {
        this.addEventListener(event, handler);
    },
});

extend('trigger', {
    set: function set(event) {
        this.dispatchEvent(event);
    },
});

extend('removeEvent', {
    set: function set(event, handler) {
        this.removeEventListener(event, handler);
    },
});

event('blur');
event('focus');
event('focusin');
event('focusout');
event('hover');
event('change');
event('click');
event('contextmenu');
event('dblclick');
event('error');
event('keydown');
event('keypress');
event('keyup');
event('mousedown');
event('mouseenter');
event('mouseleave');
event('mousemove');
event('mouseout');
event('mouseover');
event('mouseup');
event('resize');
event('scroll');
event('select');
event('submit');

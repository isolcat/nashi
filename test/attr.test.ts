import { test, expect } from 'vitest';
import nashi from '../dist/index.js';

test('attr', () => {
    document.body.innerHTML = '<p>test</p>';
    const p = document.querySelector('p')!;
    const np = nashi('p');
    np.text('noop');
    expect(p.innerText).toBe('noop');
    expect(np.text()).toBe('noop');
    np.addClass('test');
    expect(p.className).toBe('test');
    expect(np.class()).toBe('test');
    np.removeClass('test');
    expect(p.className).toBe('');
    expect(np.class()).toBe('');
    np.attr('class', 'noop');
    expect(np.hasClass('noop')).toBe(true);
    expect(np.attr('class')).toBe('noop');
    expect(p.className).toBe('noop');
    expect(np.html()).toBe('noop');
    np.toggleClass('noop');
    expect(np.hasClass('noop')).toBe(false);
    expect(np.id()).toBe('');
    np.id('test');
    expect(p.id).toBe('test');
});

import nashi from '../dist/index';

const $ = (argument: string) => document.querySelector(argument);
const container = nashi.create('div');
const body = nashi('body');
body.append(container);

test('has child', () => {
    expect(container.hasChild()).toBe(false);
});

test('insert child', () => {
    const np = nashi.create('p');
    container.lastChild(np);
    const nspan = nashi.create('span');
    container.firstChild(nspan);
    expect(nashi.equal(container.firstChild(), nspan)).toBe(true);
    expect(container.firstChild().node[0]).toStrictEqual($('span'));
    expect(nashi.equal(container.lastChild(), np)).toBe(true);
    expect(container.lastChild().node[0]).toStrictEqual($('p'));
});

test('parent', () => {
    expect(container.parent().node).toStrictEqual(body.node);
});

test('child', () => {
    expect(container.child().node).toStrictEqual(container.node[0].childNodes);
});

test('insert sibling', () => {
    const para1 = nashi.create('p');
    const para2 = nashi.create('p');
    container.before(para1);
    container.after(para2);
    expect(nashi.equal(body.firstChild(), para1)).toBe(true);
    expect(nashi.equal(body.lastChild(), para2)).toBe(true);
});

test('siblings', () => {
    const para1 = body.firstChild();
    const para2 = body.lastChild();
    const merged = nashi.merge(para1, para2);
    const siblings = container.siblings();
    expect(nashi.equal(siblings[0], para1)).toBe(true);
    expect(nashi.equal(siblings[1], para2)).toBe(true);
    expect(nashi.equal(siblings, merged)).toBe(true);
});

test('get siblings', () => {
    const para1 = body.firstChild();
    const para2 = body.lastChild();
    expect(nashi.equal(para1, container.prev()));
    expect(nashi.equal(para2, container.next()));
});

test('element index', () => {
    expect(container.index()).toBe(1);
});

test('remove', () => {
    container.remove();
    expect(body.child().length).toBe(2);
});

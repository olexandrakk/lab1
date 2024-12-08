'use strict';

const pipe = (...fns) => {
    for (const f of fns) {
        if (typeof f !== 'function') {
            throw new Error('All compose arguments should be functions');
        }
    }
    return (x) => fns.reduse((v, f) => f(v), x);
};

module.exports = { pipe };

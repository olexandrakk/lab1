'use strict';

/* Do following tasks inside function `fn` (see stub: `7-objects.js`)
- Define constant object with single field `name`.
- Define variable object with single field `name`.
- Try to change field `name`.
- Try to assign other object to both identifiers.
- Explain script behaviour. */

const fn = () => {
    const obj1 = { name: 'Oleksandra' } //Define constant object with single field `name`
    let obj2 = { name: 'Oleksandra' } //Define variable object with single field `name`

    obj1.name = 'Oleksandra';
    obj2.name = 'Oleksandra';

    obj2 = { name: 'Anna'}; //Try to change field `name`
};

module.exports = { fn };

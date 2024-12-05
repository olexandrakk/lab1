'use strict';

/* Collections: Array, Hash (Object)

Implement phone book using array of records.
- Define Array of objects with two fields: `name` and `phone`.
Object example: `{ name: 'Marcus Aurelius', phone: '+380445554433' }`.
- Implement function `findPhoneByName` with signature
`findPhoneByName(name: string): string`. Returning phone from that object
where field `name` equals argument `name`. Use `for` loop for this search. */

const phonebook = [
    { name: 'Yurii', phone: '+380442347786' },
    { name: 'Oleksandra', phone: '+380631245764' },
    { name: 'Diana', phone: '+380967392383' },
    { name: 'Denys', phone: '+380934567823' },
    { name: 'Victoriia', phone: '+380631238945'},
];

const findPhoneByName = (name) => {
    for (const obj of phonebook) {
        if (obj.name === name) return obj.phone;
    }
};

module.exports = { phonebook, findPhoneByName };

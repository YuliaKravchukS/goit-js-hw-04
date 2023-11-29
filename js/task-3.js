
'use strict';

function getElementWidth(content, padding, border) {

    const x = Number.parseFloat(content);
    const y = Number.parseFloat(padding);
    const z = Number.parseFloat(border);
    return (x + y * 2 + z * 2);
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth ("200px", "0px", "0px"));

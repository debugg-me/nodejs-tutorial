const path = require('path');
const assert = require('assert')
let packageJSON;

try {
    packageJSON = require(path.join('..', '..', 'package.json'));
} catch (error) {
    throw new assert.AssertionError({
        message: "package.json not found"
    })
}

assert.equal(
    packageJSON.hasOwnProperty('dependencies'),
    true,
    "package.json doesn\'t have any dependencies"
);

assert.equal(
    packageJSON.dependencies.hasOwnProperty('express'),
    true,
    "dependencies doesn\'t have express package"
);
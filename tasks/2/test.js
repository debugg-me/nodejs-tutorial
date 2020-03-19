const path = require('path');

try {
    const packageJSON = require(path.join('..', '..', 'package.json'));
} catch (error) {
    throw Error("Current directory is not an NPM project")
}
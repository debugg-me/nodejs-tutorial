const assert = require("assert")
const child_process = require("child_process")
const path = require("path");

// run hello.js and capture stdout
function testHello() {
    const cmdStr = "node " + path.join(__dirname, "..", "..", "hello.js");
    const result = String(child_process.execSync(cmdStr)).replace("\n", "");
    assert.equal(result, "Hello World");
}

testHello();

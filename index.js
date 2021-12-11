const fs = require('fs');
const path = require('path');
const reqFile = require('./generate.json');
const generateJava = require('./generateJavaFiles');
console.log('=============================================================\n');
console.log('=============== Welcome to Template Generator ===============\n');
console.log('=============================================================\n');


console.log('\n');
console.log('GENERATE MODULE $JAVA - CORE');
console.log('\n');

if (reqFile.type) {
    generateJava(reqFile);
}

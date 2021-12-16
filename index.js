const jsonGenerator = require('./generate.json');
const generateJava = require('./generateJavaFiles');
const generateTS = require('./generateTSfiles');

console.log('=============================================================\n');
console.log('=============== Welcome to Template Generator ===============\n');
console.log('=============================================================\n');


console.log('\n');
console.info('GENERATE MODULES - ');
console.log('\n');


for (let index = 0; index < jsonGenerator.length; index++) {
    const reqFile = jsonGenerator[index];
    
    if (reqFile.type === 'api') {
        generateJava(reqFile);
    }
    
    
    if (reqFile.type === 'front') {
        generateTS(reqFile);
    }
}
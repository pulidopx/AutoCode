"use strict";

const capitalize = (name = '') => {
    const str = name;
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
};

const iterateModelsProps = (props) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        propString += `
    private ${capitalize(prop.type)} ${(prop.name)};
        `;
    }
    return propString;
};

const iterateEntityProps = (props) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        propString += `
    @Column()
    private ${capitalize(prop.type)} ${(prop.name)};
      `;
        
    }
    return propString;
};


const iterateGettersAndSettersModel = (props) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];

        for (let gys = 0; gys < 2; gys++) {
            if (!gys) {
                propString += `
    public ${capitalize(prop.type)} get${capitalize(prop.name)}() {
        return this.${prop.name};
    }\n\n
                `;
            } else {
                propString += `
    public void set${capitalize(prop.name)}(${capitalize(prop.type)} ${(prop.name)}) {
        this.${prop.name} = ${prop.name};
    }\n\n
                `;
            }
        }
    }
    return propString;
};


module.exports = {
    capitalize,
    iterateModelsProps,
    iterateEntityProps,
    iterateGettersAndSettersModel
}
"use strict";
const fs = require('fs');
const rimraf = require("rimraf");


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


const changeVar = (prop) => {
    if (prop.type === 'Integer') return 'number';
    if (prop.type === 'String') return 'string';
    if (prop.type === 'Boolean') return 'bool';
    return prop.type;
}

const iterateModelFront = (props) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        propString += `${prop.name}:${changeVar(prop)};
      `;
        
    }
    return propString;
};


const iterateValidatorsFront = (props, reqFile) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        let reqString = '';
        let maxString = '';

        let isRequired = '';

        if (props.required || props.maxLength) {
            if (props.required) {
                reqString = 'Validators.required';
            }
            if (props.maxLength) {
                maxString = `${props.required ? ',': ''}Validators.maxLength(${props.maxLength})`
            }

            if (maxString.length || reqString.length) {
                isRequired = `, [${maxString}${maxString}]`;
            }
        }

        propString += `${prop.name}: [ this.${(reqFile.module)} ? this.${(reqFile.module)}.${prop.name}  : null ${isRequired}],
      `;
        
    }
    return propString;
};

const iterateAutoForm = (props, isFilter) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        let reqString = '';
        let maxString = '';

        if (prop.required || prop.maxLength) {
          /*
            if (props.type === "Number" || props.type === "Integer") {
                reqString = 'Validators.required';
            }
          */
            if (prop.maxLength) {
                maxString = `maxlength=${prop.maxLength}`
            }

        }

        if (isFilter) {
            propString += `
            <div class="col">
                <mat-form-field  class="fluid">
                    <mat-label>${prop.label}</mat-label>
                    <input 
                        matInput
                        [(ngModel)]="${(prop.name)}"
                        ${maxString}
                    >
                </mat-form-field>
            </div>
            `; 
        } else {
            propString += `
            <div class="row">
                <div class="col">
                    <mat-form-field appearance="outline" class="fluid">
                        <mat-label>${prop.label}</mat-label>
                        <input 
                            matInput
                            formControlName="${(prop.name)}"
                            ${maxString}
                        >
                    </mat-form-field>
                </div>
            </div>
            `;
        }
    }
    return propString;
};

const iterateParamsForSaveFront = (props, reqFile) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        propString += `this.${(reqFile.module)}.${(prop.name)} = this.${(reqFile.module)}Form.controls.${(prop.name)}.value;
      `;
        
    }
    return propString;
};


const iterateCleanValuesFront = (props, defineValues, locally) => {
    let propString = '';

    const setCleanValuesByVar = (prop) => {
        let setVar = '';
        if (prop.type === 'Integer') {
            setVar = '0';
        }
        if (prop.type === 'String') {
            setVar = '\'\'';
        }
        if (prop.type === 'Boolean') {
            setVar = 'false';
        }

        return setVar;
    };


    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        if (defineValues) {
            if (locally) {
                propString += `this.${prop.name} = ${setCleanValuesByVar(prop)};
                `;
            } else {
                propString += `${prop.name}: ${changeVar(prop)} = ${setCleanValuesByVar(prop)};
                `;
            }

        } else {
            propString += `${prop.name}: ${setCleanValuesByVar(prop)}
            `;
        }
    }
    return propString;
};

const paramsFormatter = (props, reqFile) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        propString += `...(${reqFile.module}.${prop.name}) ? {${prop.name}: ${reqFile.module}.${prop.name}} : {}),
      `;
        
    }
    return propString;
}

const importModelReferences = (props, reqFile) => {
    let propString = '';
    for (let index = 0; index < props.length; index++) {
        const prop = props[index];
        if (prop.importable) {
            propString += `
import ${reqFile.package}.modules.${prop.source ||reqFile.source}.domain.models.${capitalize(prop.name)};`;  
        }
    }
    return propString;
}

const generateDocumentFile = (Path, Source, cb) => {
    rimraf(Path, function () {
        fs.appendFile(Path, Source, function (err) {
            if (err) throw err;
            cb();
        });
    });
}

module.exports = {
    capitalize,
    iterateModelFront,
    iterateModelsProps,
    iterateEntityProps,
    importModelReferences,
    iterateAutoForm,
    paramsFormatter,
    iterateGettersAndSettersModel,
    iterateCleanValuesFront,
    iterateParamsForSaveFront,
    iterateValidatorsFront,
    generateDocumentFile
}

"use strict;"

const { capitalize, generateDocumentFile } = require("./utils");

const modelSource = require('./angularTemplates/models');
const configSource = require('./angularTemplates/config');
const statusesSource = require('./angularTemplates/statuses');
const responseSource = require('./angularTemplates/response');
const iteractorSource = require('./angularTemplates/iteractor');
const serviceSource = require('./angularTemplates/service');
const iteractorAdapterSource = require('./angularTemplates/iteractorAdapter');
const serviceAdapterSource = require('./angularTemplates/serviceAdapter');
const componentSource = require('./angularTemplates/component');
const componentHtmlSource = require('./angularTemplates/componentHtml');

const addComponentSource = require('./angularTemplates/addComponent');
const addComponentHtmlSource = require('./angularTemplates/addComponentHtml');


module.exports = function(reqFile) {

    console.log('GENERATE ANGULAR FILES ... \n');
    // GENERATE MODEL modules.module.domain.model
    console.log(`GENERATE DOMAIN ${capitalize(reqFile.module)}.ts \n`);
    const modelPath = `${reqFile.rootDir}/${reqFile.source}/domain/models/${capitalize(reqFile.module)}.ts`;
    generateDocumentFile(modelPath, modelSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}.ts" created successfully.`));


    // GENERATE CONFIG  modules.config
    console.log(`GENERATE DOMAIN PORTS IN ${reqFile.module}.module.ts \n`);
    const configPath = `${reqFile.rootDir}/${reqFile.source}/config/${reqFile.module}.module.ts`;
    generateDocumentFile(configPath, configSource(reqFile), () => console.log(`File "${reqFile.module}.module.ts" created successfully.`));


    // GENERATE MODEL STATUSES  modules.models.statuses
    console.log(`GENERATE DOMAIN STATUSES ${reqFile.module}.status.ts \n`);
    const statusPath = `${reqFile.rootDir}/${reqFile.source}/domain/models/statuses/${reqFile.module}.status.ts`;
    generateDocumentFile(statusPath, statusesSource(reqFile), () => console.log(`File "${reqFile.module}.status.ts" created successfully.`));


    // GENERATE DOMAIN INTERACTOR  modules.models.responses
    console.log(`GENERATE DOMAIN INTERACTOR ${capitalize(reqFile.module)}Response.ts \n`);
    const respPath = `${reqFile.rootDir}/${reqFile.source}/domain/models/response/${capitalize(reqFile.module)}Response.ts`;
    generateDocumentFile(respPath, responseSource(reqFile), () => console.log(`File "${reqFile.module}Response.ts" created successfully.`));


    // GENERATE DOMAIN PORTS IN  modules.models.responses
    console.log(`GENERATE DOMAIN RESPONSES ${(reqFile.module)}.interactor.ts \n`);
    const iteractorPath = `${reqFile.rootDir}/${reqFile.source}/domain/ports/in/${(reqFile.module)}.interactor.ts`;
    generateDocumentFile(iteractorPath, iteractorSource(reqFile), () => console.log(`File "${reqFile.module}.interactor.ts" created successfully.`));

    // GENERATE DOMAIN PORTS OUT  modules.models.responses
    console.log(`GENERATE DOMAIN RESPONSES ${(reqFile.module)}.service.ts \n`);
    const servicePath = `${reqFile.rootDir}/${reqFile.source}/domain/ports/out/${(reqFile.module)}.service.ts`;
    generateDocumentFile(servicePath, serviceSource(reqFile), () => console.log(`File "${reqFile.module}.service.ts" created successfully.`));

// INFRASTRUCTURE

    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE PORTS IN ${(reqFile.module)}.interacor.adapter.ts \n`);
    const iteractAPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/in/${(reqFile.module)}.interactor.adapter.ts`;
    generateDocumentFile(iteractAPath, iteractorAdapterSource(reqFile), () => console.log(`File "${reqFile.module}.interactor.adapter.ts" created successfully.`));

    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE PORTS OUT ${(reqFile.module)}.service.adapter.ts \n`);
    const serviceAPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/${(reqFile.module)}.service.adapter.ts`;
    generateDocumentFile(serviceAPath, serviceAdapterSource(reqFile), () => console.log(`File "${reqFile.module}.service.adapter.ts" created successfully.`));

    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE COMPONENTS ${(reqFile.module)}.components.ts \n`);
    const componentPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/components/${(reqFile.module)}/${(reqFile.module)}.component.ts`;
    generateDocumentFile(componentPath, componentSource(reqFile), () => console.log(`File "${reqFile.module}.components.ts" created successfully.`));


    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE COMPONENTS ${(reqFile.module)}.components.html \n`);
    const componentHtmlPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/components/${(reqFile.module)}/${(reqFile.module)}.component.html`;
    generateDocumentFile(componentHtmlPath, componentHtmlSource(reqFile), () => console.log(`File "${reqFile.module}.components.html" created successfully.`));

    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE COMPONENTS add-${(reqFile.module)}.components.ts \n`);
    const addComponentPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/components/${(reqFile.module)}/add-${(reqFile.module)}.component.ts`;
    generateDocumentFile(addComponentPath, addComponentSource(reqFile), () => console.log(`File "add-${reqFile.module}.components.ts" created successfully.`));

    // GENERATE INFRASTRUCTURE PORTS OUT  modules.models.responses
    console.log(`GENERATE INFRASTRUCTURE COMPONENTS add-${(reqFile.module)}.components.html \n`);
    const addComponentHtmlPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/components/${(reqFile.module)}/add-${(reqFile.module)}.component.html`;
    generateDocumentFile(addComponentHtmlPath, addComponentHtmlSource(reqFile), () => console.log(`File "add-${reqFile.module}.components.html" created successfully.`));


    console.log(`\n=============================================================================================\n`);

}
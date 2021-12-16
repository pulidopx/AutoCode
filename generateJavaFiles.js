"use strict;"

const { capitalize, generateDocumentFile } = require("./utils");
const fs = require('fs');
const modelSource = require('./javaTemplates/models');
const restSource = require('./javaTemplates/rest');
const persistenceSource = require('./javaTemplates/persistence');
const serviceSource = require('./javaTemplates/service');

const controllerSource = require('./javaTemplates/controller');
const entitySource = require('./javaTemplates/entity');
const mapperSource = require('./javaTemplates/mapper');
const repositorySource = require('./javaTemplates/repository');
const serviceImplSource = require('./javaTemplates/serviceImpl');
const persistenceMysqlSource = require('./javaTemplates/prsistenceMysql');

module.exports = function(reqFile) {
    console.log('GENERATE JAVA FILES ... \n');
    // GENERATE MODEL modules.module.domain.model


    if (reqFile.schemaType === 'not-root') {
      console.log(`GENERATE DOMAIN ${capitalize(reqFile.module)}.java \n`);
      const modelPath = `${reqFile.rootDir}/${reqFile.source}/domain/models/${capitalize(reqFile.module)}.java`;
      generateDocumentFile(modelPath, modelSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}.java" created successfully.`));
  0
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql.entities
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL ENTITY ${capitalize(reqFile.module)}Entity.java \n`);
      const entityPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/entities/${capitalize(reqFile.module)}Entity.java`;
      generateDocumentFile(entityPath, entitySource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Entity.java" created successfully.`));
  
        
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql.mapper
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL MAPPER ${capitalize(reqFile.module)}Mapper.java \n`);
      const mapperPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/mappers/${capitalize(reqFile.module)}Mapper.java`;
      generateDocumentFile(mapperPath, mapperSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Mapper.java" created successfully.`));
      console.log(`\n=============================================================================================\n`);

      return;
    }

    if (reqFile.schemaType === 'not-root') {

      console.log(`GENERATE DOMAIN ${capitalize(reqFile.module)}.java \n`);
      const modelPath = `${reqFile.rootDir}/${reqFile.source}/domain/models/${capitalize(reqFile.module)}.java`;
      generateDocumentFile(modelPath, modelSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}.java" created successfully.`));
  0
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql.entities
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL ENTITY ${capitalize(reqFile.module)}Entity.java \n`);
      const entityPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/entities/${capitalize(reqFile.module)}Entity.java`;
      generateDocumentFile(entityPath, entitySource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Entity.java" created successfully.`));
  
        
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql.mapper
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL MAPPER ${capitalize(reqFile.module)}Mapper.java \n`);
      const mapperPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/mappers/${capitalize(reqFile.module)}Mapper.java`;
      generateDocumentFile(mapperPath, mapperSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Mapper.java" created successfully.`));
  
  
      // GENERATE REST  modules.module.domain.ports.in
      console.log(`GENERATE DOMAIN PORTS IN ${capitalize(reqFile.module)}Rest.java \n`);
      const restPath = `${reqFile.rootDir}/${reqFile.source}/domain/ports/in/rest/${capitalize(reqFile.module)}Rest.java`;
      generateDocumentFile(restPath, restSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Rest.java" created successfully.`));
  
      // GENERATE PERSISTENCE modules.module.domain.ports.out.persistence
      console.log(`GENERATE DOMAIN PORTS OUT ${capitalize(reqFile.module)}Persistence.java \n`);
      const persistencePath = `${reqFile.rootDir}/${reqFile.source}/domain/ports/out/persistence/${capitalize(reqFile.module)}Persistence.java`;
      generateDocumentFile(persistencePath, persistenceSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Persistence.java" created successfully.`));
  
      // GENERATE SERVICES modules.module.domain.service
      console.log(`GENERATE DOMAIN SERVICE ${capitalize(reqFile.module)}Service.java \n`);
      const servicesPath = `${reqFile.rootDir}/${reqFile.source}/domain/services/${capitalize(reqFile.module)}Service.java`;
      generateDocumentFile(servicesPath, serviceSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Service.java" created successfully.`));
  
      // INFRASTRUCTURE
  
      // GENERATE INFRASTRUCTURE modules.module.infrastructure.adapter.in.rest
      console.log(`GENERATE INFRASTRUCTURE ADAPTERS IN REST ${capitalize(reqFile.module)}Controller.java \n`);
      const controllerPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/in/rest/${capitalize(reqFile.module)}Controller.java`;
      generateDocumentFile(controllerPath, controllerSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Controller.java" created successfully.`));
  
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL ${capitalize(reqFile.module)}PersistenceMysql.java \n`);
      const persistenceMysqlPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/${capitalize(reqFile.module)}PersistenceMysql.java`;
      generateDocumentFile(persistenceMysqlPath, persistenceMysqlSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}PersistenceMysql.java" created successfully.`));
  
  
      // GENERATE  modules.module.infrastructure.adapter.out.persistence.mysql.repository
      console.log(`GENERATE INFRASTRUCTURE PORTS OUT PERSISTENCE MYSQL REPOSITORY ${capitalize(reqFile.module)}Repository.java \n`);
      const repositoryPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/adapters/out/persistence/mysql/repositories/${capitalize(reqFile.module)}Repository.java`;
      generateDocumentFile(repositoryPath, repositorySource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}Repository.java" created successfully.`));
  
      // GENERATE  modules.module.infrastructure.services
      console.log(`GENERATE INFRASTRUCTURE SERVICES ${capitalize(reqFile.module)}ServiceImpl.java \n`);
      const serviceImplPath = `${reqFile.rootDir}/${reqFile.source}/infrastructure/services/${capitalize(reqFile.module)}ServiceImpl.java`;
      generateDocumentFile(serviceImplPath, serviceImplSource(reqFile), () => console.log(`File "${capitalize(reqFile.module)}ServiceImpl.java" created successfully.`));
      console.log(`\n=============================================================================================\n`);

      return;
    }

    console.log('property schemaType not selected, select "root" for create all schema or "no-root" for only create models')
    console.log(`\n=============================================================================================\n`);

}
"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.infrastructure.services;

import ${reqFile.package}.modules.${reqFile.source}.domain.models.Zones;
import ${reqFile.package}.modules.${reqFile.source}.domain.ports.out.persistence.${capitalize(reqFile.module)}Persistence;
import ${reqFile.package}.modules.${reqFile.source}.domain.services.${capitalize(reqFile.module)}Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class ${capitalize(reqFile.module)}ServiceImpl implements ${capitalize(reqFile.module)}Service {
  @Autowired
  private ${capitalize(reqFile.module)}Persistence ${reqFile.module}Persistence;

  @Override
  public Set<${capitalize(reqFile.module)}> get${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)}, Integer idStatus) {
    return this.${reqFile.module}Persistence.get${capitalize(reqFile.module)}(id${capitalize(reqFile.module)}, idStatus);
  }

  @Override
  public Zones save${capitalize(reqFile.module)}(${capitalize(reqFile.module)} ${reqFile.module}) {
    return this.${reqFile.module}Persistence.save${capitalize(reqFile.module)}(${reqFile.module});
  }
}
  `;
}
"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.mappers;

import ${reqFile.package}.infrastructure.mapper.IMapper;
import ${reqFile.package}.infrastructure.mapper.Mapper;
import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};
import ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.entities.${capitalize(reqFile.module)}Entity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ${capitalize(reqFile.module)}Mapper extends Mapper<${capitalize(reqFile.module)},${capitalize(reqFile.module)}Entity> implements IMapper<${capitalize(reqFile.module)}, ${capitalize(reqFile.module)}Entity> {
  /**
   * @author ${reqFile.author || 'nameless dev'}
   * @param ${capitalize(reqFile.module)}Entity
   * @return
   */
  @Override
  public ${capitalize(reqFile.module)} toModel(${capitalize(reqFile.module)}Entity ${reqFile.module}Entity) {
    ${capitalize(reqFile.module)} ${reqFile.module} = mapperEntityToModel(${reqFile.module}Entity, new ${capitalize(reqFile.module)}());
      return ${reqFile.module};
  }
  
  @Override
  public Set<${capitalize(reqFile.module)}> toModelList(Set<${capitalize(reqFile.module)}Entity> ${reqFile.module}EntityList) {
      Set<${capitalize(reqFile.module)}> modelList = new HashSet<>();
      for ( ${capitalize(reqFile.module)}Entity ${reqFile.module}Entity : zoneEntityList ) {
          ${capitalize(reqFile.module)} ${reqFile.module} = toModel(${reqFile.module}Entity);
          modelList.add( ${reqFile.module} );
      }
      return modelList;
  }
  
  @Override
  public ${capitalize(reqFile.module)}Entity toEntity(${capitalize(reqFile.module)} ${(reqFile.module)}) {
      ${capitalize(reqFile.module)}Entity ${reqFile.module}Entity = mapperModelToEntity(${reqFile.module}, new ${capitalize(reqFile.module)}Entity());

      return ${reqFile.module}Entity;
  }
}
  `;
}
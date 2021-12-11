"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.repositories;

import ${reqFile.package}.modules.core.infrastructure.adapters.out.persistence.mysql.entities.${capitalize(reqFile.module)}Entity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ${capitalize(reqFile.module)}Repository extends JpaRepository<${capitalize(reqFile.module)}Entity, Integer> {
    List<${capitalize(reqFile.module)}Entity> findById${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)});
}
  `;
}
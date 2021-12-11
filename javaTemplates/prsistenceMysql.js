"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.core.infrastructure.adapters.out.persistence.mysql;

import ${reqFile.package}.infrastructure.adapters.CriteriaAdapter;
import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};
import ${reqFile.package}.modules.${reqFile.source}.domain.ports.out.persistence.${capitalize(reqFile.module)}Persistence;
import ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.entities.${capitalize(reqFile.module)}Entity;
import ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.mappers.${capitalize(reqFile.module)}Mapper;
import ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.repositories.${capitalize(reqFile.module)}Repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ${capitalize(reqFile.module)}PersistenceMysql implements ${capitalize(reqFile.module)}Persistence {

    @Autowired
    private ${capitalize(reqFile.module)}Repository ${(reqFile.module)}Repository;
    @Autowired
    private ${capitalize(reqFile.module)}Mapper ${(reqFile.module)}Mapper;
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public Set<${capitalize(reqFile.module)}> get${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)}, Integer status) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaAdapter<${capitalize(reqFile.module)}Entity> criteriaAdapter = new CriteriaAdapter<>(entityManagerFactory);
        criteriaAdapter.init(${capitalize(reqFile.module)}Entity.class);
        criteriaAdapter.distinct();

        List<Predicate> predicates = new ArrayList<>();

        Predicate whereStatus;
        if (status == null) {
            whereStatus = criteriaAdapter.equal("status", 1);
        } else {
            whereStatus = criteriaAdapter.equal("status", status);
        }

        predicates.add(whereStatus);

        criteriaAdapter.where( criteriaBuilder.and(predicates.toArray( new Predicate[predicates.size()])) );
        criteriaAdapter.setFetchGraph( "${reqFile.module}-graph" );
        Set<${capitalize(reqFile.module)}Entity> ${reqFile.module}EntityList = criteriaAdapter.getResultList(20 );
        Set<${capitalize(reqFile.module)}> ${reqFile.module}List = ${reqFile.module}Mapper.toModelList( ${reqFile.module}EntityList );
        criteriaAdapter.close();
        return ${reqFile.module}List;
    }

    @Override
    public ${capitalize(reqFile.module)} save${capitalize(reqFile.module)}(${capitalize(reqFile.module)} ${reqFile.module}) {
      ${capitalize(reqFile.module)}Entity ${reqFile.module}Entity = ${reqFile.module}Mapper.toEntity( ${reqFile.module} );
      ${reqFile.module}Entity = ${reqFile.module}Repository.save( ${reqFile.module}Entity );
      ${reqFile.module}.setId${capitalize(reqFile.module)}( ${reqFile.module}Entity.getId${capitalize(reqFile.module)}() );
      return ${reqFile.module};
    }

}
  
  `;
}
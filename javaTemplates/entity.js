"use strict";

const { capitalize, iterateEntityProps } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.out.persistence.mysql.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity()
@Table( name = "${reqFile.source}_${reqFile.module}s" )
@Getter
@Setter
@NamedEntityGraph(
    name = "${reqFile.module}-graph"
)
public class ${capitalize(reqFile.module)}Entity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "id_${reqFile.module}" )
    private Integer id${capitalize(reqFile.module)};
    
    @Column()
    private Integer status;

    ${iterateEntityProps(reqFile.properties)}
}
  `;
}
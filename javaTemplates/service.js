"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.domain.services;

import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};

import java.util.Set;

public interface ${capitalize(reqFile.module)}Service {
    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @param id${capitalize(reqFile.module)}
     * @param idStatus
     * @return ${capitalize(reqFile.module)}
     */
    public Set<${capitalize(reqFile.module)}> get${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)}, Integer idStatus);

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @param ${reqFile.module.toLowerCase()}
     * @return ${capitalize(reqFile.module)}
     */
    public ${capitalize(reqFile.module)} save${capitalize(reqFile.module)}(${capitalize(reqFile.module)} ${reqFile.module.toLowerCase()});

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @param id${capitalize(reqFile.module)}
     * @return ${capitalize(reqFile.module)}
     */
    public ${capitalize(reqFile.module)} get${capitalize(reqFile.module)}ById(Integer id${capitalize(reqFile.module)});

}
  `;
}
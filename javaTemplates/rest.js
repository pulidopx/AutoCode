"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.domain.ports.in.rest;


import ${reqFile.package}.infrastructure.response.Response;
import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};


public interface ${capitalize(reqFile.module)}Rest {
    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @param id${capitalize(reqFile.module)}
     * @param idStatus
     * @return
     */
    Response get${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)}, Integer idStatus);

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @param ${reqFile.module.toLowerCase()}
     * @return
     */
    Response save${capitalize(reqFile.module)}(${capitalize(reqFile.module)} ${reqFile.module.toLowerCase()});

}
  `;
}
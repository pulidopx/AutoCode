"use strict";

const { capitalize, iterateModelsProps, iterateGettersAndSettersModel, importModelReferences } = require("../utils");


module.exports = function(reqFile) {
  return `package ${reqFile.package}.modules.${reqFile.source}.domain.models;
${importModelReferences(reqFile.properties, reqFile)}

public class ${capitalize(reqFile.module)} {
    private Integer id${capitalize(reqFile.module)};
    private Integer status;
    ${iterateModelsProps(reqFile.properties)}

    public Integer getId${capitalize(reqFile.module)}() { return id${capitalize(reqFile.module)}; }

    public void setId${capitalize(reqFile.module)}(Integer id${capitalize(reqFile.module)}) { this.id${capitalize(reqFile.module)} = id${capitalize(reqFile.module)}; }

    public Integer getStatus() {
        return status;
    }

    public void setStatus(Integer status) {
        this.status = status;
    }
    ${iterateGettersAndSettersModel(reqFile.properties)}
}
  `;
}
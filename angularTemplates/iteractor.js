"use strict";

const { capitalize } = require("../utils");

module.exports = function(reqFile) {
  return `import { ${capitalize(reqFile.module)} } from "../../models/${capitalize(reqFile.module)}";

export abstract class ${capitalize(reqFile.module)}Interactor {
    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @return Promise<${capitalize(reqFile.module)}[]>
     */
    abstract get${capitalize(reqFile.module)}s(${(reqFile.module)}: ${capitalize(reqFile.module)}): Promise<${capitalize(reqFile.module)}[]>;

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @return Promise<${capitalize(reqFile.module)}[]>
     */
    abstract get${capitalize(reqFile.module)}ById(id: number): Promise<${capitalize(reqFile.module)}>;

    /**
     * @author ${reqFile.author || 'nameless dev'}
     * @return Promise<${capitalize(reqFile.module)}[]>
     */
    abstract save( ${(reqFile.module)}: ${capitalize(reqFile.module)}  ): Promise<${capitalize(reqFile.module)}>
}
  `;
}
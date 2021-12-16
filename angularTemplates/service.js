"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `import { ${capitalize(reqFile.module)} } from "../../models/${capitalize(reqFile.module)}";
import { ${capitalize(reqFile.module)}Response } from "../../models/response/${capitalize(reqFile.module)}Response";

export abstract class ${capitalize(reqFile.module)}Service {
    /**
   * @author ${reqFile.author || 'nameless dev'}
   */

    abstract get${capitalize(reqFile.module)}Data(${(reqFile.module)}: ${capitalize(reqFile.module)}): Promise<${capitalize(reqFile.module)}Response>
    abstract get${capitalize(reqFile.module)}ById(id: number): Promise<${capitalize(reqFile.module)}Response>
    abstract save( ${(reqFile.module)}: ${capitalize(reqFile.module)} ): Promise<${capitalize(reqFile.module)}Response>;
}
  `;
}
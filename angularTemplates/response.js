"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `import { ApiResponse } from "src/app/utils/ApiResponse";
import { ${capitalize(reqFile.module)} } from "../${capitalize(reqFile.module)}";

/**
 * @author ${reqFile.author || 'nameless dev'}
 */
export interface ${capitalize(reqFile.module)}Response extends ApiResponse {
    data: ${capitalize(reqFile.module)}[];
}
  `;
}
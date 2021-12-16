"use strict";

const { capitalize, iterateModelFront } = require("../utils");


module.exports = function(reqFile) {
  return `export interface ${capitalize(reqFile.module)} {
	id${capitalize(reqFile.module)}: number;
	status: number;
	${iterateModelFront(reqFile.properties)}
}
  `;
}
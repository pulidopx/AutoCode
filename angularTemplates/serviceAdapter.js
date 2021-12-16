"use strict";

const { capitalize, paramsFormatter } = require("../utils");


module.exports = function(reqFile) {
  return `import { Injectable, InjectionToken } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { ${capitalize(reqFile.module)} } from "../../../domain/models/${capitalize(reqFile.module)}";
import { ${capitalize(reqFile.module)}Response } from "../../../domain/models/response/${capitalize(reqFile.module)}Response";
import { environment } from "src/environments/environment";
import { ${capitalize(reqFile.module)}Service } from "../../../domain/ports/out/${(reqFile.module)}.service";
import formatter from "src/app/utils/formatter";

@Injectable({providedIn:"root"})
export class ${capitalize(reqFile.module)}ServiceAdapter implements ${capitalize(reqFile.module)}Service {
    url: string = environment.api;
    /**
     * 
     * @param http 
     * @author ${reqFile.author || 'nameless dev'}
     */
    constructor(
        private http: HttpClient
    ) {}

    /**
     * 
     * @param menuName 
     * @param idStatus 
     * @returns Promise<${capitalize(reqFile.module)}Response>
     * @author ${reqFile.author || 'nameless dev'}
     * @description Consume servicio para obtener menus
     */
    async get${capitalize(reqFile.module)}Data(${(reqFile.module)}?: ${capitalize(reqFile.module)}): Promise<${capitalize(reqFile.module)}Response> {
        let ${(reqFile.module)}List : ${capitalize(reqFile.module)}Response;
        const query = formatter.toQueryParams({
            ...(zone.id${capitalize(reqFile.module)} ? {id${capitalize(reqFile.module)}: zone.id${capitalize(reqFile.module)}} : {}),
            ...(zone.status ? {idStatus: zone.status} : {}),
            ${paramsFormatter(reqFile.properties, reqFile)}
        })
        ${(reqFile.module)}List = await this.http.get<${capitalize(reqFile.module)}Response>(\`\${this.url}/${(reqFile.module)}s\`)
            .toPromise()
            .catch( err => err);

        return ${(reqFile.module)}List;

    }

    /**
     * 
     * @param menuName 
     * @param idStatus 
     * @returns @returns Promise<${capitalize(reqFile.module)}Response>
     * @author ${reqFile.author || 'nameless dev'}
     * @description Consume servicio para obtener ${(reqFile.module)} que sean padres
     */
    async get${capitalize(reqFile.module)}ById( id: number ): Promise<${capitalize(reqFile.module)}Response> {
        const query = formatter.toQueryParams({
            id${capitalize(reqFile.module)}: id || '',
        })
        return await this.http
            .get<${capitalize(reqFile.module)}Response>(\`\${this.url}/${(reqFile.module)}s\${query})
            .toPromise()
            .catch( err => err );
    }


    /**
     * 
     * @param ${(reqFile.module)} 
     * @returns @returns Promise<${capitalize(reqFile.module)}Response>
     * @author ${reqFile.author || 'nameless dev'}
     * @description Consume servicio para guardar ${(reqFile.module)}
     */
    async save( ${(reqFile.module)} : ${capitalize(reqFile.module)} ): Promise<${capitalize(reqFile.module)}Response> {
        return await this.http
            .post<${capitalize(reqFile.module)}Response>(\`\${this.url}/${(reqFile.module)}s\`, ${(reqFile.module)})
            .toPromise()
            .catch( err => err );
    }

}
  `;
}
"use strict";

const { capitalize } = require("../utils");

module.exports = function(reqFile) {
  return `import { Injectable } from '@angular/core';
import { ${capitalize(reqFile.module)} } from '../../../domain/models/${capitalize(reqFile.module)}';
import { ${capitalize(reqFile.module)}Response } from '../../../domain/models/response/${capitalize(reqFile.module)}Response';

import { ${capitalize(reqFile.module)}Interactor } from '../../../domain/ports/in/${(reqFile.module)}.interactor';
import { MessageService } from '../../../domain/ports/out/message.service';
import { ${capitalize(reqFile.module)}Service } from '../../../domain/ports/out/${(reqFile.module)}.service';

@Injectable({ providedIn: 'root' })
export class ${capitalize(reqFile.module)}InteractorAdapter implements ${capitalize(reqFile.module)}Interactor {
private title: string = '${capitalize(reqFile.name)}';
constructor(
    private ${(reqFile.module)}Service: ${capitalize(reqFile.module)}Service,
    private messageService: MessageService
) {

}

  async get${capitalize(reqFile.module)}s(${(reqFile.module)}: ${capitalize(reqFile.module)}): Promise<${capitalize(reqFile.module)}[]> {
      const ${(reqFile.module)}Response: ${capitalize(reqFile.module)}Response = await this.${(reqFile.module)}Service.get${capitalize(reqFile.module)}Data(${(reqFile.module)}).finally().catch((res) => res);
      if (${(reqFile.module)}Response.statusText == 'OK') {
      return ${(reqFile.module)}Response.data;
      } else {
      this.messageService.dialog('warning', { title: this.title, message: ${(reqFile.module)}Response.message });
      return Promise.reject(${(reqFile.module)}Response.message);
      }
  }

  async get${capitalize(reqFile.module)}ById(id: number): Promise<${capitalize(reqFile.module)}> {
      const ${(reqFile.module)}Response: ${capitalize(reqFile.module)}Response = await this.${(reqFile.module)}Service.get${capitalize(reqFile.module)}ById(id).finally().catch((res) => res);
      if(${(reqFile.module)}Response.statusText == 'OK') {
      return ${(reqFile.module)}Response.data[0];
      } else {
      this.messageService.dialog('warning', { title: this.title, message: ${(reqFile.module)}Response.message });
      return Promise.reject(${(reqFile.module)}Response.message);
      }
  } 

  /**
   * 
   * @param ${(reqFile.module)} 
   * @returns Promise<${capitalize(reqFile.module)}[]>
   * @author ${reqFile.author || 'nameless dev'}
   * @description guarda ${(reqFile.name)} 
   */
      async save( ${(reqFile.module)}: ${capitalize(reqFile.module)} ): Promise<${capitalize(reqFile.module)}> {
      let ${(reqFile.module)}Response : ${capitalize(reqFile.module)}Response;
      ${(reqFile.module)}Response = await this.${(reqFile.module)}Service.save( ${(reqFile.module)} ).finally();
      if( ${(reqFile.module)}Response.statusText == "OK" ) {
          ${(reqFile.module)} = ${(reqFile.module)}Response.data[0];
          /* this.message.dialog( 'success', {title: this.title, message: menuResponse.message } ).then( res => {
              this.location.back();
              )});
          */  
      } else {
          //this.message.dialog( 'warning', {title: this.title, message: menuResponse.message } );  
          return Promise.reject(${(reqFile.module)}Response.message);
      }
      return ${(reqFile.module)};
  }
}
  `;
}
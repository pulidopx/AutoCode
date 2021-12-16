"use strict";

const { capitalize } = require("../utils");


module.exports = function(reqFile) {
  return `
package ${reqFile.package}.modules.${reqFile.source}.infrastructure.adapters.in.rest;

import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};


import ${reqFile.package}.infrastructure.response.Response;

import ${reqFile.package}.modules.${reqFile.source}.domain.models.${capitalize(reqFile.module)};
import ${reqFile.package}.modules.${reqFile.source}.domain.ports.in.rest.ZoneRest;
import ${reqFile.package}.modules.${reqFile.source}.domain.services.${capitalize(reqFile.module)}Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("${reqFile.module.toLowerCase()}s")
public class ${capitalize(reqFile.module)}Controller implements ${capitalize(reqFile.module)}Rest {
  @Autowired
  private ${capitalize(reqFile.module)}Service ${reqFile.module.toLowerCase()}Service;

  @GetMapping
  public Response get${capitalize(reqFile.module)}(
          @RequestParam( name = "id${capitalize(reqFile.module)}", required = false, defaultValue = "" )  Integer id${capitalize(reqFile.module)},
          @RequestParam( name = "idStatus", required = false, defaultValue = "" )  Integer idStatus
  ) {
      try {
          Set<${capitalize(reqFile.module)}> ${reqFile.module.toLowerCase()}List = this.${reqFile.module.toLowerCase()}Service.get${capitalize(reqFile.module)}( id${capitalize(reqFile.module)}, idStatus );

          ResponseEntity.status(HttpStatus.OK).build().getStatusCode();
          return Response.ok()
                  .setMessage("${capitalize(reqFile.name)} obtenidos correctamente")
                  .body(${reqFile.module.toLowerCase()}List);
      } catch (Exception exception) {
          return Response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR)
                  .setMessage(exception.getMessage())
                  .body(null);
      }
  }

  @PostMapping
  public Response save${capitalize(reqFile.module)}(@RequestBody ${capitalize(reqFile.module)} ${reqFile.module.toLowerCase()}) {
      try {
          List<${capitalize(reqFile.module)}> ${reqFile.module.toLowerCase()}List = new ArrayList<>();
          ${reqFile.module.toLowerCase()}List.add(this.${reqFile.module.toLowerCase()}Service.save${capitalize(reqFile.module)}(${reqFile.module.toLowerCase()}));

          return Response.ok()
                  .setMessage( "${capitalize(reqFile.name)} se guardo correctamente." )
                  .body( ${reqFile.module.toLowerCase()}List );
      } catch(Exception exception) {
          return Response.setStatus( HttpStatus.INTERNAL_SERVER_ERROR )
                  .setMessage( exception.getMessage() )
                  .body( null );
      }   
  }
}
  `;
}
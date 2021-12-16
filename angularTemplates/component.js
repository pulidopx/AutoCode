"use strict";

const { capitalize, iterateCleanValuesFront } = require("../utils");

module.exports = function(reqFile) {
  return `import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from "@angular/core";
import { ${capitalize(reqFile.module)} } from '../../../domain/models/${capitalize(reqFile.module)}';
import { ${capitalize(reqFile.module)}Interactor } from "../../../domain/ports/in/${(reqFile.module)}.interactor";

import { Location } from "@angular/common";

import { ${capitalize(reqFile.module)}Status } from 'src/app/modules/core/domain/models/statuses/${(reqFile.module)}.status';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from 'src/app/modules/core/domain/models/Status';

@Component({
  templateUrl: './${(reqFile.module)}.component.html'
})
export class ${capitalize(reqFile.module)}Component implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ${(reqFile.module)}List : MatTableDataSource<${capitalize(reqFile.module)}>;
  displayedColumns: string[] = [ 'id${capitalize(reqFile.module)}', 'name', 'status', 'actions' ];
  idStatus: number = null;
  statuses: Status[];
  ${(reqFile.module)}Status: ${capitalize(reqFile.module)}Status = ${capitalize(reqFile.module)}Status;
  id${capitalize(reqFile.module)}: number;
  ${iterateCleanValuesFront(reqFile.properties, true)}

  /**
   * 
   * @param ${(reqFile.module)}Interactor 
   * @param route 
   * @param location 
   * @author ${reqFile.author || 'nameless dev'}
   */
  constructor(
      private ${(reqFile.module)}Interactor: ${capitalize(reqFile.module)}Interactor,
      private route: ActivatedRoute,
      private location: Location
  ) {}
  
  /**
   * @author ${reqFile.author || 'nameless dev'}
   */
  ngOnInit(){
      this.getStatuses();
      
      this.route.params.subscribe( res => {
          this.id${capitalize(reqFile.module)} = res.id${capitalize(reqFile.module)};
          this.getData();
      });
  }

  /**
   * @author ${reqFile.author || 'nameless dev'}
   */
  getData() {
      this.get${capitalize(reqFile.module)}s();
  }

  /**
   * 
   * @param id${capitalize(reqFile.module)} 
   * @author ${reqFile.author || 'nameless dev'}
   */
  get${capitalize(reqFile.module)}s() {
        const ${(reqFile.module)}Params: ${capitalize(reqFile.module)} = {
        status: Number(this.idStatus)
      }
      this.${(reqFile.module)}Interactor.get${capitalize(reqFile.module)}s(${(reqFile.module)}Params)
      .then( ${(reqFile.module)}List =>  {
        ${(reqFile.module)}List.sort( (a, b) => a.id${capitalize(reqFile.module)} < b.id${capitalize(reqFile.module)} ? -1 : 0 );
        
        this.${(reqFile.module)}List = new MatTableDataSource<${capitalize(reqFile.module)}>(${(reqFile.module)}List);
        this.${(reqFile.module)}List.paginator = this.paginator;
        this.${(reqFile.module)}List.paginator._intl.itemsPerPageLabel = 'Registros por página';
        this.${(reqFile.module)}List.sort = this.sort;
      }).catch( res => res);
  }



  /**
   * @author ${reqFile.author || 'nameless dev'}
   */
  getStatuses() {
      this.statuses = ${capitalize(reqFile.module)}Status.toArray();
  }

  /**
   * 
   * @param status 
   * @returns 
   * @author ${reqFile.author || 'nameless dev'}
   */
  getStatusName( status: number ) {
      return ${capitalize(reqFile.module)}Status.getStatusName(status);
  }


  /**
   * 
   * @param ${(reqFile.module)} 
   * @author ${reqFile.author || 'nameless dev'}
   */
  disable${capitalize(reqFile.module)}( ${(reqFile.module)}: ${capitalize(reqFile.module)} ) {
      if( ${(reqFile.module)}.status == ${capitalize(reqFile.module)}Status.ENABLE ) {
        ${(reqFile.module)}.status = ${capitalize(reqFile.module)}Status.DISABLE;
        this.${(reqFile.module)}Interactor.save( ${(reqFile.module)} )
            .then( res => {
                this.getData();
            }).catch(res=>res);
        
      }
  }

  /**
   * 
   * @param ${(reqFile.module)} 
   * @author ${reqFile.author || 'nameless dev'}
   */
  enable${capitalize(reqFile.module)}( ${(reqFile.module)}: ${capitalize(reqFile.module)} ) {
      if( ${(reqFile.module)}.status == ${capitalize(reqFile.module)}Status.DISABLE ) {
          ${(reqFile.module)}.status = ${capitalize(reqFile.module)}Status.ENABLE;
          this.${(reqFile.module)}Interactor.save( ${(reqFile.module)} )
              .then( res => {
                  this.getData();
              }).catch(res=>res);
      
       }
  }

  /**
   * 
   * @param ${(reqFile.module)} 
   * @author ${reqFile.author || 'nameless dev'}
   */
  delete${capitalize(reqFile.module)}( ${(reqFile.module)}: ${capitalize(reqFile.module)} ) {
      ${(reqFile.module)}.status = ${capitalize(reqFile.module)}Status.DELETE;
      this.${(reqFile.module)}Interactor.save( ${(reqFile.module)} )
          .then( res => {
              this.getData();
          }).catch(res=>res);
    
  }

  /**
   * @author ${reqFile.author || 'nameless dev'}
   */
  cleanFilters() {
    this.idStatus = null;
    ${iterateCleanValuesFront(reqFile.properties, true, true)}
  }

  /**
   * @author ${reqFile.author || 'nameless dev'}
   */
  back() {
      this.location.back();
  }
}
  `;
}
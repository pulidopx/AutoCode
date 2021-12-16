import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from "@angular/core";
import { Zone } from '../../../domain/models/Zone';
import { ZoneInteractor } from "../../../domain/ports/in/zone.interactor";

import { Location } from "@angular/common";

import { ZoneStatus } from 'src/app/modules/core/domain/models/statuses/zone.status';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Status } from 'src/app/modules/core/domain/models/Status';

@Component({
  templateUrl: './zone.component.html'
})
export class ZoneComponent implements OnInit  {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  zoneList : MatTableDataSource<Zone>;
  displayedColumns: string[] = [ 'idZone', 'name', 'status', 'actions' ];
  zoneName: string = "";
  idStatus: number = null;
  statuses: Status[];
  zoneStatus: ZoneStatus = ZoneStatus;
  idZone: number;

  /**
   * 
   * @param zoneInteractor 
   * @param route 
   * @param location 
   * @author nameless dev
   */
  constructor(
      private zoneInteractor: ZoneInteractor,
      private route: ActivatedRoute,
      private location: Location
  ) {}
  
  /**
   * @author nameless dev
   */
  ngOnInit(){
      this.getStatuses();
      
      this.route.params.subscribe( res => {
          this.idZone = res.idZone;
          this.getData();
      });
  }

  /**
   * @author nameless dev
   */
  getData() {
      this.getZones(this.idZone);
  }

  /**
   * 
   * @param idZone 
   * @author nameless dev
   */
  getZones( idZones: number ) {
      this.zoneInteractor.getZones(idZones)
      .then( zoneList =>  {
        zoneList.sort( (a, b) => a.idZone < b.idZone ? -1 : 0 );
        
        this.zoneList = new MatTableDataSource<Zone>(zoneList);
        this.zoneList.paginator = this.paginator;
        this.zoneList.paginator._intl.itemsPerPageLabel = 'Registros por página';
        this.zoneList.sort = this.sort;
      }).catch( res => res);
  }



  /**
   * @author nameless dev
   */
  getStatuses() {
      this.statuses = ZoneStatus.toArray();
  }

  /**
   * 
   * @param status 
   * @returns 
   * @author nameless dev
   */
  getStatusName( status: number ) {
      return ZoneStatus.getStatusName(status);
  }


  /**
   * 
   * @param zone 
   * @author nameless dev
   */
  disableZone( zone: Zone ) {
      if( zone.status == ZoneStatus.ENABLE ) {
        zone.status = 2;
        this.zoneInteractor.save( zone )
            .then( res => {
                this.getData();
            }).catch(res=>res);
        
      }
  }

  /**
   * 
   * @param zone 
   * @author nameless dev
   */
  enableZone( zone: Zone ) {
      if( zone.status == ZoneStatus.DISABLE ) {
          zone.status = ZoneStatus.ENABLE;
          this.zoneInteractor.save( zone )
              .then( res => {
                  this.getData();
              }).catch(res=>res);
      
       }
  }

  /**
   * 
   * @param zone 
   * @author nameless dev
   */
  deleteZone( zone: Zone ) {
      zone.status = 99;
      this.zoneInteractor.save( zone )
          .then( res => {
              this.getData();
          }).catch(res=>res);
    
  }

  /**
   * @author nameless dev
   */
  cleanFilters() {
      this.zoneName = "";
      this.idStatus = null;
  }

  /**
   * @author nameless dev
   */
  back() {
      this.location.back();
  }
}
  
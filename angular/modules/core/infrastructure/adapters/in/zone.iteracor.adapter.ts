import { Injectable } from '@angular/core';
import { Zone } from '../../../domain/models/Zone';
import { ZoneResponse } from '../../../domain/models/response/ZoneResponse';

import { ZoneInteractor } from '../../../domain/ports/in/zone.interactor';
import { MessageService } from '../../../domain/ports/out/message.service';
import { ZoneService } from '../../../domain/ports/out/zone.service';

@Injectable({ providedIn: 'root' })
export class ZoneInteractorAdapter implements ZoneInteractor {
private title: string = 'Zonas';
constructor(
    private zoneService: ZoneService,
    private messageService: MessageService
) {

}

  async getZones(): Promise<Zone[]> {
      const zoneResponse: ZoneResponse = await this.zoneService.getZoneData().finally().catch((res) => res);
      if (zoneResponse.statusText == 'OK') {
      return zoneResponse.data;
      } else {
      this.messageService.dialog('warning', { title: this.title, message: zoneResponse.message });
      return Promise.reject(zoneResponse.message);
      }
  }

  async getZoneById(id: number): Promise<Zone> {
      const zoneResponse: ZoneResponse = await this.zoneService.getZoneById(id).finally().catch((res) => res);
      if(zoneResponse.statusText == 'OK') {
      return zoneResponse.data[0];
      } else {
      this.messageService.dialog('warning', { title: this.title, message: zoneResponse.message });
      return Promise.reject(zoneResponse.message);
      }
  } 

  /**
   * 
   * @param zone 
   * @returns Promise<Zone[]>
   * @author nameless dev
   * @description guarda Zonas 
   */
      async save( zone: Zone ): Promise<Zone> {
      let zoneResponse : ZoneResponse;
      zoneResponse = await this.zoneService.save( zone ).finally();
      if( zoneResponse.statusText == "OK" ) {
          zone = zoneResponse.data[0];
          /* this.message.dialog( 'success', {title: this.title, message: menuResponse.message } ).then( res => {
              this.location.back();
              )});
          */  
      } else {
          //this.message.dialog( 'warning', {title: this.title, message: menuResponse.message } );  
          return Promise.reject(zoneResponse.message);
      }
      return zone;
  }
}
  
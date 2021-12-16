
  import { Injectable, InjectionToken } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Zone } from "../../../domain/models/Zone";
import { ZoneResponse } from "../../../domain/models/response/ZoneResponse";
import { environment } from "src/environments/environment";
import { ZoneService } from "../../../domain/ports/out/zone.service";

@Injectable({providedIn:"root"})
export class ZoneServiceAdapter implements ZoneService {
    url: string = environment.api;
    /**
     * 
     * @param http 
     * @author nameless dev
     */
    constructor(
        private http: HttpClient
    ) {}

    /**
     * 
     * @param menuName 
     * @param idStatus 
     * @returns Promise<ZoneResponse>
     * @author nameless dev
     * @description Consume servicio para obtener menus
     */
    async getZoneData(): Promise<ZoneResponse> {
        let zoneList : ZoneResponse;
        zoneList = await this.http.get<ZoneResponse>(`${this.url}/zones`)
            .toPromise()
            .catch( err => err);

        return zoneList;

    }

    /**
     * 
     * @param menuName 
     * @param idStatus 
     * @returns @returns Promise<ZoneResponse>
     * @author nameless dev
     * @description Consume servicio para obtener zone que sean padres
     */
    async getZoneById( id: number ): Promise<ZoneResponse> {
        return await this.http
            .get<ZoneResponse>(`${this.url}/zone/?idZone=${id || ''}`)
            .toPromise()
            .catch( err => err );
    }


    /**
     * 
     * @param zone 
     * @returns @returns Promise<ZoneResponse>
     * @author nameless dev
     * @description Consume servicio para guardar zone
     */
    async save( zone : Zone ): Promise<ZoneResponse> {
        return await this.http
            .post<ZoneResponse>(`${this.url}/zone`, zone)
            .toPromise()
            .catch( err => err );
    }

}
  
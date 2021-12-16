import { Zone } from "../../models/Zone";
import { ZoneResponse } from "../../models/response/ZoneResponse";

export abstract class ZoneService {
    /**
   * @author nameless dev
   */

    abstract getZoneData(): Promise<ZoneResponse>
    abstract getZoneById(id: number): Promise<ZoneResponse>
    abstract save( zone: Zone ): Promise<ZoneResponse>;
}
  
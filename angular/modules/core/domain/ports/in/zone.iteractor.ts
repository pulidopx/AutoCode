import { Zone } from "../../models/Zone";

export abstract class ZoneInteractor {
    /**
     * @author nameless dev
     * @return Promise<Zone[]>
     */
    abstract getZone(idZone: number): Promise<Zone[]>;

    /**
     * @author nameless dev
     * @return Promise<Zone[]>
     */
    abstract getZoneById(id: number): Promise<Zone>;

    /**
     * @author nameless dev
     * @return Promise<Zone[]>
     */
    abstract save( zone: Zone  ): Promise<Zone>
}
  

package com.caprepa.apivaleamigo.modules.core.domain.ports.out.persistence;

import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;

import java.util.Set;

public interface ZonePersistence {
    /**
     * @author nameless dev
     * @param idZone
     * @param idStatus
     * @return Zone
     */
    public Set<Zone> getZone(Integer idZone, Integer idStatus);

    /**
     * @author nameless dev
     * @param zone
     * @return Zone
     */
    public Zone saveZone(Zone zone);

    /**
     * @author nameless dev
     * @param idZone
     * @return Zone
     */
    public Zone getZoneById(Integer idZone);

}
  
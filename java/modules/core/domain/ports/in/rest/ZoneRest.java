
package com.caprepa.apivaleamigo.modules.core.domain.ports.in.rest;


import com.caprepa.apivaleamigo.infrastructure.response.Response;
import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;


public interface ZoneRest {
    /**
     * @author nameless dev
     * @param idZone
     * @param idStatus
     * @return
     */
    Response getZone(Integer idZone, Integer idStatus);

    /**
     * @author nameless dev
     * @param zone
     * @return
     */
    Response saveZone(Zone zone);

}
  
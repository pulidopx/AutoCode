
package com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.in.rest;

import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;
package com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.in.rest;


import com.caprepa.apivaleamigo.infrastructure.response.Response;

import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;
import com.caprepa.apivaleamigo.modules.core.domain.ports.in.rest.ZoneRest;
import com.caprepa.apivaleamigo.modules.core.domain.services.ZoneService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("zone")
public class ZoneController implements ZoneRest {
  @Autowired
  private ZoneService zoneService;

  @GetMapping
  public Response getZone(
          @RequestParam( name = "idZone", required = false, defaultValue = "" )  Integer idZone,
          @RequestParam( name = "idStatus", required = false, defaultValue = "" )  Integer idStatus
  ) {
      try {
          Set<Zone> zoneList = this.zoneService.getZone( idZone, idStatus );

          ResponseEntity.status(HttpStatus.OK).build().getStatusCode();
          return Response.ok()
                  .setMessage("Zonas obtenidos correctamente")
                  .body(zoneList);
      } catch (Exception exception) {
          return Response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR)
                  .setMessage(exception.getMessage())
                  .body(null);
      }
  }

  @PutMapping
  public Response saveZone(@RequestBody Zone zone) {
      try {
          List<Zone> zoneList = new ArrayList<>();
          zoneList.add(this.zoneService.saveZone(zone));

          return Response.ok()
                  .setMessage( "Zonas se guardo correctamente." )
                  .body( zoneList );
      } catch(Exception exception) {
          return Response.setStatus( HttpStatus.INTERNAL_SERVER_ERROR )
                  .setMessage( exception.getMessage() )
                  .body( null );
      }   
  }
}
  
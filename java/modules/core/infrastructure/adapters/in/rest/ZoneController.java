
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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
  
package com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql;

import com.caprepa.apivaleamigo.infrastructure.adapters.CriteriaAdapter;
import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;
import com.caprepa.apivaleamigo.modules.core.domain.ports.out.persistence.ZonePersistence;
import com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.entities.ZoneEntity;
import com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.mappers.ZoneMapper;
import com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.repositories.ZoneRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Service
public class ZonePersistenceMysql implements ZonePersistence {

    @Autowired
    private ZoneRepository ZoneRepository;
    @Autowired
    private ZoneMapper ZoneMapper;
    @Autowired
    private EntityManagerFactory entityManagerFactory;

    @PersistenceContext
    EntityManager entityManager;

    @Override
    public Set<Zone> getZone(Integer idZone, Integer status) {
        CriteriaBuilder criteriaBuilder = entityManager.getCriteriaBuilder();

        CriteriaAdapter<ZoneEntity> criteriaAdapter = new CriteriaAdapter<>(entityManagerFactory);
        criteriaAdapter.init(ZoneEntity.class);
        criteriaAdapter.distinct();

        List<Predicate> predicates = new ArrayList<>();

        Predicate whereStatus;
        if (status == null) {
            whereStatus = criteriaAdapter.equal("status", 1);
        } else {
            whereStatus = criteriaAdapter.equal("status", status);
        }

        predicates.add(whereStatus);

        criteriaAdapter.where( criteriaBuilder.and(predicates.toArray( new Predicate[predicates.size()])) );
        criteriaAdapter.setFetchGraph( "zone-graph" );
        Set<ZoneEntity> zoneEntityList = criteriaAdapter.getResultList(20 );
        Set<Zone> zoneList = zoneMapper.toModelList( zoneEntityList );
        criteriaAdapter.close();
        return zoneList;
    }

    @Override
    public Zone saveZone(Zone zone) {
      ZoneEntity zoneEntity = zoneMapper.toEntity( zone );
      zoneEntity = zoneRepository.save( zoneEntity );
      zone.setIdZone( zoneEntity.getIdZone() );
      return zone;
    }

}
  
  
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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
          Set<Zone> zoneList = this.zoneService.getZones( idZone, idStatus );

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
  
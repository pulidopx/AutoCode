
package com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.entities;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity()
@Table( name = "core_zone" )
@Getter
@Setter
@NamedEntityGraph(
    name = "zone-graph"
)
public class ZoneEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column( name = "id_zone" )
    private Integer idZone;
    
    @Column()
    private Integer status;

    
    @Column()
    private String name;
      
}
  
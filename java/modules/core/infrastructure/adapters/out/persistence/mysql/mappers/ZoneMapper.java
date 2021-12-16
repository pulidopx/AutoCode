
package com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.mappers;

import com.caprepa.apivaleamigo.infrastructure.mapper.IMapper;
import com.caprepa.apivaleamigo.infrastructure.mapper.Mapper;
import com.caprepa.apivaleamigo.modules.core.domain.models.Zone;
import com.caprepa.apivaleamigo.modules.core.infrastructure.adapters.out.persistence.mysql.entities.ZoneEntity;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class ZoneMapper extends Mapper<Zone,ZoneEntity> implements IMapper<Zone, ZoneEntity> {
  /**
   * @author nameless dev
   * @param ZoneEntity
   * @return
   */
  @Override
  public Zone toModel(ZoneEntity zoneEntity) {
    Zone zone = mapperEntityToModel(zoneEntity, new Zone());
      return zone;
  }
  
  @Override
  public Set<Zone> toModelList(Set<ZoneEntity> zoneEntityList) {
      Set<Zone> modelList = new HashSet<>();
      for ( ZoneEntity zoneEntity : zoneEntityList ) {
          Zone zone = toModel(zoneEntity);
          modelList.add( zone );
      }
      return modelList;
  }
  
  @Override
  public ZoneEntity toEntity(Zone zone) {
      ZoneEntity zoneEntity = mapperModelToEntity(zone, new ZoneEntity());

      return zoneEntity;
  }
}
  
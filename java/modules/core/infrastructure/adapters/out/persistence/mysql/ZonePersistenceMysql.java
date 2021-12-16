
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
    private ZoneRepository zoneRepository;
    @Autowired
    private ZoneMapper zoneMapper;
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
  
  
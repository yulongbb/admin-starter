package org.zxiat.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.zxiat.entity.Permission;

/**
 * Created by Jeremy on 2019/2/18.
 */
@Repository
public interface PermissionRepository extends CrudRepository<Permission, Long> {
}

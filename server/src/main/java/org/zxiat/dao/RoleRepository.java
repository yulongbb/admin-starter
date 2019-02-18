package org.zxiat.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.zxiat.entity.Role;
import org.zxiat.entity.User;

/**
 * Created by Jeremy on 2019/2/15.
 */
@Repository
public interface RoleRepository extends CrudRepository<Role, Long> {
  Role findByName(String s);

  Role findById(Long id);
}

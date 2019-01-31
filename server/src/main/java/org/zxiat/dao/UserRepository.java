package org.zxiat.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.zxiat.entity.User;

/**
 * Created by Jeremy on 2019/1/21.
 */
@Repository
public interface UserRepository extends CrudRepository<User,Long> {
  User findByUsername(String username);

  User findUserByUsername(String username);

  User findById(Long id);
}

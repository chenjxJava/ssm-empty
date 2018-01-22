package com.chenjx.sys.dao;


import com.chenjx.sys.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserMapper {

	User findUserByUsername(String username);

	Integer insert(User entity);

	Integer delete(String id);

	User findById(String id);

	List<User> findList(User entity);

	List<User> findAllList();

	Integer update(User entity);
}

package com.chenjx.sys.service;


import com.chenjx.sys.model.User;

import java.util.List;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:20 2017-09-04
 * @Modified By:
 */
public interface UserService {

	boolean insert(User entity);

	boolean delete(String id);

	User findById(String id);

	List<User> findList(User entity);

	List<User> findAllList();

	boolean update(User entity);

	// add
	User findUserByUsername(String username);
}

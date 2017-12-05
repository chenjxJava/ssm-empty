package com.chenjx.sys.service.impl;


import com.chenjx.sys.dao.UserMapper;
import com.chenjx.sys.model.User;
import com.chenjx.sys.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:22 2017-09-04
 * @Modified By:
 */
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	protected UserMapper dao;

	public boolean insert(User entity) {
		return dao.insert(entity)>0;
	}

	public boolean delete(String id) {
		return dao.delete(id)>0;
	}

	public User findById(String id) {
		return dao.findById(id);
	}

	@Override
	public List<User> findList(User entity) {
		return dao.findList(entity);
	}

	public List<User> findAllList() {
		return dao.findAllList();
	}

	public boolean update(User entity) {
		return dao.update(entity)>0;
	}

	@Override
	public User findUserByUsername(String username) {
		return dao.findUserByUsername(username);
	}
}

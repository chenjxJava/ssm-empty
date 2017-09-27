package com.javen.sys.service.impl;

import org.springframework.stereotype.Service;

import com.chenjx.common.base.impl.BaseServiceImpl;
import com.javen.sys.dao.UserMapper;
import com.javen.sys.model.User;
import com.javen.sys.service.UserService;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:22 2017-09-04
 * @Modified By:
 */
@Service("userService")
public class UserServiceImpl extends BaseServiceImpl<User, UserMapper> implements UserService {

	@Override
	public User findUserByUsername(String username) {
		return dao.findUserByUsername(username);
	}
}

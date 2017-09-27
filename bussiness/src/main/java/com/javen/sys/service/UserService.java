package com.javen.sys.service;

import com.chenjx.common.base.BaseService;
import com.javen.sys.model.User;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:20 2017-09-04
 * @Modified By:
 */
public interface UserService extends BaseService<User> {


	User findUserByUsername(String username);
}

package com.chenjx;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.javen.model.Permissions;
import com.javen.service.PermissionService;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 9:35 2017-09-01
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:spring-mybatis.xml")
public class TestUserService {
	@Autowired
	private PermissionService service;

	@Test
	public void insert() {
		Permissions permissions = new Permissions();
		permissions.setPermission("test");
		permissions.setAvailable("2");
		permissions.setDescription("222");
		service.insert(permissions);
	}

}

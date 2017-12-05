package com.chenjx.mapper;

import com.chenjx.sys.dao.PermissionsMapper;
import com.chenjx.sys.model.Permissions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:40 2017-09-26
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:springContext.xml")
public class TestPermissionMapper {

	@Autowired
	private PermissionsMapper mapper;

	@Test
	public void testInsert() {
		Permissions entity = new Permissions();
		entity.setAvailable("1");
		entity.setPermission("user:add");
		entity.setDescription("用户增加权限");
		mapper.insert(entity);
	}

	@Test
	public void testUpdate() {
		Permissions entity = new Permissions();
		entity.setDescription("cs001");
		mapper.update(entity);
	}

}


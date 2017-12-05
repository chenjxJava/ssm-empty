package com.chenjx.mapper;

import java.util.List;

import com.chenjx.sys.dao.RoleMapper;
import com.chenjx.sys.model.Role;
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
public class TestRoleMapper {

	@Autowired
	private RoleMapper mapper;

	@Test
	public void testInsert() {
		Role entity = new Role();
		entity.setAvailable("1");
		entity.setRoleName("测试角色1");
		entity.setDescription("测试角色");
		mapper.insert(entity);
	}

	@Test
	public void testUpdate() {
		Role entity = new Role();
		entity.setDescription("cs001");
		mapper.update(entity);
	}

	@Test
	public void testFind() {
		List<Role> cs001 = mapper.findRoleByUsername("cs001");
		System.out.println(cs001);
	}
}


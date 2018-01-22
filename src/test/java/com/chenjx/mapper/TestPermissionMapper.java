package com.chenjx.mapper;

import com.chenjx.sys.dao.PermissionsMapper;
import com.chenjx.sys.model.Permissions;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.ArrayList;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:40 2017-09-26
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "src/main/resources/springContext.xml")
public class TestPermissionMapper {

	@Autowired
	private PermissionsMapper mapper;

	@Test
	public void testInsert() {
		Permissions entity = new Permissions();
		entity.setAvailable("1");
		entity.setPermission("app:delete");
		entity.setDescription("用户增加权限");
		mapper.insert(entity);
	}

	@Test
	public void testUpdate() {
		Permissions entity = new Permissions();
		entity.setId(7L);
		entity.setDescription("app删除权限");
		mapper.update(entity);
	}

	@Test
	public void testrelatRole() {
		ArrayList<String> permIds = new ArrayList<>();
		permIds.add("1");
		permIds.add("2");
		permIds.add("3");
		permIds.add("4");

		mapper.relatRole(permIds, "33");
	}

}


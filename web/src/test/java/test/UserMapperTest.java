package test;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chenjx.common.utils.MD5;
import com.chenjx.common.utils.PasswordHelper;
import com.javen.sys.dao.UserMapper;
import com.javen.sys.model.User;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:40 2017-09-26
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:springContext.xml")
public class UserMapperTest {

	@Autowired
	private UserMapper userMapper;

	@Test
	public void testInsert() {
		User entity = new User();
		Map<String, Object> map = new PasswordHelper().generatePassword(MD5.md5("chenjx"));
		entity.setUsername("cs001");
		entity.setPassword(map.get("password").toString());
		entity.setSalt(map.get("salt").toString());
		userMapper.insert(entity);
	}

	@Test
	public void testUpdate() {
		User entity = new User();
		entity.setUsername("cs001");
		userMapper.update(entity);
	}

	@Test
	public void testLogin() {
		User cs001 = userMapper.findUserByUsername("cs001");
		System.out.println(cs001);
	}

	@Test
	public void testFindAllList() {
		List<User> list = userMapper.findAllList();
		System.out.println(list);
	}

	@Test
	public void testFindList() {
		List<User> list = userMapper.findList(new User());
		System.out.println(list);
	}
}


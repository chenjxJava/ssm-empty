package com.chenjx.mapper;

import java.util.List;
import java.util.Map;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.chenjx.common.utils.password.MD5;
import com.chenjx.common.utils.password.PasswordHelper;
import com.chenjx.sys.dao.UserMapper;
import com.chenjx.sys.model.User;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:40 2017-09-26
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "/springContext.xml")
public class TestUserMapper {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void testInsert() {
        //密码加密：密码进行md5加密，传递到后台，然后进行散列，生成密码和加密盐
        User entity = new User();
        Map<String, Object> map = new PasswordHelper().generatePassword(MD5.md5("123456"));
        entity.setUsername("cs002");
        entity.setPassword(map.get("password").toString());
        entity.setSalt(map.get("salt").toString());
        userMapper.insert(entity);
    }

    @Test
    public void testUpdate() {
        User entity = new User();
        entity.setId(1L);
        entity.setUsername("admin");

        Map<String, Object> map = new PasswordHelper().generatePassword(MD5.md5("admin"));
        entity.setPassword(map.get("password").toString());
        entity.setSalt(map.get("salt").toString());

        userMapper.update(entity);
    }

    @Test
    public void testLogin() {
        String password = MD5.md5("admin");
        User record = userMapper.findUserByUsername("admin");
        boolean b = new PasswordHelper().checkPassword(password,
                record.getPassword(), record.getSalt());
        System.out.println(b);
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


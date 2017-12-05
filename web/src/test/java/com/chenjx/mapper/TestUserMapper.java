package com.chenjx.mapper;

import java.util.List;
import java.util.Map;

import com.chenjx.sys.dao.UserMapper;
import com.chenjx.sys.model.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import common.utils.MD5;
import common.utils.PasswordHelper;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:40 2017-09-26
 * @Modified By:
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = "classpath:springContext.xml")
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
        entity.setUsername("cs001");
        userMapper.update(entity);
    }

    @Test
    public void testLogin() {
        String password = MD5.md5("123456");
        User record = userMapper.findUserByUsername("cs002");
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


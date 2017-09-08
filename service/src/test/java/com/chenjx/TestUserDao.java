package com.chenjx;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.javen.dao.sys.UserMapper;
import com.javen.model.User;

@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
  
public class TestUserDao {
    @Autowired
    private UserMapper dao;

    @Test
    public void testInsert() {
        User user = new User();
        user.setUsername("chenjx");
        user.setPassword("chenjx");
        user.setSalt("salt");
        dao.insert(user);
    }

    @Test
    public void testDelete() {
        dao.delete("1");
    }

    @Test
    public void testUpdate() {
        User user = new User();
        user.setId(1L);
        user.setUsername("admin");
        user.setPassword("admin");
        user.setSalt("salt");
        dao.insert(user);
    }

    @Test
    public void testFindById() {
        User byId = dao.findById("3");
        System.out.println(byId);
    }

    @Test
    public void testFindAllList() {
        List<User> allList = dao.findAllList();
        System.out.println(allList);
    }

}  
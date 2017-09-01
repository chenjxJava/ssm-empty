package com.chenjx;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.javen.dao.sys.RoleDao;
import com.javen.model.Role;

@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
  
public class TestRoleDao {
    @Autowired
    private RoleDao dao;

    @Test
    public void testInsert() {
        Role role = new Role();
        role.setAvailable("1");
        role.setDescription("测试");
        role.setRoleName("系统测试员");
        dao.insert(role);
    }

    @Test
    public void testDelete() {
        dao.delete("2");
    }

    @Test
    public void testUpdate() {
        Role role = new Role();
        role.setId(2L);
        role.setAvailable("1");
        role.setDescription("aaaa");
        role.setRoleName("aaaa");
        dao.update(role);
    }

    @Test
    public void testFindById() {
        Role byId = dao.findById("3");
        System.out.println(byId);
    }

    @Test
    public void testFindAllList() {
        List<Role> allList = dao.findAllList();
        System.out.println(allList);
    }

}  
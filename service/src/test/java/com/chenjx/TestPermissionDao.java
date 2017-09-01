package com.chenjx;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.javen.dao.sys.PermissionsDao;
import com.javen.model.Permissions;

@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
  
public class TestPermissionDao {
    @Autowired
    private PermissionsDao dao;

    @Test
    public void testInsert() {
        Permissions permissions = new Permissions();
        permissions.setPermission("play");
        permissions.setAvailable("1");
        permissions.setDescription("中文哦");
        dao.insert(permissions);
    }

    @Test
    public void testDelete() {
        dao.delete("1");
    }

    @Test
    public void testUpdate() {
        Permissions permissions = new Permissions();
        permissions.setId(1L);
        permissions.setPermission("admin");
        permissions.setAvailable("1");
        permissions.setDescription("系统管理员");
        dao.update(permissions);
    }

    @Test
    public void testFindById() {
        Permissions byId = dao.findById("4");
        System.out.println(byId);
    }

    @Test
    public void testFindAllList() {
        List<Permissions> allList = dao.findAllList();
        System.out.println(allList);
    }

}  
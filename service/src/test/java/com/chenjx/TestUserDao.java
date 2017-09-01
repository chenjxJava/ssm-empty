package com.chenjx;

import org.apache.log4j.Logger;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.javen.dao.PermissionsDao;
import com.javen.model.Permissions;

@RunWith(SpringJUnit4ClassRunner.class)     //表示继承了SpringJUnit4ClassRunner类  
@ContextConfiguration(locations = {"classpath:spring-mybatis.xml"})
  
public class TestUserDao {
    private static Logger logger = Logger.getLogger(TestUserDao.class);
//  private ApplicationContext ac = null;
    @Autowired
    private PermissionsDao dao;

    @Test
    public void testInsert() {
        Permissions permissions = new Permissions();
        permissions.setPermission("play");
        permissions.setAvailable("1");
        permissions.setDescription("111");
        dao.insert(permissions);
    }
}  
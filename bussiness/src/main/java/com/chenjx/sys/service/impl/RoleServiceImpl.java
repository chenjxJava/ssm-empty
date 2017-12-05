package com.chenjx.sys.service.impl;

import com.chenjx.sys.dao.RoleMapper;
import com.chenjx.sys.dao.RoleMapper;
import com.chenjx.sys.model.Role;
import com.chenjx.sys.model.Role;
import com.chenjx.sys.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

/**
 * create by chenjx 2017/12/6
 */
public class RoleServiceImpl implements RoleService {
    
    @Autowired
    private RoleMapper dao;

    public boolean insert(Role entity) {
        return dao.insert(entity)>0;
    }

    public boolean delete(String id) {
        return dao.delete(id)>0;
    }

    public Role findById(String id) {
        return dao.findById(id);
    }

    @Override
    public List<Role> findList(Role entity) {
        return dao.findList(entity);
    }

    public List<Role> findAllList() {
        return dao.findAllList();
    }

    public Boolean update(Role entity) {
        return dao.update(entity)>0;
    }
    @Override
    public void relatUser(List<String> roleIds, String userId) {
        dao.relatUser(roleIds, userId);
    }
}

package com.chenjx.sys.service.impl;


import com.chenjx.sys.dao.PermissionsMapper;
import com.chenjx.sys.model.Permissions;
import com.chenjx.sys.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PermissionServiceImpl implements PermissionService {
    @Autowired
    private PermissionsMapper dao;

    public boolean insert(Permissions entity) {
        return dao.insert(entity)>0;
    }

    public boolean delete(String id) {
        return dao.delete(id)>0;
    }

    public Permissions findById(String id) {
        return dao.findById(id);
    }

    @Override
    public List<Permissions> findList(Permissions entity) {
        return dao.findList(entity);
    }

    public List<Permissions> findAllList() {
        return dao.findAllList();
    }

    public Boolean update(Permissions entity) {
        return dao.update(entity)>0;
    }

    public void relatRole(List<String> roleIds, String userId) {
        dao.relatRole(roleIds, userId);
    }
}

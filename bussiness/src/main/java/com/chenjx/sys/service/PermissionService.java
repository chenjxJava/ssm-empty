package com.chenjx.sys.service;


import com.chenjx.sys.model.Permissions;

import java.util.List;

public interface PermissionService {

    boolean insert(Permissions entity);

    boolean delete(String id);

    Permissions findById(String id);

    List<Permissions> findList(Permissions entity);

    List<Permissions> findAllList();

    Boolean update(Permissions entity);

}

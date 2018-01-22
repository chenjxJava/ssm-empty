package com.chenjx.sys.service;


import com.chenjx.sys.model.Role;

import java.util.List;

public interface RoleService {

    boolean insert(Role entity);

    boolean delete(String id);

    Role findById(String id);

    List<Role> findList(Role entity);

    List<Role> findAllList();

    Boolean update(Role entity);

    void relatUser(List<String> roleIds, String userId);

}

package com.chenjx.sys.dao;


import com.chenjx.sys.model.Permissions;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PermissionsMapper {

    Integer insert(Permissions entity);

    Integer delete(String id);

    Permissions findById(String id);

    List<Permissions> findList(Permissions entity);

    List<Permissions> findAllList();

    Integer update(Permissions entity);

}

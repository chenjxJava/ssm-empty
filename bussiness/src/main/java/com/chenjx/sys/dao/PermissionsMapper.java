package com.chenjx.sys.dao;


import com.chenjx.sys.model.Permissions;
import org.apache.ibatis.annotations.Param;
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

    void relatRole(@Param("permIds") List<String> permIds, @Param("roleId") String roleId);

}

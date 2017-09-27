package com.javen.sys.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.chenjx.common.base.BaseMapper;
import com.javen.sys.model.Role;

@Repository
public interface RoleMapper extends BaseMapper<Role> {
	List<Role> findPermissionsByUsername(String username);
}

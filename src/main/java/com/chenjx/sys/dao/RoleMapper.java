package com.chenjx.sys.dao;


import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import com.chenjx.sys.model.Role;

@Repository
public interface RoleMapper {
	List<Role> findRoleByUsername(String username);

	Integer insert(Role entity);

	Integer delete(String id);

	Role findById(String id);

	List<Role> findList(Role entity);

	List<Role> findAllList();

	Integer update(Role entity);

	void relatUser(@Param("roleIds") List<String> roleIds, @Param("userId") String userId);
}

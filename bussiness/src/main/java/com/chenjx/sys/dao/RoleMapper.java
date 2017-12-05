package com.chenjx.sys.dao;


import com.chenjx.sys.model.Role;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

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
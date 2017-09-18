package com.javen.sys.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.chenjx.common.base.BaseMapper;
import com.javen.sys.model.Permissions;

@Repository
public interface PermissionsMapper extends BaseMapper<Permissions> {

	List<Permissions> findList(String description);
}

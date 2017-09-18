package com.javen.sys.service.impl;

import org.springframework.stereotype.Service;

import com.chenjx.common.base.impl.BaseServiceImpl;
import com.javen.sys.dao.PermissionsMapper;
import com.javen.sys.model.Permissions;
import com.javen.sys.service.PermissionService;

@Service
public class PermissionServiceImpl extends BaseServiceImpl<Permissions, PermissionsMapper> implements PermissionService {
}

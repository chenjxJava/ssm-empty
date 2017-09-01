package com.javen.service.impl;

import org.springframework.stereotype.Service;

import com.chenjx.common.base.impl.BaseServiceImpl;
import com.javen.dao.PermissionsDao;
import com.javen.model.Permissions;
import com.javen.service.PermissionService;

@Service
public class PermissionServiceImpl extends BaseServiceImpl<Permissions, PermissionsDao> implements PermissionService {
}

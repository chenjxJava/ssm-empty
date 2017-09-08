package com.chenjx.common.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.chenjx.common.base.BaseMapper;
import com.chenjx.common.base.BaseService;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 13:14 2017-08-25
 * @Modified By:
 */
public class BaseServiceImpl<T, M extends BaseMapper<T>> implements BaseService<T> {
	@Autowired
	protected M dao;

	public Boolean insert(T entity) {
		return dao.insert(entity)>0;
	}

	public Boolean delete(String id) {
		return dao.delete(id)>0;
	}

	public T findById(String id) {
		return dao.findById(id);
	}

	@Override
	public List<T> findList(T entity) {
		return dao.findList(entity);
	}

	public List<T> findAllList() {
		return dao.findAllList();
	}

	public Boolean update(T entity) {
		return dao.update(entity)>0;
	}
}

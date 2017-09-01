package com.chenjx.common.base.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.chenjx.common.base.BaseDao;
import com.chenjx.common.base.BaseService;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 13:14 2017-08-25
 * @Modified By:
 */
public class BaseServiceImpl<T, M extends BaseDao<T>> implements BaseService<T> {
	@Autowired
	private M dao;

	public void insert(T entity) {
		dao.insert(entity);
	}

	public void delete(String id) {
		dao.delete(id);
	}

	public T findById(String id) {
		return dao.findById(id);
	}

	public List<T> findAllList() {
		return dao.findAllList();
	}

	public void update(T entity) {
		update(entity);
	}
}

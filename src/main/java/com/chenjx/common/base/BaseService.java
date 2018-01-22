package com.chenjx.common.base;

import java.util.List;

public interface BaseService<T> {
	Boolean insert(T entity);

	Boolean delete(String id);

	T findById(String id);

	List<T> findList(T entity);

	List<T> findAllList();

	Boolean update(T entity);
}

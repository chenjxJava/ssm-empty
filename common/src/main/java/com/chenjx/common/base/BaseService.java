package com.chenjx.common.base;

import java.util.List;

public interface BaseService<T> {
	void insert(T entity);

	void delete(String id);

	T findById(String id);

	//List<Permissions> findList(Permissions permissions);

	List<T> findAllList();

	void update(T entity);
}

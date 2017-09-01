package com.chenjx.common.base;

import java.util.List;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 13:22 2017-08-25
 * @Modified By:
 */
public interface BaseDao<T> {
	void insert(T entity);

	void delete(String id);

	T findById(String id);

	//List<Permissions> findList(Permissions permissions);

	List<T> findAllList();

	void update(T entity);
}

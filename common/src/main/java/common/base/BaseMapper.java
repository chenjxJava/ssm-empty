package common.base;

import java.util.List;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 13:22 2017-08-25
 * @Modified By:
 */
public interface BaseMapper<T> {
	Integer insert(T entity);

	Integer delete(String id);

	T findById(String id);

	List<T> findList(T entity);

	List<T> findAllList();

	Integer update(T entity);
}

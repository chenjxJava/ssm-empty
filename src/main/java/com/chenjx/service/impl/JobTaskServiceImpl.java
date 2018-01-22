package com.chenjx.service.impl;

import org.springframework.stereotype.Service;

import com.chenjx.service.JobTaskService;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 16:23 2018/1/17
 * @Modified By:
 */
@Service("JobTaskService")
public class JobTaskServiceImpl implements JobTaskService {
	@Override
	public void sayHello() {
		System.out.println("执行定时任务");
	}
}

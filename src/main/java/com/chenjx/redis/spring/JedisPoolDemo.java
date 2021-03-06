package com.chenjx.redis.spring;

import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.chenjx.redis.service.impl.CountServiceImpl;

public class JedisPoolDemo {
	public static void main(String[] args) {
		ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("src/main/resources/config/spring-context-jedis.xml");
		CountServiceImpl countServiceImpl = (CountServiceImpl) context.getBean("countServiceImpl");
		countServiceImpl.set("key1001", "hahah");
		countServiceImpl.get("key1001");
	}
}

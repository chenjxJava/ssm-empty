package com;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 15:17 2018/1/18
 * @Modified By:
 */



public class MainTest {
	public static void main(String[] args) {
		System.out.println("Test start.");
		ApplicationContext context = new ClassPathXmlApplicationContext("classpath:config/spring-quartz.xml");
		//如果配置文件中将startQuertz bean的lazy-init设置为false 则不用实例化
		Object startQuertz = context.getBean("jobs");
		System.out.print("Test end..");
	}
	
}

##【工程结构】
	ssm
 		|___common
 		|___service
 		|___web
 		
##【权限管理】
		|user
		|role
		|permission
		
##【url】
		1.首页
			localhost:8080/login/login.html?username=cs001&password=FDE11C5E23A882CC79B2C206EB2D19AE
		2.swagger页面
			localhost:8080/swagger-ui.html
		3.freemarker
			localhost:8080/user/info.html

#common包中添加jedis
1.添加maven依赖
			<dependency>
  			<groupId>redis.clients</groupId>
  			<artifactId>jedis</artifactId>
  			<version>2.9.0</version>
  		</dependency>
2.添加spring-context-jedis.xml(需要加载redis.config)
3.RedisDemo、JedisPoolDemo(spring管理)
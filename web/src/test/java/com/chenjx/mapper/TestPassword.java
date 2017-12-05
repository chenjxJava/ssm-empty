package com.chenjx.mapper;

import common.utils.PasswordHelper;
import org.junit.Test;

import common.utils.MD5;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:42 2017-09-26
 * @Modified By:
 */
public class TestPassword {

	@Test
	public void testMd5() {
		String chenjx = MD5.md5("chenjx");
		System.out.println(chenjx);	//FDE11C5E23A882CC79B2C206EB2D19AE
	}

	@Test
	public void check() {
		String password = MD5.md5("123456");
		boolean b = new PasswordHelper().checkPassword(password,
				"f1768b3f0c8e08a2f185effcf058927c", "e858b90bc32063c2c09de6ee950650b8");
		System.out.println(b);
	}
}

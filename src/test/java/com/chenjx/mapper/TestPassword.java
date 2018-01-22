package com.chenjx.mapper;

import org.junit.Test;

import com.chenjx.common.utils.password.MD5;
import com.chenjx.common.utils.password.EncryptAndDecodeHelper;
import com.chenjx.common.utils.password.PasswordHelper;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 17:42 2017-09-26
 * @Modified By:
 */
public class TestPassword {

	// 加密
	@Test
	public void testMd5() {
		String chenjx = MD5.md5("chenjx");
		System.out.println(chenjx);	//FDE11C5E23A882CC79B2C206EB2D19AE
	}

	// 加密
	@Test
	public void testenctr() throws Exception {
		String encode = EncryptAndDecodeHelper.Base64Encode("this is good", "GBK");
		System.out.println(encode);	//dGhpcyBpcyBnb29k

		String decode = EncryptAndDecodeHelper.Base64Decode(encode, "GBK");
		System.out.println(decode);
	}

	@Test
	public void check() {
		String password = MD5.md5("123456");
		boolean b = new PasswordHelper().checkPassword(password,
				"f1768b3f0c8e08a2f185effcf058927c", "e858b90bc32063c2c09de6ee950650b8");
		System.out.println(b);
	}
}

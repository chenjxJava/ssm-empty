package com.chenjx;

import org.junit.Test;

import com.chenjx.common.utils.password.MD5;


/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:03 2017-09-20
 * @Modified By:
 */
public class TestMD5 {
	@Test			//FDE11C5E23A882CC79B2C206EB2D19AE
	public void decoder() {
		System.out.println( MD5.md5("chenjx"));
	}

}

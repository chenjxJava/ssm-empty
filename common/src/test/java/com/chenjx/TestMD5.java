package com.chenjx;

import org.junit.Test;

import com.chenjx.common.utils.MD5;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:03 2017-09-20
 * @Modified By:
 */
public class TestMD5 {
	@Test
	public void decoder() {
		System.out.println( MD5.md5("chenjx"));
	}

}

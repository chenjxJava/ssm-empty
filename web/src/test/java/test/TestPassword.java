package test;

import org.junit.Test;

import com.chenjx.common.utils.MD5;

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
}

package common.utils.password;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class GenerateCodeUtils {
	/**
	 * 自动生成会员代码
	 * 
	 * @return
	 */
	public static String getCodeForMember() {
		SimpleDateFormat sf = new SimpleDateFormat("yyyyMMddHHmmss");
		StringBuffer code = new StringBuffer("duc");
		code.append(sf.format(new Date())).append(new Random().nextInt(999));
		return code.toString();
	}
}

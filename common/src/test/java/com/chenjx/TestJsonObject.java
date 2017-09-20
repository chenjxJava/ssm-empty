package com.chenjx;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:05 2017-09-01
 * @Modified By:
 */

import java.util.Date;
import java.util.HashMap;

import org.junit.Test;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONObject;
import com.alibaba.fastjson.serializer.SerializerFeature;

public class TestJsonObject {

	@Test
	public void test() {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name","123");
		HashMap<String, String> hsmap = new HashMap<String, String>();
		hsmap.put("userId","150");
		hsmap.put("age","23");
		jsonObject.put("map",hsmap);
		System.out.println(jsonObject.toString());
	}

	@Test
	public void testDateFormat() {
		HashMap<String, Object> hsmap = new HashMap<String, Object>();
		hsmap.put("userId","150");
		hsmap.put("age","23");
		hsmap.put("date", new Date());
		System.out.println(JSON.toJSONStringWithDateFormat(hsmap, "yyyyMMddHHmmss", new SerializerFeature[0]));
	}
}

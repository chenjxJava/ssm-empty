package com.chenjx;

/**
 * @Author: chenjx
 * @Description:
 * @Date: Created in 10:05 2017-09-01
 * @Modified By:
 */

import java.util.HashMap;

import com.alibaba.fastjson.JSONObject;

public class TestJsonObject {
	public static void main(String[] args) {
		//demo1();
	}

	private static void demo1() {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("name","123");
		HashMap<String, String> hsmap = new HashMap<String, String>();
		hsmap.put("userId","150");
		hsmap.put("age","23");
		jsonObject.put("map",hsmap);
		System.out.println(jsonObject.toString());
	}
}

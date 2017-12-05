package common.entity;

import java.io.IOException;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import common.utils.password.EncryptAndDecodeHelper;

public class WebResultEntity {
	private String success;
	private String msg;
	private Object data;
	private Integer total_page;
	private Long total_count;

	public Long getTotal_count() {
		return total_count;
	}

	public void setTotal_count(Long total_count) {
		this.total_count = total_count;
	}

	public Integer getTotal_page() {
		return total_page;
	}

	public void setTotal_page(Integer total_page) {
		this.total_page = total_page;
	}

	public String getSuccess() {
		return this.success;
	}

	public void setSuccess(String success) {
		this.success = success;
	}

	public String getMsg() {
		return this.msg;
	}

	public void setMsg(String msg) {
		this.msg = msg;
	}

	public void setErrorMessage(String msg) {
		this.success = "0";
		this.msg = msg;
	}

	public void setMessage(String msg) {
		this.success = "1";
		this.msg = msg;
	}

	public void setMessageAndData(String msg, Object obj) {
		this.success = "1";
		this.msg = msg;
		this.data = obj;
	}
	//session过期的返回
	public void setSessionErrorMessage(String msg) {
		this.success = "2";
		this.msg = msg;
	}
	//实名认证的错误
	public void setRealNameErrorMessage(String msg) {
		this.success = "3";
		this.msg = msg;
	}

	public void setDataSucMessage(String success, String msg) {
		this.success = success;
		this.msg = msg;
	}
	
	public void setErrorMessageAndData(String msg, Object obj)
	{
		this.success = "0";
		this.msg = msg;
		this.data = obj;
	}

	public void printJson(Object obj, HttpServletResponse response) {
		try {
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(json);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	public void printJson_encode(Object obj, HttpServletResponse response) {
		try {
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(EncryptAndDecodeHelper.encoder(json, "GBK"));
			response.getWriter().flush();
			response.getWriter().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Object getData() {
		return this.data;
	}

	public void setData(Object data) {
		this.data = data;
	}
}

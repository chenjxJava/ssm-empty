package com.chenjx.common.entity;

import java.io.IOException;
import java.io.Serializable;

import javax.servlet.http.HttpServletResponse;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;
import com.chenjx.common.utils.password.EncryptAndDecodeHelper;
import com.chenjx.common.utils.password.Snippet;

/**
 *支付异步通知信息 
 *
 */
public class PayEntityWeb implements Serializable{
	/**
	 * 交易是否成功
	 */
	private boolean success;
	/**
	 * 交易前置流水号
	 */
	private String frontLogNo;
	/**
	 * 交易信息
	 */
	private String msg;
	/**
	 * 处理结果
	 */
	private Object data;
	/**
	 * 商户订单号
	 */
	private String orderNum;

	public String formtParam(Object obj) throws Exception{
		String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
		return EncryptAndDecodeHelper.encoder(json, "GBK");
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getFrontLogNo() {
		return frontLogNo;
	}

	public void setFrontLogNo(String frontLogNo) {
		this.frontLogNo = frontLogNo;
	}

	public String getMessage() {
		return msg;
	}

	public void setMessage(String message) {
		this.msg = message;
	}

	public Object getData() {
		return data;
	}

	public void setData(Object data) {
		this.data = data;
	}

	public String getOrderNum() {
		return orderNum;
	}

	public void setOrderNum(String orderNum) {
		this.orderNum = orderNum;
	}
	public void printJson_encode(Object obj, HttpServletResponse response) {
		try
		{
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(EncryptAndDecodeHelper.encoder(json, "GBK"));
			response.getWriter().flush();
			response.getWriter().close();
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	public void printJson(Object obj, HttpServletResponse response)
	{
		try
		{
			String json = JSON.toJSONStringWithDateFormat(obj, "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(json);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
	
	public void printJson1(Object obj, HttpServletResponse response)
	{
		try
		{
			
			String json = JSON.toJSONStringWithDateFormat(Snippet.formtParam(obj), "yyyy-MM-dd HH:mm:ss", new SerializerFeature[0]);
			response.setContentType("text/html;charset=utf-8");
			response.getWriter().write(json);
			response.getWriter().flush();
			response.getWriter().close();
		} catch (IOException e) {
			e.printStackTrace();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}

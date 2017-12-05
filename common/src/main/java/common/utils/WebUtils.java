package common.utils;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Map;

import javax.servlet.ServletRequest;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.util.StringUtils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.serializer.SerializerFeature;

public class WebUtils {
	public static boolean isAjax(ServletRequest request){
		return "XMLHttpRequest".equalsIgnoreCase(((HttpServletRequest) request).getHeader("X-Requested-With"));
	}

	public static void sendJson(Object obj, HttpServletResponse response){
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

	public static String getHttpServiceData(String requestURL, Map<String, Object> requestMap, String method) {

		if (StringUtils.isEmpty(requestURL)) {
			return null;
		}

		if (!StringUtils.isEmpty(method) && !StringUtils.isEmpty(method.trim()) && method.trim().toUpperCase().equals("GET")) {
			method = "GET";
		} else {
			method = "POST";
		}
		String result = "";
		URL url = null;
		HttpURLConnection httpurlconnection = null;
		InputStream in = null;
		BufferedReader reader = null;

		try {

			String requestParams = "";
			if (!requestMap.isEmpty()) {
				for (Map.Entry<String, Object> entry : requestMap.entrySet()) {
					String key = entry.getKey();
					Object value = entry.getValue();

					String param = key + "=" + value.toString();
					requestParams += requestParams == "" ? param : ("&" + param);
				}
			}
			if (method.equals("GET")) {
				url = new URL(requestURL + "?" + requestParams);
				httpurlconnection = (HttpURLConnection) url.openConnection();
				httpurlconnection.setRequestMethod(method);
			} else if (method.equals("POST")) {
				url = new URL(requestURL);
				httpurlconnection = (HttpURLConnection) url.openConnection();
				httpurlconnection.setDoOutput(true);
				httpurlconnection.setRequestMethod(method);

				httpurlconnection.getOutputStream().write(requestParams.getBytes());
				httpurlconnection.getOutputStream().flush();
				httpurlconnection.getOutputStream().close();
			}
			if (httpurlconnection != null) {
				in = httpurlconnection.getInputStream();
				reader = new BufferedReader(new InputStreamReader(in, "utf8"));
				String str = reader.readLine();
				while (str != null) {
					result += str;
					str = reader.readLine();
				}
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			if (reader != null) {
				try {
					reader.close();
				} catch (IOException e) {
				}
			}
			if (httpurlconnection != null) {
				httpurlconnection.disconnect();
			}
		}
		return result;
	}

}

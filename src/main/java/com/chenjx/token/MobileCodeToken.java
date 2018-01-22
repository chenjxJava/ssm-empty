package com.chenjx.token;

import org.apache.shiro.authc.HostAuthenticationToken;
import org.apache.shiro.authc.RememberMeAuthenticationToken;

public class MobileCodeToken implements HostAuthenticationToken, RememberMeAuthenticationToken {
	private String id;
	private char[] code;
	private boolean rememberMe;
	private String host;

	public MobileCodeToken() {
		this.rememberMe = false;
	}

	public MobileCodeToken(String id) {
		this(id, (char[])null, false, (String)null);
	}
	public MobileCodeToken(String id, char[] code) {
		this(id, (char[])code, false, (String)null);
	}

	public MobileCodeToken(String id, String code) {
		this(id, (char[])(code != null ? code.toCharArray() : null), false, (String)null);
	}

	public MobileCodeToken(String id, char[] code, String host) {
		this(id, code, false, host);
	}

	public MobileCodeToken(String id, String code, String host) {
		this(id, code != null ? code.toCharArray() : null, false, host);
	}

	public MobileCodeToken(String id, char[] code, boolean rememberMe) {
		this(id, (char[])code, rememberMe, (String)null);
	}

	public MobileCodeToken(String id, String code, boolean rememberMe) {
		this(id, (char[])(code != null ? code.toCharArray() : null), rememberMe, (String)null);
	}

	public MobileCodeToken(String id, char[] code, boolean rememberMe, String host) {
		this.rememberMe = false;
		this.id = id;
		this.code = code;
		this.rememberMe = rememberMe;
		this.host = host;
	}

	public MobileCodeToken(String id, String code, boolean rememberMe, String host) {
		this(id, code != null ? code.toCharArray() : null, rememberMe, host);
	}

	public String getid() {
		return this.id;
	}

	public void setid(String id) {
		this.id = id;
	}

	public char[] getcode() {
		return this.code;
	}

	public void setcode(char[] code) {
		this.code = code;
	}

	public Object getPrincipal() {
		return this.getid();
	}

	public Object getCredentials() {
		return this.getcode();
	}

	public String getHost() {
		return this.host;
	}

	public void setHost(String host) {
		this.host = host;
	}

	public boolean isRememberMe() {
		return this.rememberMe;
	}

	public void setRememberMe(boolean rememberMe) {
		this.rememberMe = rememberMe;
	}

	public void clear() {
		this.id = null;
		this.host = null;
		this.rememberMe = false;
		if (this.code != null) {
			for(int i = 0; i < this.code.length; ++i) {
				this.code[i] = 0;
			}

			this.code = null;
		}

	}

	public String toString() {
		StringBuilder sb = new StringBuilder();
		sb.append(this.getClass().getName());
		sb.append(" - ");
		sb.append(this.id);
		sb.append(", rememberMe=").append(this.rememberMe);
		if (this.host != null) {
			sb.append(" (").append(this.host).append(")");
		}

		return sb.toString();
	}
}

package com.chenjx.sys.model;


public class Permissions {
	private Long id;
	private String permission;
	private String description;
	private String available;

	public Permissions() {
	}

	public Permissions(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPermission() {
		return permission;
	}

	public void setPermission(String permission) {
		this.permission = permission;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String  getAvailable() {
		return available;
	}

	public void setAvailable(String available) {
		this.available = available;
	}

	@Override
	public String toString() {
		new Role();
		return "Permissions{" +
			"id=" + id +
			", permission='" + permission + '\'' +
			", description='" + description + '\'' +
			", available=" + available +
			'}';
	}
}

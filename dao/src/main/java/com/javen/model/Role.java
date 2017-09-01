package com.javen.model;

import java.util.List;

public class Role {
	private Long id;
	private String roleName;
	private String description;
	private Boolean available;
	private List<Permissions> permissionsList;

	public Role() {
	}

	public Role(Long id) {
		this.id = id;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRoleName() {
		return roleName;
	}

	public void setRoleName(String roleName) {
		this.roleName = roleName;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Boolean getAvailable() {
		return available;
	}

	public void setAvailable(Boolean available) {
		this.available = available;
	}

	public List<Permissions> getPermissionsList() {
		return permissionsList;
	}

	public void setPermissionsList(List<Permissions> permissionsList) {
		this.permissionsList = permissionsList;
	}

	@Override
	public String toString() {
		return "Role{" +
			"id=" + id +
			", roleName='" + roleName + '\'' +
			", description='" + description + '\'' +
			", available=" + available +
			", permissionsList=" + permissionsList +
			'}';
	}
}

/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50527
Source Host           : localhost:3306
Source Database       : maven

Target Server Type    : MYSQL
Target Server Version : 50527
File Encoding         : 65001

Date: 2017-12-05 23:08:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for sys_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_permissions`;
CREATE TABLE `sys_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `permission` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL COMMENT '0-不使用，1-使用；',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_permissions
-- ----------------------------
INSERT INTO `sys_permissions` VALUES ('1', 'user:add', '用户增加权限', '1');
INSERT INTO `sys_permissions` VALUES ('2', 'user:edit', '用户修改权限', '1');
INSERT INTO `sys_permissions` VALUES ('3', 'user:update', '用户更新权限', '1');
INSERT INTO `sys_permissions` VALUES ('4', 'user:delete', '用户删除权限', '1');
INSERT INTO `sys_permissions` VALUES ('5', 'app:add', '4545', '1');
INSERT INTO `sys_permissions` VALUES ('6', 'app:edit', 'abb限', '1');

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `available` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
INSERT INTO `sys_role` VALUES ('1', '系统管理员', '系统管理员', '1');
INSERT INTO `sys_role` VALUES ('2', '系统测试员', '测试', '1');
INSERT INTO `sys_role` VALUES ('3', '测试角色1', '测试角色', '1');
INSERT INTO `sys_role` VALUES ('4', 'xxx', 'xxxx', '1');

-- ----------------------------
-- Table structure for sys_role_permissions
-- ----------------------------
DROP TABLE IF EXISTS `sys_role_permissions`;
CREATE TABLE `sys_role_permissions` (
  `permissions_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`permissions_id`,`role_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_role_permissions
-- ----------------------------
INSERT INTO `sys_role_permissions` VALUES ('1', '1');
INSERT INTO `sys_role_permissions` VALUES ('1', '2');
INSERT INTO `sys_role_permissions` VALUES ('2', '1');
INSERT INTO `sys_role_permissions` VALUES ('2', '3');
INSERT INTO `sys_role_permissions` VALUES ('3', '1');
INSERT INTO `sys_role_permissions` VALUES ('3', '4');
INSERT INTO `sys_role_permissions` VALUES ('4', '1');

-- ----------------------------
-- Table structure for sys_users
-- ----------------------------
DROP TABLE IF EXISTS `sys_users`;
CREATE TABLE `sys_users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `salt` varchar(255) DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_users
-- ----------------------------
INSERT INTO `sys_users` VALUES ('1', 'chenjx', 'ed1083dc86ce013a774de81574e036a2', '4f0810debf9fb93f304410f921447222');
INSERT INTO `sys_users` VALUES ('2', 'cs001', '9a25dfa08d939d0511e2146385306a53', '6ee7be32da00d252c40de98383578a39');
INSERT INTO `sys_users` VALUES ('3', 'cs002', 'f1768b3f0c8e08a2f185effcf058927c', 'e858b90bc32063c2c09de6ee950650b8');

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `userId` bigint(20) NOT NULL,
  `roleId` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
INSERT INTO `sys_user_role` VALUES ('2', '1');
INSERT INTO `sys_user_role` VALUES ('3', '1');
INSERT INTO `sys_user_role` VALUES ('3', '2');
INSERT INTO `sys_user_role` VALUES ('3', '3');

-- ----------------------------
-- Table structure for user_t
-- ----------------------------
DROP TABLE IF EXISTS `user_t`;
CREATE TABLE `user_t` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(60) NOT NULL,
  `password` varchar(60) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_t
-- ----------------------------
INSERT INTO `user_t` VALUES ('1', 'admin', 'admin', '18');
INSERT INTO `user_t` VALUES ('2', 'zhu', '123456', '2');
INSERT INTO `user_t` VALUES ('3', 'zhangsan', '123456', '18');
INSERT INTO `user_t` VALUES ('4', 'zhangsan', '123456', '18');

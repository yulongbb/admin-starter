/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 80013
 Source Host           : localhost:3306
 Source Schema         : admin-starter

 Target Server Type    : MySQL
 Target Server Version : 80013
 File Encoding         : 65001

 Date: 31/01/2019 15:02:59
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for permission
-- ----------------------------
DROP TABLE IF EXISTS `permission`;
CREATE TABLE `permission`  (
  `id` int(11) NOT NULL,
  `method` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `remark` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of permission
-- ----------------------------
INSERT INTO `permission` VALUES (2, 'GET', '资源', '设置资源', '/resource');
INSERT INTO `permission` VALUES (3, 'GET', '首页', '首页', '/index');
INSERT INTO `permission` VALUES (4, 'GET', '用户列表', '用户列表', '/api/users');
INSERT INTO `permission` VALUES (5, 'GET', '通过用户名查看用户', '通过用户名查看用户', '/api/users/username');
INSERT INTO `permission` VALUES (6, 'GET', '通过ID名查看用户', '通过ID查看用户', '/api/users/id');
INSERT INTO `permission` VALUES (7, 'PUT', '上传头像', '上传头像', '/api/users/avatar/**');

SET FOREIGN_KEY_CHECKS = 1;

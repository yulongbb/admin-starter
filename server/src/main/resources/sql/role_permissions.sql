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

 Date: 31/01/2019 15:03:16
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for role_permissions
-- ----------------------------
DROP TABLE IF EXISTS `role_permissions`;
CREATE TABLE `role_permissions`  (
  `role_id` bigint(20) NOT NULL,
  `permissions_id` int(11) NOT NULL,
  INDEX `FKclluu29apreb6osx6ogt4qe16`(`permissions_id`) USING BTREE,
  INDEX `FKlodb7xh4a2xjv39gc3lsop95n`(`role_id`) USING BTREE,
  CONSTRAINT `FKclluu29apreb6osx6ogt4qe16` FOREIGN KEY (`permissions_id`) REFERENCES `permission` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `FKlodb7xh4a2xjv39gc3lsop95n` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of role_permissions
-- ----------------------------
INSERT INTO `role_permissions` VALUES (1, 2);
INSERT INTO `role_permissions` VALUES (2, 2);
INSERT INTO `role_permissions` VALUES (1, 3);
INSERT INTO `role_permissions` VALUES (1, 4);
INSERT INTO `role_permissions` VALUES (1, 5);
INSERT INTO `role_permissions` VALUES (1, 6);
INSERT INTO `role_permissions` VALUES (1, 7);

SET FOREIGN_KEY_CHECKS = 1;

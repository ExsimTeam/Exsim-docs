# 1. 数据库设计
>(tableName=EXSIM_db)

## 1.1 user

| column   | type         | properties  |comment       |
| -------| ------------- | ------------|------------- |
| id| bigint|not nulauto__increment |             |
| username | varchar(100) | not null        |   |
| password | varchar(100) | default null   |         |
| email    | varchar(100) | not null       | distinct,login needed|
| status   | tinyint(1) | default 0      | 0 is frozen,1 is activated |

## 1.2 file

| column | type| properties | comment |
| ---| ---| --- | --- |
| id  | bigint | not null auto_ increment | |
| file_name | varchar(100) | not null ||
| file_path | varchar(200) | not null ||
| created_time | datetime | not null ||
| last_modify_time| datetime| not null ||
| last_modify_user_id | bigint| not null ||
| create_author_id | bigint| not null | |
| description | varchar(200) | default null | |
| property|tinyint(1)|default 0 | 0 is private,1 is public

## 1.3 file_permission

| column | type| properties| comment |
| --- | --- | --- | --- |
| id | bigint | not null auto __increment | |
| user_id | bigint| not null | |
| file_id | bigint| not null| |
| permission | tinyint(1) | default 0 | 0 is read only,1 is write and read |
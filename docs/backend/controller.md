# 2. Controller

## 2.1 AuthController

映射登录相关路径

### 成员
|name | type |
|---|---|
|loginService | LoginService|


### (1)login

#### 请求参数（LoginParam）:

| param| type   | required | description |
| ---| --- | ---| --- |
| email | String | true |用邮箱登录 |
| password | String | true  | 密码 |

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200  success**
>- **600  params error**
>- **601  username or password incorrect**

msg:
>message

data:

| param| type   | required | description |
| -------------------------------------- | ------ | -------- | ----------- |
|token|String|true||


#### description

>对已注册的用户校验登录，未注册的无法登录。成功返回token，失败返回错误信息


***



### (2)register
#### 请求参数(RegisterParam):
| param| type   | required | description |
| ---------- | ------ | -------- | ----------- | 
|username   | String |true      |
|password    | String |true      |
|email       | String |true      |
|verify|String|true|

#### 返回体
httpStatus: 
>- **200 OK**

code:
>- **200 success**
>- **600 params error**
>- **603 has registered**

data:
>null

description:

>已经注册过的用户无法注册。

***

### (3)sendVerify
#### 请求参数（SendVerifyParam）:

| param | type   | required | description |
| ---| --- | ---| --- |
| email | String | true  |  |


#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200  success**
>- **600 params error**

msg:
>message

data:
>null

#### description
>发送验证码到邮箱email
***

### (4)setPassword
#### 请求参数（setPasswordParam）:

| param name | type   | required | description |
| ---| --- | ---| --- |
| id | Integer | true |用户ID |
| password | String | true  | 密码 |
| verify|String|true|验证码 |

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200  success**
>- **600  params error**
>- **604  verification code incorrect**

msg:
>message

data:
>null

#### description
>验证验证码正确性，正确的则交给service层修改密码

***
### (5) logout
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true|

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200  success**

msg:
>message

data:
>null

#### description
>从redis中删除token

***
### (6) deregister
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true|

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200  success**

msg:
>message

data:
>null

#### description
>从数据库中删除用户信息，并且删除该用户创建的文档

***
***

## 2.2 UserController
### 成员
|name | type |
|---|---|
|userService | UserService|
### (1) changeUserName
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|newName|String|true

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200 success**
>- **600 params error** 

msg:
>message

data:
>null

#### description
>修改用户名

***
***

## 2.3 FileController
### 成员
|name | type |
|---|---|
|fileService | FileService|
### (1) getFileList
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||

#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200 success**
>- **600 params error** 

msg:
>message

data:
| param| type | description |
| ---| --- | ---|
|files|FileListVo|

FileListVo
|param|type|description|
|---|---|---|
|files|List &lt;FileVo&gt;||
|num|int||

FileVo
| param| type| comment |
| ---| ---| --- |
| id  | long |  |
| file_name | String| |
| last_modify_time| Date|
| last_modify_user_id | long||
| create_author_id | long|  |
| description | String|  |
| property|boolean| 0 is private,1 is public|
|permission|boolean|0 is read only,1 is write and read


#### description
>获取该用户拥有权限的文件

***


### (2)getFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|fileId|int|true|

#### 返回体：

httpStatus:
>- **200 OK**
>- **403 NO PERMISSION**

code:
>- **200 success**
>- **600 params error**
>- **605 no file**
>- **403 no permission**

msg:
>message

data:
| param| type | description |
| ---| --- | ---|
|file|MultiPartFile||


#### description
>获取文件

***

### (3)createFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|fileName|String|true||
|property|boolean|true|0 is private,1 is public|
|description|String|false||


#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200 success**
>- **600 params error** 

msg:
>message

data:
>null


#### description
>新建文件

***

### (4)saveFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|fileId|int|true||
|file|MultiPartFile|true||



#### 返回体：

httpStatus:
>- **200 OK**
>- **403 NO PERMISSION**

code:
>- **200 success**
>- **600 params error** 
>- **605 no file**
>- **403 no permission**

msg:
>message

data:
>null


#### description
>保存文件

***

### (5)removeFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|fileId|int|true||



#### 返回体：

httpStatus:
>- **200 OK**
>- **403 NO PERMISSION**

code:
>- **200 success**
>- **600 params error** 
>- **605 no file**
>- **403 no permission**

msg:
>message

data:
>null


#### description
>创建者直接删除文件，共享者不再拥有权限

***


### (6)shareFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|fileId|int|true||
|permission|boolean|true||



#### 返回体：

httpStatus:
>- **200 OK**
>- **403 NO PERMISSION**

code:
>- **200 success**
>- **600 params error** 
>- **605 no file**
>- **403 no permission**

msg:
>message

data:
| param| type | description |
| ---| --- | ---|
|shareCode|String||


#### description
>生成分享码分享文件(只有创建者可以分享)

***

### (7)addFile
#### 请求参数:

| param name | type   | required | description |
| ---| --- | ---| --- |
|token|String|true||
|shareCode|String|true||



#### 返回体：

httpStatus:
>- **200 OK**

code:
>- **200 success**
>- **600 params error** 
>- **605 no file**
>- **606 incorrect share code**
>- **607 file has been added**

msg:
>message

data:
null


#### description
>添加他人分享的文件

***
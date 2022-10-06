# Authentication
## Overview
该模块主要用于用户验证，包括用户登陆、注册、注销、修改密码等操作。

## /login

用户登陆api，调用此api完成登录动作。若登录成功，返回用户token以及用户相关信息；若失败，返回相应的原因。

### Request
```
POST /api/auth/login
```

<!-- ### Path parameters
| Name | Value  | Description    | Additional |
| ---- | ------ | -------------- | ---------- |
| demo | string | a demo for api | optional   |
| test | number | a test for api | required   |
|      |        |                |            |
--> 

### Request body
```json
{
  "email": "string",
  "password": "string"
}
```

### Response
::: tabs#response

@tab 200

登录成功，返回token与用户信息
```json
{
  "code": 1,
  "msg": "success",
  "token": "string",
  "username": "string"
}
```

登录失败，返回相应的原因
```json
{
  "code": 100,
  "msg": "username or password incorrect"
}
```
:::

## /register
用户注册，用户名只能包括汉字、字母、数字以及下划线；密码8-20位，需要包涵字母、数字、特殊字符(!?_-$&+)。若格式不正确，服务器应给出`500`http状态码，因为经过前端验证后格式仍然错误的请求可以视为 `Bad Request`。

### Request
```
POST /api/auth/register
```

### Request Body
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "verify": "string"
}
```

### Response
::: tabs#response

@tab 200

注册成功
```json
{
  "code": 1,
  "msg": "success",
  "token": "string",
  "username": "string"
}
```

用户重复注册
```json
{
  "code": 100,
  "msg": "user has already registered"
}
```

验证码错误
```json
{
  "code": 101,
  "msg": "wrong verification code"
}
```

:::


## /sendVerify

向指定邮箱发送一封验证码邮件

### Request
```
POST /api/auth/sendVerify
```

### Request Body
```json
{
  "email": "string"
}
```

### Response
::: tabs#response

@tab 200

发送成功
```json
{
  "code": 1,
  "msg": "success"
}
```

:::


## /resetPassword

修改密码，需要邮箱验证码，密码格式同注册。

### Request
```
POST /api/auth/resetPassword
```

### Request Body
```json
{
  "email": "string",
  "verify": "string",
  "newPassword": "string"
}
```

### Response
::: tabs#response

@tab 200

修改密码成功
```json
{
  "code": 1,
  "msg": "success"
}
```

验证码不正确
```json
{
  "code": 100,
  "msg": "success"
}
```

:::


## /logout

::: info Require token
:::
登出

### Request
```
GET /api/auth/logout
```

### Response
::: tabs#response

@tab 200

修改密码成功
```json
{
  "code": 1,
  "msg": "success"
}
```

验证码不正确
```json
{
  "code": 100,
  "msg": "success"
}
```

:::
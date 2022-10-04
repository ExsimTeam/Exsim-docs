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

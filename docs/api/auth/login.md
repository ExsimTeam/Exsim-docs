# /login

用户登陆api，调用此api完成登录动作。若登录成功，返回用户token以及用户相关信息；若失败，返回相应的原因。

## Request
```
POST /api/auth/login
```

## Path parameters
| Name | Value  | Description    | Additional |
|------|--------|----------------|------------|
| demo | string | a demo for api | optional   |
| test | number | a test for api | required   |
|      |        |                |            |

## Request body
```json
{
  "email": "string",
  "password": "string"
}
```

## Response
### 200
登录成功，返回token与用户信息
```json
{
  "code": 1,
  "msg": "string",
  "token": "string",
  "role": "string"
}
```

登录失败，返回相应的原因
```json
{
  "code": 2,
  "msg": "string"
}
```